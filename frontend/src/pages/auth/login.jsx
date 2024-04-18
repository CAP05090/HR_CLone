import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <div>
      <img src='https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg' alt='logo' />
      <h1>For Developers</h1>
      <p>Practice coding, prepare for interviews, and get hired.</p>
    </div>
    <div>
      <div>
        <img src='' alt='email' />
        <input placeholder='Email' />
      </div>
      <div>
        <img src='' alt='password' />
        <input placeholder='Password' />
      </div>
      <div style={{display:"flex"}}>
        <input type='checkBox' />
        <p>Remember me</p>
        <Link to="">Forgot your password?</Link>
      </div>
      <input type='submit' value="Login" />
    </div>
    <div>
      <p>Don't have an account, Register <Link to="/auth/signup">Sign Up</Link> </p>
      
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
    </>
  )
}
