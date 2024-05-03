import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import { Link } from 'react-router-dom'
import style from "./integration.module.css"

export const Integration = () => {
  let ATS = [
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."}
  ]
  let TI = [
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."}
  ]
  let SP = [
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
    {to:"https://www.avature.net", img:"https://www.hackerrank.com/wp-content/uploads/2018/07/avature.jpg", title:"Avature", description:"Send HackerRank test invites, and review test scores and reports within Avature."},
  ]
  return (
    <>
    <Navbar />
    <div className={style.head}>
      <h1>HackerRank Integrations</h1>
      <p>Featuring 40+ integrations, HackerRank seamlessly connects with your favorite tools.</p>
    </div>
    <h1 id={style.intg}>Types of Integrations</h1>
    <div className={style.integration}>
      <div>
        <h2 style={{color:"rgb(22, 171, 171)"}}>Applicant Tracking Systems</h2>
        <p>Embed HackerRank into your recruiting process by accessing HackerRank Tests and Interviews from your ATS.</p>
      </div>
      <div>
        <h2 style={{color:"rgb(36, 104, 199)"}}>Talent Intelligence</h2>
        <p>Manage talent from one convenient location by assessing and interviewing candidates within your talent automation or intelligence platform.</p>
      </div>
      <div>
        <h2 style={{color:"rgb(10, 153, 108)"}}>Scheduling & Productivity</h2>
        <p>Automate your processes by connecting HackerRank to your favorite productivity tools – including scheduling tools!</p>
      </div>
    </div>
    <div className={style.links}>
      <h1>Types of Integrations</h1>
      <ul>
        <li><Link to="#ats">Applicant Tracking Systems</Link></li>
        <li> <Link to="#ti">Talent Intelligence</Link>  </li>
        <li><Link to="#sp">Scheduling & Productivity</Link></li>
      </ul>
    </div>
    <div id='ats' className={style.container}>
      <h1>Applicant Tracking Systems</h1>
      <div className={style.cards}>
        {ATS.map((item, id)=>
          <div className={style.card} >
            <Link className={style.lnk} key={id} to={item.to}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
    <div id='ti' className={style.container}>
      <h1>Talent Intelligence </h1>
      <div className={style.cards}>
      {TI.map((item, id)=>(
          <div className={style.card}>
            <Link className={style.lnk} key={id} to={item.to}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <div id='sp' className={style.container}>
      <h1> Scheduling & Productivity</h1>
      <div className={style.cards}>
      {SP.map((item, id)=>(
          <div className={style.card} >
            <Link className={style.lnk} key={id} to={item.to}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}
