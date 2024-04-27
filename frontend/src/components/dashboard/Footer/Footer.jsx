import React from 'react'
import {Link} from "react-router-dom"
import style from "./footer.module.css"

export const Footer = () => {
  let links = [
    {to:"/blog", displayText:"Blog"},
    {to:"/scoring", displayText:"Scoring"},
    {to:"/environment", displayText:"Environment"},
    {to:"/faq", displayText:"FAQ"},
    {to:"/about-us", displayText:"About Us"},
    {to:"/support", displayText:"Support"},
    {to:"/careers", displayText:"Careers"},
    {to:"/terms-of-service", displayText:"Terms of Service"},
    {to:"/privacy", displayText:"Privacy Policy"}
  ]
  return (
    <div className={style.footer}>
      {links.map((link, id)=>(
        <Link key={id} to={link.to} className={style.links}>|{link.displayText}| </Link>
      ))}
    </div>
  )
}
