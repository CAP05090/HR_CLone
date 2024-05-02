import React from 'react'
import { Link } from 'react-router-dom'
import style from "./screen.module.css"

export const Screen = () => {
  return (
    <>
    <div className={style.skill}>
      <p id={style.head}>:: Coding Tests ::</p>
      <p className={style.head} style={{color:"green"}}>Join the movement.</p>
      <p className={style.head}>Screen on skills.</p>
    </div>
    <div className={style.skillScreen}>
      <div>
        <h2>Leave the binary tree behind.</h2>
        <p>Build coding questions using our library of dev-friendly content that challenges them to solve the problems they had actually tackle on the job.</p>
        <Link className={style.link} to="/get-started/hire/">Start free trial </Link>
      </div>
      <img src='https://www.hackerrank.com/wp-content/uploads/2022/11/binarytree-1.png' alt='binary tree' />
    </div>
    <div className={style.skillScreen}>
      <div>
        <h2>Focus on what really matters: the code.</h2>
        <p>Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea.</p>
        <Link className={style.link} to="/request-demo/">Request a demo</Link>
      </div>
      <img src='https://www.hackerrank.com/wp-content/uploads/2022/11/code-1.png' alt='code editor page'/>
    </div>
    <div className={style.skillScreen}>
      <div>
        <h2>Identify top contenders</h2>
        <p>Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere.</p>
        <Link className={style.link} to="/products/developer-skills-plateform/screen/">Learn more</Link>
      </div>
      <img src='https://www.hackerrank.com/wp-content/uploads/2022/09/contenders.png' alt='contenders' />
    </div>
    </>
  )
}
