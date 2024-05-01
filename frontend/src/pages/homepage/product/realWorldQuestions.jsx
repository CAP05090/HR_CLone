import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import { Environment } from '../../../components/home/RealworldProblem/Environment'
import style from "./realWorldquestion.module.css"

export const RealWorldQuestions = () => {
  return (
    <>
    <Navbar />
    <div className={style.realworld}>
      <div>
        <h1 className={style.tags}>Work isn't multiple choice.</h1>
        <h1 className={style.tags}>Your hiring shouldn't be, either.</h1>
        <p id={style.tags}>Ditch the gimmicky brain teasers. Put developer skills to the test with real-world challenges in sandboxed environments identical to what devs use day-to-day.</p>
      </div>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/11/comp-1.png" alt="content-upload" />
    </div>
    <Environment />
    <div className={style.developers}>
      <div>
        <h2 id={style.develop}>Assess developers in your environment</h2>
        <p>Our real-world testing environment is remarkably flexible and built to accommodate a wide range of technology stacks.</p>
        <ul className={style.develop}>
          <li>Set up the IDE to your specifications and model real-world environments</li>
          <li>Use automated scoring to objectively evaluate candidate performance quickly and accurately</li>
        </ul>
      </div>
      <img src='https://www.hackerrank.com/wp-content/uploads/2023/10/roles_directory.svg' alt='dev environment' />
    </div>
    <div className={style.skills}>
      <h1 id={style.skilltag}>We know developer skills like nobody’s business</h1>
      <p className={style.skill}>We're obsessed with developers and have 10+ years of proprietary skills data that gives us a deep understanding of developer skills and</p>
      <p className={style.skill}>how they shift as the industry evolves. And while others rely on college curriculums, books, and search engines to map skills, we turn to our Skills Advisory Council, a panel of industry experts, to identify, certify, and standardize our skills.</p>
    </div>
    <Footer />
    </>
  )
}
