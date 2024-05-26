import React, { useState, useEffect } from 'react';
import AceEditor from "react-ace";
import style from "./challenge.module.css"

// Import all necessary modes
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/mode-ruby";

// Import themes
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";

import axios from 'axios';

export const ReverseString = () => {

    const [code, setCode] = useState('// write code here ...');
    const [language, setLanguage] = useState('Python');
    const [theme, setTheme] = useState('twilight');
    const [output, setOutput] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)

    // Fetch challenge data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:8080/challenge");
                setData(response.data);
                setLoading(false);
                console.log(response.data)
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Handle code execution
    const handleRunCode = async () => {
        try {
            const result = await axios.post('http://localhost:8080/challenges/run', { code, language });
            setOutput(result.data.output || result.data.error);
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    // Handle code submission
    const handleSubmitCode = async () => {
        try {
            const result = await axios.post('http://localhost:8080/challenges/submit', {
                code,
                language,
                challengeId: data?.id // assuming each challenge has a unique identifier
            });
            if (result.data.success) {
                alert('Code submitted successfully!');
            } else {
                alert('Submission failed: ' + result.data.message);
            }
        } catch (error) {
            alert(`Submission error: ${error.message}`);
        }
    };
    
    // Determine the editor mode based on the selected language
    const getMode = () => {
        switch (language) {
            case 'Python': return 'python';
            case 'C':
            case 'C++': return 'c_cpp';
            case 'R': return 'r';
            case 'Ruby': return 'ruby';
            case 'JavaScript': return 'javascript';
            default: return 'text';
        }
    };

  return (
    <>
    <div className={style.challenge}>
        <div className={style.question}>
            {loading && <h1>Loading...</h1>}
            {data && data.map((item, id)=>(
                item.title === "Reverse a String" && (
                    <div key={id} className={style.cont}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <h2>Example</h2>
                        <p>{item.example}</p>
                        <h2>Function Description</h2>
                        <p>{item.functionDescription}</p>
                        <h2>Input Format</h2>
                        <p>{item.inputFormat}</p>
                        <h2>Constraints</h2>
                        <p>{item.constraints}</p>
                        <h2>Output Format</h2>
                        <p>{item.outputFormat}</p>
                        <h2>Sample Input</h2>
                        <p className={style.inpopt} >{item.sampleInput}</p>
                        <h2>Sample Output</h2>
                        <p className={style.inpopt} >{item.sampleOutput}</p>
                        <h2>Explanation</h2>
                        <p>{item.explanation}</p>
                        <h2>Hints</h2>
                        <p>{item.hints}</p>
                    </div>
                )
            ))}
        </div>
        <div className={style.Editor}>
            <div className={style.themeLang}>
                <div className={style.theme}>
                    <label htmlFor="theme-select" style={{color:"blue"}}>Theme: </label>
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
                        <option value="Python">Python</option>
                        <option value="C">C</option>
                        <option value="C++">C++</option>
                        <option value="R">R</option>
                        <option value="Ruby">Ruby</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                </div>
                <div className={style.editorSetting}>
                    <button><img src="https://img.icons8.com/?size=48&id=89139&format=png" alt="editor setting" /></button>
                </div>
            </div>
            <div className={style.Editor}>
                <AceEditor
                    className={style.runEditor}
                    mode={getMode()}
                    theme={theme}
                    onChange={setCode}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    value={code}
                    height="400px"
                    width=""
                />
            </div>
            <div className={style.run_opt}>
                <div>
                    <pre>Input</pre>
                    <pre>Output: {output}</pre>
                </div>
                <div>
                    <button onClick={handleRunCode}>Run Code</button>
                    <button onClick={handleSubmitCode} style={{color:"white", backgroundColor:"green"}}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
