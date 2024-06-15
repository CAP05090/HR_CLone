import React, { useState, useEffect } from 'react';
import AceEditor from "react-ace";
import axios from 'axios';
import style from "./challenge.module.css";
import PopMessage from './PopMessage';

// Import all necessary modes
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-text";

// Import themes
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";

export const CodeEditor = ({ challengeData, TestCases }) => {
  const [code, setCode] = useState('# write code here ...');
  const [language, setLanguage] = useState('python');
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState('terminal');
  const [output, setOutput] = useState('');
  const [executing, setExecuting] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [testCase, setTestCase] = useState(null);
  
  useEffect(() => {
    if (challengeData) {
      setCode(challengeData.initialCode || '# write code here ...');
  
      if (challengeData.sampleInput) {
        if (Array.isArray(challengeData.sampleInput) && challengeData.sampleInput.length > 1) {
          const cleanedInput = challengeData.sampleInput.map(input => input.join(" "));
          // console.log(cleanedInput);
          setInput(cleanedInput);
        } else {
          // Handling the case when sampleInput is a single string or an array with a single element
          const cleanedInput = challengeData.sampleInput[0] ? challengeData.sampleInput[0].trim() : "";
          // console.log(cleanedInput);
          setInput(cleanedInput);
        }
      } else {
        setInput("");
      }
    }
  }, [challengeData]);

  // Handle code execution
  const handleRunCode = async () => {
    setExecuting(true);
    try {
      const result = await axios.post('http://localhost:8080/challenges/run', { code, language, stdin: input });
      setOutput(result.data.output || result.data.error);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setExecuting(false);
    }
  };

  // Handle code submission
  const handleSubmitCode = async () => {
    setExecuting(true);
    try {
      const result = await axios.post('http://localhost:8080/challenges/submit', {
        code,
        language,
        testCases: TestCases,
        challengeId: challengeData?._id // assuming each challenge has a unique identifier
      });
      // console.log(result.data)
      setTestCase(result.data);
      if (result.data.success) {
        console.log('Problem submitted successfully and passed all test cases!');
      } else {
        console.log('Submission failed: ' + result.data.message);
      }
    } catch (error) {
      console.log(`Submission error: ${error.message}`);
    } finally {
      setExecuting(false);
    }
  };

  // Determine the editor mode based on the selected language
  const getMode = () => {
    switch (language) {
      case 'python': return 'python';
      case 'c':
      case 'c++': return 'c_cpp';
      case 'r': return 'r';
      case 'ruby': return 'ruby';
      case 'javascript': return 'javascript';
      default: return 'text';
    }
  };

  return (
    <div className={style.Editor}>
      <div className={style.themeLang}>
        <div>
          {/* Slider for font size */}
          <label htmlFor="font-size">Font Size:</label>
          <input type="range" id="font-size" min="10" max="24" step="1.5" value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
          />
        </div>
        <div className={style.theme}>
          <label htmlFor="theme-select" style={{ color: "blue" }}>Theme: </label>
          <select id="theme-select" value={theme} onChange={(e) => setTheme(e.target.value)} className={style.dropdown}>
            <option value="github">GitHub</option>
            <option value="monokai">Monokai</option>
            <option value="clouds">Clouds</option>
            <option value="twilight">Twilight</option>
            <option value="solarized_dark">Solarized Dark</option>
            <option value="solarized_light">Solarized Light</option>
            <option value="terminal">Terminal</option>
          </select>
        </div>
        <div className={style.language}>
          <label htmlFor="language-select">Language: </label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className={style.dropdown}>
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="r">R</option>
            <option value="ruby">Ruby</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <div className={style.editorSetting}>
          <button><img src="https://img.icons8.com/?size=48&id=89139&format=png" alt="editor setting" /></button>
        </div>
      </div>
      {/* Ace Editor component */}
      <div className={style.Editor}>
        <AceEditor
          className={style.runEditor}
          mode={getMode()}
          theme={theme}
          fontSize={fontSize}
          onChange={setCode}
          name="UNIQUE_ID_OF_DIV" // Ensure this ID is unique in the page
          editorProps={{ $blockScrolling: true }}
          value={code}
          height="400px"
          width=""
        />
      </div>
      <div className={style.run_opt}>
        <div>
          <label htmlFor="stdin">Input:</label>
          <textarea id="stdin" value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: '100%', height: '50px', border: "1px solid grey" }}
          />
          <pre>Output: {output}</pre>
        </div>
        <div>
          <button onClick={handleRunCode} disabled={executing}>Run Code</button>
          <button onClick={handleSubmitCode} disabled={executing}>Submit</button>
        </div>
      </div>
      <div className={style.message}>
        {testCase && <PopMessage testCase={testCase} />}
      </div>
    </div>
  );
};

