import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../../components/dashboard/Footer/Footer'
import style from "./support.module.css"

export const Support = () => {
  return (
    <>
    <Navbar />
    <div className={style.support}>
      <div>
        <h1>Need Help?</h1>
        <p>Our crew of superheroes are standing by for service & support!</p>
        <p>In order to submit a ticket. Please either,</p>
        <div className={style.auth}>
          <Link className={style.link} to="/auth/login" style={{backgroundColor:"green", color:"white"}}>Login</Link>
          <p>or</p>
          <Link className={style.link} to="/auth/signup">Signup</Link>
        </div>
      </div>
      <img src="https://hrcdn.net/fcore/assets/svgs/support-page-bc479356b1.svg" alt="support page" />
    </div>
    <Footer />
    </>
  )
}
