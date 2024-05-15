import React from 'react'
import axios from "axios"
import { Navbar } from '../../components/challenges/navbar/Navbar'

export const Problem = async() => {
    const question = await axios.get("http://localhost:8080/challenge")
    
    console.log(question.data)
  return (
    <>
    <h1>Challange Page</h1>
    <Navbar />
    </>
  )
}
