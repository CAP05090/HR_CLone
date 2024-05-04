import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import style from "./carrier.module.css"

export const Careers = () => {
  return (
    <>
    <Navbar />
    <div className={style.carrier}>
      <div>
        <h1>HackerRank Careers</h1>
        <p>OUR MISSION</p>
        <h2>Accelerate the World's Innovation</h2>
        <p>At HackerRank, people are the core of our mission.</p>
        <p>We're obsessed about the happiness and success of our customers, clients and – above all – our team. Everyday, we strive to empower and support our teammates to help them realize their full potential.</p>
      </div>
      <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/map.png" alt="map" />
    </div>
    <div className={style.remotecomp}>
      <h1>We’re a Remote-First Company</h1>
      <p>We want you to feel fully supported while working remotely, so we offer a range of wellness benefits to prioritize your mental health. In addition, we host in-person gatherings once a quarter.</p>
      <div>
        <div className={style.card}>
          <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/careers-icon1.png" alt="icon1" />
          <h3>The Best Tech for the Best Employees</h3>
          <p>Every HackerRanker gets a MacBook Pro, mouse, and keyboard.</p>
        </div>
        <div className={style.card}>
          <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/careers-icon2.png" alt="icon2" />
          <h3>Annual Funding for Personal and Professional Development</h3>
          <p>We invest in your professional development and provide annual funding for L&D courses.</p>
        </div>
        <div className={style.card}>
          <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/careers-icon3.png" alt="icon3" />
          <h3>Mental Health and Well-Being Benefits</h3>
          <p>Your well-being is our top priority. We offer access to numerous resources including Headspace.</p>
        </div>
        <div className={style.card}>
          <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/careers-icon4.png" alt="icon4" />
          <h3>Employee Referral Award Program</h3>
          <p>Bring your besties to HackerRank – and get paid when they join the team.</p>
        </div>
      </div>
      <div>
        <div className={style.card}>
          <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/careers-icon5.png" alt="icon5" />
          <h3>Competitive Medical Health Benefits for You and Your Family</h3>
          <p>We offer comprehensive health plans and cover 100% of premiums for some plans.</p>
        </div>
        <div className={style.card}>
          <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/careers-icon6.png" alt="icon6" />
          <h3>Employee Stock Options</h3>
          <p>You have the chance to share ownership of the company with employee stock options.</p>
        </div>
        <div className={style.card}>
          <img src="https://www.hackerrank.com/wp-content/uploads/2022/04/careers-icon7.png" alt="icon7" />
          <h3>Retirement Programs by Region</h3>
          <p>Retirement Programs by Region</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
