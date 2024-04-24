import React from 'react'
import { Link } from 'react-router-dom'
import { Community } from './community'
import { Screen } from './screen'
import { Interview } from './interview'
import style from "./intro.module.css"

export const Intro = () => {
  
  return (
    <div className={style.intro}>
      <h1 className={style.tag}>Skills speak louder than words</h1>
      <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
      <div className={style.auth}>
        <Link to="/auth/signup" className={style.signup}>Sign up</Link>
      </div>
      <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
      <div>
        <p><b>It's not a pipeline problem.</b></p>
        <p><b>It's a spotlight problem.</b></p>
        <p>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.</p>
        <ul className={style.links}>
          <li><a href='#community' className={style.link}>Prep</a></li>
          <li><a href='#screen' className={style.link}>Screen</a></li>
          <li><a href='#interview' className={style.link}>Interview</a></li>
        </ul>
        <Community />
        <Screen />
        <Interview />
      </div>
    </div>
  )
}
