import React from 'react'
import style from "./interview.module.css"

export const Interview = () => {
  
  return (
    <>
    <div id='interview'>
      <div className={style.interview}>
        <h3>:: Technical interviews ::</h3>
        <h2>Interview like it's 2024</h2>
        <p>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>
        <img src='https://www.hackerrank.com/wp-content/uploads/2024/01/interview-2.png' alt='interview screenshot' />
      </div>
      <div className={style.container}>
        <div>
          <div style={{margin:"30px auto"}}>
            <p>Every company is a tech company.</p>
            <p style={{color:"green"}}>We’re here to help ‘em all.</p>
          </div>
          <p>More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank to connect with developers and add cutting-edge skills to their teams.</p>
          <p>That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.</p>
        </div>
        <div className={style.slider}>
          <img src="" alt="1" />
          <img src="" alt="2" />
          <img src="" alt="3" />
          <img src="" alt="4" />
        </div>
      </div>
    </div>
    </>
  )
}
