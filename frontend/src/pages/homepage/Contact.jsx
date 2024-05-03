import React from 'react'
import { Navbar } from '../../components/home/navbar/Navbar'
import { Footer } from '../../components/home/footer/Footer'
import style from "./contact.module.css"
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <>
    <Navbar />
    <div className={style.contact}>
      <div className={style.head}>
        <div id={style.head}>
          <h1>Let's get in touch.</h1>
          <p>Talk to a member of our sales team to schedule a demo, pick the best plan for your team, or learn more about everything HackerRank has to offer.</p>
        </div>
        <h2>Sales Inquiries</h2>
        <p>Mobile no.</p>
        <h2>Support</h2>
        <p>Please visit our <Link to="/hc/en-us" style={{color:"green"}}>support page</Link> for more information</p>
        <div className={style.organisation}>
          <p>Trusted by more than 3,000 tech organizations</p>
          <div></div>
        </div>
      </div>
      <div className={style.Form}>
        <h1>Contact us</h1>
        <p>Please fill out the form below, and we'll contact you shortly.</p>
        <form action="">
          <label htmlFor="">Work Email</label><br/>
          <input type="text" name="email" id="" placeholder='Enter Work Email' /><br/>
          <label htmlFor="">How can we help you?</label><br/>
          <select name="" id="" className={style.options}><br/>
            <option value="">Select</option>
            <option value="">Chat with sales</option>
            <option value="">submit a media inquiry</option>
            <option value="">Get Support with my subscription</option>
          </select><br/>
          <button>Contact Us</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}
