import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import style from "./internalTalent.module.css"

export const InternalTalent = () => {
  return (
    <>
    <Navbar />
    <div className={style.head}>
      <h1>Mobilize your internal talent</h1>
      <p>You’ve got amazing talent in-house, but do you know how amazing? HackerRank helps you accurately map your org’s skills, and even finds skills you didn’t know you had. Get the data and tools to help your devs grow their skills and advance their careers.</p>
      <button>watch video</button>
    </div>
    <div className={style.tag}>
      <h1 id={style.tag}>Turn your lens inside</h1>
      <div>
        <p>Know thyself, as the saying goes. Gaining an accurate inventory of skills in your organization is key to mapping your path forward, nurturing your developers’ skills, and supporting their careers. As the developer skills authority, we leverage technical assessments to capture the highest quality skills data. Every day companies are using HackerRank to map their skills, identify gaps, track progress, and make internal mobility decisions.</p>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/12/Mobilize-Your-Internal-Talent-HackerRank-1.png" alt="internal talent" />
      </div>
    </div>
    <div className={style.container}>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-Settings.svg" alt="insights" />
        <h2>Get detailed insights</h2>
        <p>Tap HackerRank to get an accurate, validated assessment of your dev team’s skills.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-FlowChart.svg" alt="organisation" />
        <h2>Map your organization’s skills</h2>
        <p>Org-wide down to individual devs, our skills inventory provides visualized insights into skills strengths and gaps.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-TrendUp.svg" alt="inform decision" />
        <h2>Make informed decisions</h2>
        <p>Ensure you have the right people with the right skills in the right place and identify growth areas.</p>
      </div>
    </div>
    <div className={style.feature}>
      <div>
        <h1>Confirm your developers’ skills</h1>
        <p>HackerRank is the developer skills authority, and we provide everything you need to assess and identify skills within your organization.</p>
        <ul>
          <li>Leverage experiential assessments to accurately map your team’s skills</li>
          <li>Transition from inferring skills from degrees and certifications to verifying skills in real-world environments</li>
          <li>Use assessments to validate the effectiveness of upskilling programs and confirm when a developer is ready for their next step</li>
        </ul>
      </div>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/roles_directory.svg" alt="jobs" />
    </div>
    <div className={style.review}>
      <p>One customer identified <span style={{color:"Green"}}>100,000+ new skills</span> across their organization by using HackerRank with their internal talent. What awesome skills are you missing out on?</p>
    </div>
    <div className={style.feature}>
      <div>
        <h1>Identify skills gaps</h1>
        <p>Tech teams need to constantly up their skills game to keep pace with technology, and getting where you need to go requires first understanding where you’re at.</p>
        <ul>
          <li>Identify and develop the technical skills your organization needs</li>
          <li>Understand strengths and gaps at the individual, team, and org-wide level</li>
          <li>Look for needed skills internally instead of hiring, saving time and money</li>
          <li>Build the foundation of an effective L&D program</li>
        </ul>
      </div>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/skills-gaps.png" alt="skills gap" />
    </div>
    <div className={style.feature}>
      <div>
        <h1>Let data point the way</h1>
        <p>Be prepared for anything. But stay agile. Oh, and keep costs down. Leaders have to juggle a lot of competing priorities, and verified skills data provides solid ground for making informed decisions about your people.</p>
        <ul>
          <li>Ensure skills are deployed where they’ll do the organization the most good</li>
          <li>Develop a skills strategy to manage existing skills and close skills gaps for current and future needs</li>
          <li>Hang on to more of your developers with continued investment in their skills and career growth</li>
        </ul>
      </div>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/data.png" alt="data" />
    </div>
    <div className={style.devmagnet}>
      <div>
        <h1>Become a dev magnet</h1>
        <p>Developers are learners and builders at heart, and if you want to attract and hold onto the right devs, you need to give them opportunities to grow their skills and advance their careers.</p>
        <p>HackerRank provides the data and tools you need to encourage their journeys every step of the way.</p>
      </div>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/dev-magnet.png" alt="dev magnet" />
    </div>
    <div className={style.assessment}>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/not-just.png" alt="not-just" />
      <div>
        <h1>Not just for candidates</h1>
        <p>While many organizations use HackerRank assessments for external hiring, a third of all assessments taken on our platform are for internal talent.</p>
      </div>
    </div>
    <Footer />
    </>
  )
}
