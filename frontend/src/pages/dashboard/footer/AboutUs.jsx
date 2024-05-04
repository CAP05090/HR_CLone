import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import style from "./about.module.css"

export const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className={style.cont}>
      <div className={style.about}>
        <h1>About Us</h1>
        <p>HackerRank is a technology hiring platform that is the standard for assessing developer skills for over 3,000+ companies around the world. By enabling tech recruiters and hiring managers to objectively evaluate talent at every stage of the recruiting process, HackerRank helps companies hire skilled developers and innovate faster!</p>
        <button>View Open Positions</button>
        <p>or <Link to="/about-us/our-team/" className={style.team}>View Our Team</Link></p>
      </div>
      <div className={style.mission}>
        <p>OUR MISSION</p>
        <h1>Accelerate the World's Innovation</h1>
      </div>
    </div>
    <div className={style.links}>
      <Link className={style.lnk} to="https://techcrunch.com/2018/02/13/hackerrank-raises-30m-to-match-developers-with-jobs/"><img src="https://www.hackerrank.com/wp-content/uploads/2018/08/TC.png" alt="tc" /></Link>
      <Link className={style.lnk} to="https://blog.ycombinator.com/breaking-down-hackerranks-survey-of-40000-developers-with-vivek-ravisankar/"><img src="https://www.hackerrank.com/wp-content/uploads/2018/08/Y.png" alt="y" /></Link>
      <Link className={style.lnk} to="https://www.forbes.com/sites/laurencebradford/2018/01/29/who-are-modern-developers-survey-of-40000-reveals-trends/#34dcd0bd491e"><img src="https://www.hackerrank.com/wp-content/uploads/2018/08/forbes.png" alt="forbes" /></Link>
      <Link className={style.lnk} to="https://www.technologyreview.com/the-download/610052/want-to-code-you-better-start-teaching-yourself/"><img src="https://www.hackerrank.com/wp-content/uploads/2018/08/NTR.png" alt="mtr" /></Link>
      <Link className={style.lnk} to="https://www.bizjournals.com/sanfrancisco/news/2017/05/17/tech-awards-2017-hackerrank-is-tech-hiring-better.html"><img src="https://www.hackerrank.com/wp-content/uploads/2018/08/SBT.png" alt="sbt" /></Link>
    </div>
    <h1 id={style.value}>Our Values</h1>
    <div className={style.value}>
      <div>
        <h2><img src="https://th.bing.com/th?id=OIP.gZxrvF704QLj3pq-i4oS1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="data driven" />Data Driven</h2>
        <ul>
          <li>We are not afraid to challenge the status-quo</li>
          <li>We debate respectfully and insightfully as often as we can</li>
          <li>We never stop learning</li>
        </ul>
      </div>
      <div>
        <h2><img src="https://th.bing.com/th?id=OIP.gZxrvF704QLj3pq-i4oS1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="extreme owenership" />Extreme Ownership</h2>
        <ul>
          <li>We operate in a ‘no excuse’ zone</li>
          <li>We are relentlessly resourceful</li>
        </ul>
      </div>
      <div>
        <h2><img src="https://th.bing.com/th?id=OIP.gZxrvF704QLj3pq-i4oS1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="customer delight" />Customer Delight </h2>
        <ul>
          <li>We are obsessed with customer happiness</li>
          <li>We sweat the details in every interaction</li>
          <li>We optimize for speed</li>
        </ul>
      </div>
      <div>
        <h2><img src="https://th.bing.com/th?id=OIP.gZxrvF704QLj3pq-i4oS1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="giver" />Giver</h2>
        <ul>
          <li>We are direct, but not mean</li>
          <li>We make time to help others achieve their goals</li>
          <li>We seek to understand</li>
        </ul>
      </div>
    </div>
    <div className={style.story}>
      <h1>Our story</h1>
      <div>
        <p>date</p>
        <h2>Humble Beginnings</h2>
        <p>The journey to HackerRank first began in July 2009, when computer science graduates Vivek and Hari worked at Amazon and IBM (respectively) for about a year in Bangalore. Both were on interview panels, inundated with endless hours of resume reviews, phone screens, and onsite interviews. Unqualified people were making it to the onsite, while some of their most capable, hardworking friends were passed on because of their GPA or lack of a prestigious degree.</p>
        <p>That’s when they noticed a massive problem—and opportunity—in the technical recruiting system. They quit their jobs to build InterviewStreet, a website that matched mentors with students. Within a few weeks, hundreds of students signed up across a dozen universities. They received their first cheque for 413.62 INR ($5.68). A copy exists in the Bangalore office and underneath, it says “Humble Beginnings.”</p>
      </div>
    </div>
    <Footer />
    </>
  )
}
