import React from 'react'
import { Link } from 'react-router-dom'
import { Community } from './community'
import { Screen } from './screen'
import { Interview } from './interview'
import style from "./intro.module.css"

export const Intro = () => {
  
  return (
    <>
    <div className={style.intro}>
      <h1 >Skills speak louder than words</h1>
      <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
      <Link to="/auth/signup" className={style.signup}>Sign up</Link>
      <p id={style.tag}>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
      <div className={style.clogo}>
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/peloton_black.png" alt="peloton" />
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/atlassian_black.png" alt="atassian" />
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/bloomberg_black.png" alt="bloomberg" />
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/vmware_black.png" alt="vmware" />
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/stripe_black.png" alt="stripe" />
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/goldmansachs_black.png" alt="goldman Sachs" />
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/adobe_black.png" alt="adobe" />
        <img src="https://www.hackerrank.com/wp-content/uploads/2022/10/linkedin_black.png" alt="linkedin" />
      </div>
    </div>
    <div className={style.container}>
        <h2>It's not a pipeline problem.</h2>
        <h2 style={{color:"Green"}}>It's a spotlight problem.</h2>
        <p>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.</p>
        <ul className={style.links}>
          <li><a href='#community' className={style.link}>Prep</a></li>
          <li><a href='#screen' className={style.link}>Screen</a></li>
          <li><a href='#interview' className={style.link}>Interview</a></li>
        </ul>
      </div>
      <Community />
      <Screen />
      <Interview />
    </>
  )
}
