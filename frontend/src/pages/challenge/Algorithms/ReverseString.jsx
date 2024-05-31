import React, { useState, useEffect } from 'react';
import AceEditor from "react-ace";
import style from "./challenge.module.css";

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

import axios from 'axios';

export const ReverseString = () => {

    const [code, setCode] = useState('# write code here ...');
    const [language, setLanguage] = useState('python');
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState('terminal');
    const [output, setOutput] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [executing, setExecuting] = useState(false);
    const [title, setTitle] = useState('Reverse a String');
    const [fontSize, setFontSize] = useState(14);

    // Fetch challenge data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://hrclonebackend-production-26bd.up.railway.app/challenge");
                const challenges = response.data;

                // Filter challenges by title and set the specific challenge to state
                const filteredChallenge = challenges.find(challenge => 
                    challenge.title.toLowerCase() === title.toLowerCase()
                );
                if (filteredChallenge && filteredChallenge.sampleInput) {
                    setInput(filteredChallenge.sampleInput);
                }
                setData(filteredChallenge);
                setLoading(false);
                console.log(filteredChallenge);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [title]);

    // Handle code execution
    const handleRunCode = async () => {
        setExecuting(true);
        try {
            const result = await axios.post('https://hrclonebackend-production-26bd.up.railway.app/challenges/run', { code, language, stdin: input });
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
            const result = await axios.post('https://hrclonebackend-production-26bd.up.railway.app/challenges/submit', {
                code,
                language,
                challengeId: data?._id // assuming each challenge has a unique identifier
            });
            console.log(result.data);
            if (result.data.success) {
                alert('Problem submitted successfully and passed all test cases!');
            } else {
                alert('Submission failed: ' + result.data.message);
            }
        } catch (error) {
            alert(`Submission error: ${error.message}`);
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
        <>
            <div className={style.challenge}>
                <div className={style.question}>
                    {loading && <h1>Loading...</h1>}
                    {data && (
                        <div className={style.cont}>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <h2>Example</h2>
                            <p>{data.example}</p>
                            <h2>Function Description</h2>
                            <p>{data.functionDescription}</p>
                            <h2>Input Format</h2>
                            <p>{data.inputFormat}</p>
                            <h2>Constraints</h2>
                            <p>{data.constraints}</p>
                            <h2>Output Format</h2>
                            <p>{data.outputFormat}</p>
                            <h2>Sample Input</h2>
                            <p className={style.inpopt}>{data.sampleInput}</p>
                            <h2>Sample Output</h2>
                            <p className={style.inpopt}>{data.sampleOutput}</p>
                            <h2>Explanation</h2>
                            <p>{data.explanation}</p>
                            <h2>Hints</h2>
                            <p>{data.hints}</p>
                        </div>
                    )}
                </div>
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
                            <textarea
                                id="stdin"
                                value={input}
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
                </div>
            </div>
        </>
    );
};
