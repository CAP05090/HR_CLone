import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import { Link } from 'react-router-dom'
import style from "./rolesdirectory.module.css"

export const RolesDirectory = () => {
  return (
    <>
    <Navbar />
    <div className={style.role}>
      <div>
        <h1>Explore verified tech roles & skills</h1>
        <p>The definitive directory of tech roles, backed by machine learning and skills intelligence. Start hiring at the pace of innovation.</p>
        <Link to="#roles" className={style.link}>View all roles</Link>
      </div>
      <div id={style.lnk}>
        <Link className={style.lnk} to="#roles"><h3>9</h3><p>Job Families</p></Link>
        <Link className={style.lnk} to="#roles"><h3>77</h3><p>Roles</p></Link>
        <Link className={style.lnk} to="/skills-directory"><h3>258</h3><p>Skills</p></Link>
      </div>
    </div>
    <img src="" alt="" />
    <div className={style.hire}>
      <h1>9 job families. 77 roles. One way to hire.</h1>
      <p>Dive into the HackerRank skills taxonomy to uncover the key skills for each role. Explore the job families, tech roles and real-world skills driving the future’s innovation.</p>
    </div>
    <div className={style.skill}>
      <div>
        <h2>Job Family</h2>
        <p>A collection of jobs with similar functions and required skills.</p>
        <h2>Role</h2>
        <p>A profession with specific objectives, responsibilities, and skill requirements.</p>
        <h2>Skill</h2>
        <p>The ability and knowledge to perform a task or activity.</p>
      </div>
      <img src="" alt="skills" />
    </div>
    <h1 id={style.work}>How does it work?</h1>
    <div className={style.work}>
      <div>
        <img src="https://www.hackerrank.com/wp-content/themes/hackerrank/assets/images/roles_directory/rd_1.svg" alt="rd1" />
        <h2>Real-world skills data</h2>
        <p>Our roles directory is built on skills data sourced from over 25k job descriptions.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/themes/hackerrank/assets/images/roles_directory/rd_2.svg" alt="rd2" />
        <h2>Backed by machine learning</h2>
        <p>We leveraged a cutting-edge, machine-learning methodology to identify the skills required for each tech role.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/themes/hackerrank/assets/images/roles_directory/rd_3.svg" alt="rd3" />
        <h2>For any tech hiring needs</h2>
        <p>Whether you’re hiring 100 engineers or your first developer, ground your hiring in a skills-based approach.</p>
      </div>
    </div>
    <h1 id={style.roles}>ALL Roles</h1>
    <div className={style.roles}>
      <div>
        <h2>AI & ML</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Cloud</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Cybersecurity</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Data Engineering</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Data Science & Analytics</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Mobile</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Quality Assurance</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Software Engineering</h2>
        <hr className={style.hr} />
      </div>
      <div>
        <h2>Web Development</h2>
        <hr className={style.hr} />
      </div>
    </div>
    <Footer />
    </>
  )
}
