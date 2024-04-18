import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <>
    <div>
      <img src='https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg' alt='logo' />
      <h1>For Developers</h1>
      <p>Practice coding, prepare for interviews, and get hired.</p>
      <form>
        <div>
          <label>Full Name</label><br/>
          <input placeholder='Enter Full Name'/><br/>
          <label>Email</label><br/>
          <input placeholder='Enter Eamil' /><br/>
          <label>Password</label><br/>
          <input placeholder='Enter Password' /><br/>
          <label>Highest Education</label><br/>
          <input /><br/>
          <label>Stream</label><br/>
          <input placeholder='i.e. ' /><br/>
        </div>
        <div style={{display:"flex"}}>
          <input type='checkbox' />
          <p>I agree to HackerRank's Terms of Service and Privacy Policy.</p>
        </div>
        <input type='submit' value="CreateAnAccount" />
      </form>
    </div>
    <div>
      <p>If already registered plaese <Link to="/auth/login">LogIn</Link></p>
    </div>
    <div style={{display:"column"}}>
      <p>or connect with</p>
      <hr/>
    </div>
    <div style={{width:"50px"}}>
      <Link to="/fb"><img src='https://hrcdn.net/fcore/assets/facebook-colored-af4249157d.svg' alt='' /></Link>
      <Link to="/gmail"><img src='https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg' alt='' /></Link>
      <Link to="/linkedin"><img src='https://hrcdn.net/fcore/assets/linkedin-colored-1db195795c.svg' alt='' /></Link>
      <Link to="/git"><img src='https://hrcdn.net/fcore/assets/github-colored-1db995054b.svg' alt='' /></Link>
    </div>
    </>
  )
}