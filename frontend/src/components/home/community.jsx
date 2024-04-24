import React from 'react'
import {Link} from "react-router-dom"
import style from "./community.module.css"

export const Community = () => {
  return (
    <div id='community' className={style.community}>
      <div>
        <h3 className={style.heading}>Coding practice</h3>
      </div>
        <h1 className={style.tag}>Explore and expand your skills.</h1>
        <p>Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you've dreamed of.</p>
        <Link to="/auth/signup" className={style.auth}>Sign up and practice</Link>
        <img src='' alt='' />
    </div>
  )
}
