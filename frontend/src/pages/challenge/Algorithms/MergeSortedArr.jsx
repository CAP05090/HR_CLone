import React, { useState, useEffect } from 'react';
import style from "./challenge.module.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CodeEditor } from '../../../components/challenges/CodeEditor';
import { Footer } from '../../../components/dashboard/Footer/Footer';
import { Navbar } from '../../../components/dashboard/Navbar/Navbar';

export const MergeSortedArr = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('Merge Two Sorted Arrays');
    
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

    const TestCases = [
        {input:[[1, 2, 3], [4, 5, 6]], output:[1, 2, 3, 4, 5, 6]},
        {input:[5,6,7,9,3,4,2,12,4,8,0], output:12}
      ]

    return (
        <>
        <Navbar />
        {data && ( <div>
            {["problem", "submission", "leaderboard", "editorial"].map((linkType) => (
            <Link key={linkType} to={`/challenges/${data.title.toLowerCase().split(" ").join("-")}/${linkType}`}>
                {linkType.charAt(0).toUpperCase() + linkType.slice(1)}
            </Link>))}
        </div>)}
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
                <CodeEditor challengeData={data} testCase={TestCases} />
            </div>
            <Footer />
        </>
    );
};
