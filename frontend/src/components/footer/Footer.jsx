import React from 'react'
import {Link} from "react-router-dom"
import style from "./footer.module.css"

export const Footer = () => {
  let productLink = [
    {to:"/products/screen", displaytext:"Screen"},
    {to:"/real-world-questions", displaytext:"Real World Questions"}
  ]
  let solutionLink = [
    {to:"/solutions/skill-strategy", displaytext:"Set Up a Skills Strategy"},
    {to:"/solutions/talent-brand", displaytext:"Showcase Your Talent Brand"},
    {to:"/solutions/internal-talent", displaytext:"Mobilize Your Internal Talent"}
  ]
  let resourcesLink = [
    {to:"/roles-directory", displaytext:"Roles Directory"},
    {to:"/integrations", displaytext:"Integrations"},
    {to:"/what's-news", displaytext:"What's New"}
  ]
  let aboutLink = [
    {to:"/carrier", displaytext:"Careers"},
    {to:"/newsrooms", displaytext:"Newsroom"},
    {to:"/status", displaytext:"Status"},
    {to:"/trust", displaytext:"Trust"}
  ]
  let getStartedLink = [
    {to:"/contact-us", displaytext:"Contact Us"},
    {to:"/developers", displaytext:"For Developers"}
  ]
  return (
    <>
    <div className={style.footer}>
      <div className={style.container}>
         <Link to="">PRODUCTS</Link>
        {productLink.map((link, id)=>(
          <Link key={id} to={link.to} className={style.containerItem}>{link.displaytext}</Link>
        ))}
      </div>
      <div className={style.container}>
        <Link to="">SOLUTIONS</Link>
        {solutionLink.map((link, id)=>(
          <Link key={id} to={link.to} className={style.containerItem}>{link.displaytext}</Link>
        ))}
      </div>
      <div className={style.container}>
        <Link to="">RESUORCES</Link>
        {resourcesLink.map((link, id)=>(
          <Link key={id} to={link.to} className={style.containerItem}>{link.displaytext}</Link>
        ))}
      </div>
      <div className={style.container}>
        <Link to="">ABOUT US</Link>
        {aboutLink.map((link, id)=>(
          <Link key={id} to={link.to} className={style.containerItem}>{link.displaytext}</Link>
        ))}
      </div>
      <div className={style.container}>
        <Link to="">GET STARTED</Link>
        {getStartedLink.map((link, id)=>(
          <Link key={id} to={link.to} className={style.containerItem}>{link.displaytext}</Link>
        ))}
      </div>
    </div>
      <div> 
        <img />
        <Link><img src='' alt='fb' /></Link>
        <Link><img src='' alt='linkedin' /></Link>
        <Link><img src='' alt='twitter' /></Link>
        <Link><img src='' alt='instragram' /></Link>
      </div>
      <p>Copyright © 2024 HackerRank</p>
      <Link to="/privacy">Privacy Policy</Link>
    </>
  )
}
