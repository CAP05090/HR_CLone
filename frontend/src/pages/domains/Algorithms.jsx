import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Navbar } from '../../components/dashboard/Navbar/Navbar';
import { Footer } from '../../components/dashboard/Footer/Footer';
import style from "./algorithms.module.css";

export const Algorithms = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/challenge");
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className={style.algo}>
                <h2 id={style.topic}>Algorithms</h2>
                <div className={style.questions}>
                    {data && data.map((item) => (
                        <div className={style.question} key={item.id}>
                            <p className={style.title}>{item.title}</p>
                            <div className={style.details}>{item.difficulty} {item.skills}, Max Score: score</div>
                            <button className={style.btn}>Solve Challenge</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};
