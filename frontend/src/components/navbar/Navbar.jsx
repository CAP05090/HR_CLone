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
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/auth/login">Login</Link>
    </div>
    <div className={style.nav}>
      <div className={style.navbar}>
        <div>
          <Link to="">PRODUCTS</Link>
          {productLink.map((link, id)=>(
            <Link key={id} to={link.to} className={style.container}>{link.displaytext}</Link>
          ))}
        </div>
        <div>
          <Link to="">SOLUTIONS</Link>
          {solutionLink.map((link, id)=>(
            <Link key={id} to={link.to} className={style.container}>{link.displaytext}</Link>
          ))}
        </div>
        <div>
          <Link to="">RESUORCES</Link>
          {resourcesLink.map((link, id)=>(
            <Link key={id} to={link.to} className={style.container}>{link.displaytext}</Link>
          ))}
        </div>
      </div>
      <div style={{display:"flex"}}>
        <Link to="/dashboard">For Developer</Link>
        <Link to="/auth/signup">Sign up</Link>
      </div>
    </div>
    </>
  )
}
