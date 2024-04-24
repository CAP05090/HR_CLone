import React from 'react'
import style from "./interview.module.css"

export const Interview = () => {
  
  return (
    <>
    <div id='interview'>
      <div >
        <p>Technical interviews</p>
        <p><b>Interview like it's 2024</b></p>
        <p>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>
        <img src='' alt='interview screenshot' />
      </div>
      <div className=''>
        <div>
          <p>Every company is a tech company.</p>
          <p>We’re here to help ‘em all.</p>
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
