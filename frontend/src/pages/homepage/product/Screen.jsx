import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import style from "./screen.module.css"
export const Screen = () => {
  return (
    <>
    <Navbar/>
    <div className={style.screen}>
      <h1>Skills-based coding tests to find developers, fast</h1>
      <p>Talent pool? Try talent ocean. We help navigate that sea of applicants so you can connect faster and hire developers with the skills your team needs to innovate.</p>
      <img src='https://www.hackerrank.com/wp-content/uploads/2023/02/screen_intro.png' alt='screen page' />
    </div>
    <div className={style.company}>
      <div className={style.king}>
        <img src='https://www.hackerrank.com/wp-content/uploads/2022/12/DraftKings_logo.png' alt='draft king' />
        <p>“Screening candidates through HackerRank has helped us rapidly and accurately identify the skills of candidates, and therefore find and hire the technical talent our team needs to innovate.”</p>
        <h2>JON DUGGINS</h2>
        <p>Director of TA at DraftKings</p>
      </div>
      <div className={style.tags}>
        <p>Build your skills. Build your team. Build your future.</p>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/02/logos2.png" alt="logos" />
      </div>
    </div>
    <div className={style.detection}>
      <h1>Fairness built into every click.</h1>
      <p>From plagiarism detection and proctoring to minimizing bias, our assessments give developers everywhere an equal shot at today’s top tech opportunities.</p>
      <div className={style.container}>
        <div>
          <img src="https://www.hackerrank.com/wp-content/uploads/2023/02/eye.svg" alt="plagiarism detection" />
          <h2>World-class plagiarism monitoring</h2>
          <p>Advanced machine learning monitors for plagiarism, test-taker integrity and question leaks, giving all developers a fairer shot at the next round</p>
        </div>
        <div>
          <img src="https://www.hackerrank.com/wp-content/uploads/2023/02/pull.svg" alt="skills standard" />
          <h2>A standard skills approach</h2>
          <p> Structure assessment content and a scalable system make sure you test application consistently, whether you're hiring one dev or 1000.</p>
        </div>
        <div>
          <img src="https://www.hackerrank.com/wp-content/uploads/2023/02/terminal.svg" alt="results" />
          <h2>Fair, valid, and reliable results</h2>
          <p>From adverse-imoact studies to sensitivity reviews, our content undergoes expert-lead analysis to help you the skills the matter most.</p>
        </div>
      </div>
    </div>
    <p id={style.innovation}>Innovation happens everywhere. It's time to broaden your search.</p>
    <div className={style.feature}>
        <img src='https://www.hackerrank.com/wp-content/uploads/2023/02/screen_feature1.png' alt='coding challenge' />
      <div>
        <h2>Easy to use. Even easier to implement.</h2>
        <p>Save your team time with standardized assessments. Use our templates or customize your own, and enjoy end-to-end coverage from question selection to scoring.</p>
      </div>
    </div>
    <div className={style.feature}>
      <img src='https://www.hackerrank.com/wp-content/uploads/2023/02/screen_feature2.png' alt='coding Editor' />
      <div>
        <h2>Find the skills to ship better products, faster.</h2>
        <p>From data science to front end to cybersecurity, our library covers tech’s most in-demand roles and skills, across all levels—and can help you assess those skills with confidence.</p>
      </div>
    </div>
    <div className={style.feature}>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/02/screen_feature3-1.png" alt="score" />
      <div>
        <h2>University hiring and early talent screening built to scale.</h2>
        <p>When hiring turns high volume, our approach helps applicants show off their skills. Think developer-approved prep materials, coding challenges, and screening that scales with you.</p>
      </div>
    </div>
    <Footer />
    </>
  )
}
