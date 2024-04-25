import React, { useContext, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import style from "./login.module.css"
import { AuthContext } from '../../Context/authContext'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const {setLogin} = useContext(AuthContext)
  const userData = {email, password}

  const handleLogin = async(e)=>{
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8080/users/login", userData)
      if (res.data.token){
        setLogin(true)
        setToken(token)
      }
      console.log(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className={style.login}>
      <div>
        <img className={style.logo} src='https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg' alt='logo' />
        <h1 className={style.tag}>For Developers</h1>
        <p>Practice coding, prepare for interviews, and get hired.</p>
      </div>
      <div>
        <div className={style.inp}>
          <img className={style.icon} src='https://th.bing.com/th?id=OIP.AmxxNcB-gpi9YR96B0kBKwHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' alt='email' />
          <input type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className={style.inp}>
          <img className={style.icon} src='https://th.bing.com/th/id/OIP.Vi7W4hshCgpJepm-5Dz1aQHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='password' />
          <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
        </div>
        <div className={style.forget}>
          <div style={{display:"flex"}}><input type='checkBox' /><p>Remember me</p></div>
          <Link to="/auth/forget_password" style={{color:"red"}}>Forgot your password?</Link>
        </div>
        <button className={style.btn} onClick={handleLogin}>Login</button>
        {
          token && <h1>Token: {token}</h1>
        }
      </div>
      <div>
        <p>Don't have an account, Register <Link to="/auth/signup"><b>Sign Up</b></Link></p>
      </div>
      <div style={{display:"column"}}>
        <p>or connect with</p>
        <hr/>
      </div>
      <div style={{width:"50px", display:"block"}}>
        <Link to="/fb"><img src='https://hrcdn.net/fcore/assets/facebook-colored-af4249157d.svg' alt='' /></Link>
        <Link to="/gmail"><img src='https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg' alt='' /></Link>
        <Link to="/linkedin"><img src='https://hrcdn.net/fcore/assets/linkedin-colored-1db195795c.svg' alt='' /></Link>
        <Link to="/git"><img src='https://hrcdn.net/fcore/assets/github-colored-1db995054b.svg' alt='' /></Link>
      </div>
    </div>
  )
}
