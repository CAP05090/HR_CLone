import React from 'react'
import { Navbar } from '../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../components/dashboard/Footer/Footer'
import { Link } from 'react-router-dom'
import style from "./dashboard.module.css"

export const Dashboard = () => {
  let topics = [
    {logo:"https://img.icons8.com/?size=96&id=12817&format=png", to:"/domains/algorithms", displayText:"Algorithms"},
    {logo:"https://img.icons8.com/?size=160&id=GUgQECp3ctUG&format=png", to:"/domains/data-structures", displayText:"Data Structures"},
    {logo:"https://img.icons8.com/?size=160&id=uOTqEShzF1U5&format=png", to:"/domains/mathematics", displayText:"Mathematics"},
    {logo:"https://img.icons8.com/?size=100&id=62903&format=png", to:"/domains/ai", displayText:"Artificial Intelligence"},
    {logo:"https://img.icons8.com/?size=96&id=shQTXiDQiQVR&format=png", to:"/domains/c", displayText:"C"},
    {logo:"https://img.icons8.com/?size=96&id=TpULddJc4gTh&format=png", to:"/domains/cpp", displayText:"C++"},
    {logo:"https://img.icons8.com/?size=96&id=13679&format=png", to:"/domains/java", displayText:"Java"},
    {logo:"https://img.icons8.com/?size=160&id=pIJdjOoL6KfU&format=png", to:"/domains/python", displayText:"Python"},
    {logo:"https://img.icons8.com/?size=128&id=55500&format=png", to:"/domains/ruby", displayText:"Ruby"},
    {logo:"https://img.icons8.com/?size=96&id=13406&format=png", to:"/domains/sql", displayText:"SQL"},
    {logo:"https://img.icons8.com/?size=96&id=KZHjwwenS7oK&format=png", to:"/domains/database", displayText:"Database"},
    {logo:"https://image.shutterstock.com/image-vector/unix-code-icon-260nw-762484363.jpg", to:"/domains/linux-shell", displayText:"Linux Shell"},
    {logo:"https://cdn-icons-png.flaticon.com/128/2758/2758656.png", to:"/domains/finctional-programming", displayText:"Functional Programming"},
    {logo:"https://th.bing.com/th/id/OIG4.oplqPCOJuEs.FFzQCDkQ?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn", to:"/domains/regex", displayText:"Regex"},
  ]
  return (
    <>
    <Navbar />
    <div style={{width:"95%", margin:"auto"}}>
      <h1>Learn programming skills</h1>
      <h1>Your Preparation</h1>
      <div>
        <Link to="#skills">
          <p>NEW SKILL</p>
          <h2>Add your first skill</h2>
          <p>Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.</p>
          <button>Explore Skills</button>
        </Link>
      </div>
      <div>
        <h2>Prepare By Topics</h2>
        <div className={style.topics}>{
          topics.map((link, id)=>(
            <Link className={style.topic} key={id} to={link.to}>
              <img className={style.tlogo} src={link.logo} alt={link.displayText} />
              {link.displayText}</Link>
          ))
        }</div>
      </div>
    </div>
    <Footer />
    </>
  )
}
