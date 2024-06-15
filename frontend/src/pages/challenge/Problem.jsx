import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Navbar } from '../../components/challenges/navbar/Navbar'
import { CodeEditor } from '../../components/challenges/CodeEditor'

export const Problem = async() => {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState("")
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/challenge");
        const challenges = response.data;
        setLoading(false);
        console.log(challenges);
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
    </>
  )
}
