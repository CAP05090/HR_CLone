import React from 'react'
import {Link} from "react-router-dom"
import style from "./navbar.module.css"

export const Navbar = () => {
  let productLink = [
    {to:"/screen", displaytext:"Screen"},
    {to:"/features/real-world-questions", displaytext:"Real World Questions"}
  ]
  let solutionLink = [
    {to:"/skill-strategy", displaytext:"Set Up a Skills Strategy"},
    {to:"/talent-brand", displaytext:"Showcase Your Talent Brand"},
    {to:"/embrace-ai", displaytext:"Embrace AI"}
  ]
  let resourcesLink = [
    {to:"/roles-directory", displaytext:"Roles Directory"},
    {to:"/integrations", displaytext:"Integrations"},
    {to:"/what's-news", displaytext:"What's New"}
  ]
  return (
    <>
    <div className={style.header}>
      <Link className={style.link} to="/contact-us">Contact Us</Link>
      <Link className={style.link} to="/auth/login">Login</Link>
    </div>
    <div className={style.navbar}>
      <div>
        <Link to="/"><img className={style.logo} src='https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png' alt='logo' /></Link>
      </div>
      <div>
        <div className={style.dropdown}>
          <p className={style.dropbtn}>PRODUCTS</p>
          <div className={style.dropdown_content}>
            {productLink.map((link, id)=>(
              <Link key={id} to={link.to} className={style.lnk}>{link.displaytext}</Link>
            ))}
          </div>
        </div>
        <div className={style.dropdown}>
          <p className={style.dropbtn}>SOLUTIONS</p>
          <div className={style.dropdown_content}>
            {solutionLink.map((link, id)=>(
              <Link key={id} to={link.to} className={style.lnk}>{link.displaytext}</Link>
            ))}
          </div>
        </div>
        <div className={style.dropdown}>
          <p className={style.dropbtn}>RESUORCES</p>
          <div className={style.dropdown_content}>
            {resourcesLink.map((link, id)=>(
              <Link key={id} to={link.to} className={style.lnk}>{link.displaytext}</Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link to="/dashboard" className={style.userlink}>For Developer</Link>
        <Link to="/auth/signup" className={style.userlink}>Sign up</Link>
      </div>
    </div>
    </>
  )
}
