import React from 'react'
import {Link} from "react-router-dom"
import style from "./community.module.css"

export const Community = () => {
  return (
    <div className={style.community}>
      <div id='community' className={style.container}>
        <h3 className={style.heading}>◯- :: Practice Challenge</h3>
        <h1 className={style.tag}>Explore and expand your skills.</h1>
        <p className={style.tag}>Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you've dreamed of.</p>
        <Link to="/auth/signup" className={style.auth}>Sign up and practice → </Link>
      </div>
      <img src='https://www.hackerrank.com/wp-content/uploads/2022/09/community.jpg' alt='coding page' />
    </div>
  )
}
