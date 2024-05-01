import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import style from "./strategy.module.css"

export const SkillStrategy = () => {
  return (
    <>
    <Navbar />
    <div className={style.strategy}>
      <h1>Set up your skills strategy in a flash</h1>
      <p>Build a skills strategy that actually works, actually scales, and actually keeps up with ever-evolving skills. Our plug-and-play skills taxonomy gets you up and running fast and keeps your skills current without the hassle.</p>
      <button>Watch video</button>
    </div>
    <div className={style.frontorg}>
      <h1></h1>
      <div>
        <img src='https://www.hackerrank.com/wp-content/uploads/2023/12/Set-Up-Your-Skills-Strategy-HackerRank-1.png' alt='skill strategy' />
        <p>The old standbys for evaluating talent can only get you so far in today’s market. Job descriptions and degrees are imprecise measures and ultimately, you have to hope for the best. That’s why companies are increasingly emphasizing skills over pedigree. Skills are specific. You’re replacing a best guess with GPS. And when you have a shared skills strategy anchored in our world-class skills taxonomy, you can navigate your future with confidence.</p>
      </div>
    </div>
    <div className={style.container}>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-Target.svg" alt="consistently" />
        <h1>Identify skills consistently</h1>
        <p>Take the guesswork out of mapping roles to skills and find the right talent with greater precision.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-Flash.svg" alt="keep skill" />
        <h1>Keep your skills current</h1>
        <p>Maintain a constantly updated and validated skills taxonomy with little hassle.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-Chart.svg" alt="measure" />
        <h1>Measure skills reliably</h1>
        <p>Use experiential challenges mapped to in-demand skills to ensure fair, valid, accurate collection of skills data.</p>
      </div>
    </div>
    <div className={style.feature}>
        <h2>Skills Authority</h2>
        <h1>Speak the same language</h1>
        <p>Adopting a common skills taxonomy reduces confusion, accelerates hiring velocity, and facilitates internal mobilization.</p>
        <ul>
          <li>Our taxonomy is informed by millions of developer assessments</li>
          <li>We map skills to capabilities and roles using advanced ML and clustering algorithms</li>
          <li>Our taxonomy is continuously validated by enterprise customers</li>
          <li>Visit the Roles Directory to see how skills map to roles and job families</li>
        </ul>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/skills-authority.png" alt="skills Authority" />
    </div>
    <div className={style.feature1}>
      <h2>Strong Signal</h2>
      <h1>Set it and (mostly) forget it</h1>
      <p>You don’t have time to manually operate an effective skills strategy. And you shouldn’t have to. We’ll help you automate from start to finish.</p>
      <ul>
        <li>Need a skills taxonomy out of the box? We’ve got you covered.</li>
        <li>Need skills tests out of the box? We’ve got you there, too.</li>
        <li>Certified assessments are trusted, role-based tests maintained by HackerRank experts.</li>
        <li>Bringing your own skills models? Tap our expert services to map your custom skills to our skills taxonomy.</li>
      </ul>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/strong-signal.png" alt="certified assessement" />
    </div>
    <div className={style.feature}>
      <h2>Developer Experience</h2>
      <h1>Test real-world skills</h1>
      <p>How you measure skills is critical. We use hands-on challenges in real coding environments to understand proficiency at a deeper level than you’ll ever get with multiple choice.</p>
      <ul>
        <li>Assess skills in realistic scenarios that align with on-the-job responsibilities</li>
        <li>Let developers showcase their skills in familiar environments</li>
        <li>See how senior devs review code, how data scientists work with relational datasets, and more</li>
      </ul>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/roles_directory.svg" alt="test skills" />
    </div>
    <div>
      <h1>Expert services</h1>
      <p>Need a more tailored solution? Tap our expert services to drive your skills strategy implementation.</p>
    </div>
    <div className={style.question}>
      <div>
        <h2>Skills Mapping</h2>
        <p>Expert IO Psychologists map your custom skills taxonomy to our out-of-the-box skills taxonomy.</p>
      </div>
      <div>
        <h2>Content Validation</h2>
        <p>A local validation study in which experts link test content to job requirements to establish and document the job relatedness of technical tests.</p>
      </div>
      <div>
        <h2>Assessement Content Management</h2>
        <p>Continued development of content and maintenance of assessments.</p>
      </div>
      <div>
        <h2>JOb Analysis</h2>
        <p>A scientific analysis of one or more roles in your organization to identify the important duties for the role and the knowledge, skills, and abilities (KSAs) that enable success.</p>
      </div>
      <div>
        <h2>Criterian Validation</h2>
        <p>A local validation study that establishes a correlation between test scores and job performance.</p>
      </div>
      <div>
        <h2>Adverse Impact Analysis</h2>
        <p>An analysis of group differences in test scores or passing rates and recommendations for reducing them, if observed.</p>
      </div>
    </div>
    <Footer />
    </>
  )
}
