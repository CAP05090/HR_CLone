
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Navbar } from '../../components/dashboard/Navbar/Navbar';
import { Footer } from '../../components/dashboard/Footer/Footer';
import style from "./domains.module.css";

export const Mathematics = () => {
  let filters = [
    { key: "STATUS", options: ["Solved", "Unsolved"] },
    { key: "SKILLS", options: ["C (Basic)", "C (Intermediate)"] },
    { key: "DIFFICULTY", options: ["Easy", "Medium", "Hard"] },
    { key: "SUBDOMAINS", options: ["Introduction", "Conditionals and Loops", "Arrays and Strings", "Functions", "Structs and Enums"] }
  ];
  
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
    <div className={style.challenge}>
      <div className={style.domain}>
        <h2 id={style.topic}>Mathematics</h2>
        <div className={style.questions}>
          {data && data.map((item, id) => (
            <div className={style.question} key={id}>
              <p className={style.title}>{item.title}</p>
              <div className={style.details}>{item.difficulty} {item.skills}, Max Score: score</div>
              <button className={style.btn}>Solve Challenge</button>
            </div>
          ))}
        </div>
      </div>
      <div className={style.challenge_list_filter}>
          {filters.map((item, id) => (
              <div key={id} className={style.filter_group}>
                  <div className={style.filter_label}>{item.key}</div>
                  <div className={style.filters}>
                      {item.options.map((filter, filterId) => (
                          <div key={filterId}> <input type="checkbox" /> {filter}</div>
                      ))}
                  </div>
              </div>
          ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
