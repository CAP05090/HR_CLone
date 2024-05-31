import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import style from "./signup.module.css"

export const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [education, setEducation] = useState("")
  const [stream, setStream] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!email || !password || !name){
      setError("please fill in all required field")
    }
    try {
      const userData = {name, email, password, education, stream}
      let res = await axios.post("hrclonebackend-production.up.railway.app/users/register", userData)
      console.log(res.data)
      alert(res.data.msg)
      localStorage.setItem({"AccessToken": res.data.AccessToken})
      localStorage.setItem({"RefreshToken": res.data.RefreshToken})
      navigate("/dashboard")
    } catch (error) {
      console.log(error.message)
    }
  } 

  return (
    <>
    <div className={style.signup}>
      <img src='https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg' alt='logo' />
      <h1 className={style.tag}>For Developers</h1>
      <p>Practice coding, prepare for interviews, and get hired.</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Full Name</label><br/>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Full Name'/><br/>
        <label>Email</label><br/>
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Eamil' /><br/>
        <label>Password</label><br/>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' /><br/>
        <label>Highest Education</label><br/>
        <input type='text' value={education} onChange={(e)=> setEducation(e.target.value)} placeholder='Your higher education' /><br/>
        <label>Stream</label><br/>
        <input type='text' value={stream} onChange={(e)=> setStream(e.target.value)} placeholder='i.e. EE, CSE, EC etc. ' /><br/>
        <p> <input type='checkbox' /> I agree to HackerRank's Terms of Service and Privacy Policy.</p>
        <button type='submit'>Create an account</button>
      </form>
      <p id={style.login}>If already registered plaese <Link style={{color:"green"}} to="/auth/login">LogIn</Link></p>
    </div>
    <p id={style.ssss}>or connect with</p>
    <div className={style.socials}>
      <Link className={style.social} to="/fb"><img src='https://hrcdn.net/fcore/assets/facebook-colored-af4249157d.svg' alt='' /></Link>
      <Link className={style.social} to="/gmail"><img src='https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg' alt='' /></Link>
      <Link className={style.social} to="/linkedin"><img src='https://hrcdn.net/fcore/assets/linkedin-colored-1db195795c.svg' alt='' /></Link>
      <Link className={style.social} to="/git"><img src='https://hrcdn.net/fcore/assets/github-colored-1db995054b.svg' alt='' /></Link>
    </div>
    </>
  )
}