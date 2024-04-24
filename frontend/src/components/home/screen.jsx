import React from 'react'
import { Link } from 'react-router-dom'
import style from "./screen.module.css"

export const Screen = () => {
  return (
    <>
    <div id='screen'>
      <div className={style.skillScreen}>
        <div>
          <p style={{textAlign:"left", fontWeight:"650"}}>Coding Tests</p>
          <p style={{fontSize:"32px", textAlign:"left", color:"green"}}>Join the movement.</p>
          <p style={{fontSize:"32px", textAlign:"left"}}>Screen on skills.</p>
        </div>
        <div><img src='' alt='Skills screen' /></div>
      </div>
      <div className={style.skillScreen}>
        <div>
          <h2 className={style.heading}>Leave the binary tree behind.</h2>
          <p className={style.text}>Build coding questions using our library of dev-friendly content that challenges them to solve the problems they had actually tackle on the job.</p>
        </div>
        <div><img src='' alt='challange page' /></div>
      </div>
      <div className={style.skillScreen}>
        <div>
          <h2 className={style.heading}>Focus on what really matters: the code.</h2>
          <p className={style.text}>Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea.</p>
        </div>
        <div><img src='' alt='code editor page'/></div>
      </div>
      <div className={style.skillScreen}>
        <div>
        <h2 className={style.heading}>Identify top contenders</h2>
        <p className={style.text}>Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere.</p>
        </div>
        <div><img src='' alt='summary report' /></div>
      </div>
    </div>
    </>
  )
}
