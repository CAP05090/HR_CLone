import React from 'react'
import {Link}  from "react-router-dom"
import style from "./navbar.module.css"

export const Navbar = () => {
  return (
    <>
    <div className={style.logo}><Link to="/dashboard" className={style.logolnk} ><img src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg" alt="logo" /></Link></div>
    <div className={style.skill_path}>
        <Link className={style.skillnk} to="/skills-directory/" >Skills Directory</Link>
        <img src="https://cdn-icons-png.flaticon.com/128/81/81068.png" alt="forward arrow" />
        <p>AWS</p>
    </div>
    </>
  )
}
