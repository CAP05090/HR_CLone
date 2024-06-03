import React, { useState, useEffect } from 'react';
import style from "./challenge.module.css";
import axios from 'axios';
import { CodeEditor } from '../../../components/challenges/CodeEditor';

export const ReverseString = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('Reverse a String');
    
    // Fetch challenge data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:8080/challenge");
                const challenges = response.data;

                // Filter challenges by title and set the specific challenge to state
                const filteredChallenge = challenges.find(challenge => 
                    challenge.title.toLowerCase() === title.toLowerCase()
                );
                if (filteredChallenge) {
                    setInput(filteredChallenge.sampleInput || "");
                    setData(filteredChallenge);
                } else {
                    setData(null);
                }
                setLoading(false);
                console.log(filteredChallenge);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [title]);

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
                <CodeEditor challengeData={data} />
            </div>
        </>
    );
};
