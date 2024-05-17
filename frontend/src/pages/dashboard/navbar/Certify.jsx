import React from 'react'
import {Link} from "react-router-dom"
import { Navbar } from '../../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../../components/dashboard/Footer/Footer'
import style from "./certify.module.css"

export const Certify = () => {
  let roles = [
    {to:"/skills-verification/frontend_developer_react", displayText:"Frontend Developer (React)", popup:"It covers topics like React, CSS, and JavaScript."},
    {to:"/skills-verification/software_engineer", displayText:"Software Engineer", popup:"It covers topics like Problem solving, SQL, and REST API."},
    {to:"/skills-verification/software_engineer_intern", displayText:"Software Engineer Intern", popup:"It covers topics like Problem solving and SQL."},
  ]
  let skills = [
    {to:"/skills-verification/angular_basic)", displayText:"Angular (Basic)", popup:"It covers topics like MVC Frameworks, Components (Angular, Dynamic, Styling), TypeScript, Two Way Binding and Form Validation", link:"/skills-directory/angular_basic"},
    {to:"/skills-verification/angular_intermediate)", displayText:"Angular (Intermediate)", popup:"It covers topics like Routing, NgModules, Observables for data transmission and event handling, Dependency Injections, and APIs.", link:"/skills-directory/angular_intermediate"},
    {to:"/skills-verification/c_sharp_basic)", displayText:"C# (Basic)", popup:"", link:""},
    {to:"/skills-verification/css)", displayText:"CSS (Basic)", popup:"", link:""},
    {to:"/skills-verification/golang_intermediate)", displayText:"Go (Intermediate)", popup:"", link:""},
    {to:"/skills-verification/golang_basic", displayText:"Go (Basic)", popup:"", link:""},
    {to:"/skills-verification/java_basic)", displayText:"Java (Basic)", popup:"", link:""},
    {to:"/skills-verification/JavaScript (Intermediate)", displayText:"JavaScript (Intermediate)", popup:"", link:""},
    {to:"/skills-verification/JavaScript (Basic)", displayText:"JavaScript (Basic)", popup:"", link:""},
    {to:"/skills-verification/Node (Basic)", displayText:"Node (Basic)", popup:"", link:""},
    {to:"/skills-verification/Node.js (Intermediate)", displayText:"Node.js (Intermediate)", popup:"", link:""},
    {to:"/skills-verification/Problem Solving (Basic)", displayText:"Problem Solving (Basic)", popup:"", link:""},
    {to:"/skills-verification/Problem Solving (Intermediate)", displayText:"Problem Solving (Intermediate)", popup:"", link:""},
    {to:"/skills-verification/Python (Basic)", displayText:"Python (Basic)", popup:"", link:""},
    {to:"/skills-verification/R (Intermediate)", displayText:"R (Intermediate)", popup:"", link:""},
    {to:"/skills-verification/R (Basic)", displayText:"R (Basic)", popup:"", link:""},
    {to:"/skills-verification/React (Basic)", displayText:"React (Basic)", popup:"", link:""},
    {to:"/skills-verification/Rest API (Intermediate)", displayText:"Rest API (Intermediate)", popup:"", link:""},
    {to:"/skills-verification/SQL (Basic)", displayText:"SQL (Basic)", popup:"", link:""},
    {to:"/skills-verification/SQL (Intermediate)", displayText:"SQL (Intermediate)", popup:"", link:""},
    {to:"/skills-verification/SQL (Advanced)", displayText:"SQL (Advanced)", popup:"", link:""}
  ]
  return (
    <>
    <Navbar />
    <div className={style.head}>
      <p>Certification Tests</p>
      <h1>Get Certified</h1>
    </div>
    <div className={style.container}>
      <div>
        <h2>Stand out from the crowd</h2>
        <p>Get certified in technical skills by taking the HackerRank Certification Test</p>
      </div>
      <div>
        <h2>Standardised Assessment</h2>
        <p>Assessments are organised around specific skills and are carefully curated based on years of recruiting data from 2000+ companies</p>
      </div>
      <div>
        <h2>Enrich your profile</h2>
        <p>Upon successfully clearing an assessment, you can promote yourself using the HackerRank certificate to peers and employers</p>
      </div>
    </div>
    <h2 id={style.roles}>Get Your Roles Certified</h2>
    <div className={style.roles}>
      {roles.map((item, id)=>(
        <Link to={item.to} key={id} className={style.role}>
          <div>
            <h1>{item.displayText}</h1>
            <img src="https://th.bing.com/th?q=Tooltip+Help+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="tooltip help icon" />
          </div>
          <button>Get Certified</button>
        </Link>
      ))}
    </div>
    <h2 id={style.roles}>Get Your Skills Certified</h2>
    <div className={style.roles}>
      {skills.map((item, id)=>(
        <Link to={item.to} key={id} className={style.role}>
          <div>
            <h1>{item.displayText}</h1>
            <img src="https://th.bing.com/th?q=Tooltip+Help+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="tooltip help icon" />
          </div>
          <button>Get Certified</button>
        </Link>
      ))}
    </div>
    <Footer />
    </>
  )
}
