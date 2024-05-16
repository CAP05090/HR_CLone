
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Navbar } from '../../components/dashboard/Navbar/Navbar';
import { Footer } from '../../components/dashboard/Footer/Footer';
import style from "./domains.module.css";
import { JavaFilter } from './filter/Javafilter';

export const Java = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

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

return (
    <>
    <Navbar />
    <h2 id={style.domain}>Java</h2>
    <div className={style.data}>
      {loading && <p>Loading...</p>}
      {data && <JavaFilter data={data} />}
    </div>
    <Footer />
    </>
  );
}
