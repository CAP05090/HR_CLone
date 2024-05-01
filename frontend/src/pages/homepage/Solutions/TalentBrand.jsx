import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'

export const TalentBrand = () => {
  return (
    <>
    <Navbar />
    <div>
      <h1>Showcase your tech brand</h1>
      <p>Build a tech brand that attracts developers and competes with big tech for world-class talent. Tell a story that thrills and attracts candidates with branded events, automated outreach, and real-world challenges.</p>
      <button>watch video</button>
    </div>
    <h1>Bring your talent story to life</h1>
    <div>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/12/Showcase-Your-Talent-Brand-HackerRank-1.png" alt="talent brand" />
      <div>
        <p>Your tech team is the best kept secret. They’re working on exciting and innovative projects, but your company might not be on the radar for most developers. And hiring developers is all about reputation.</p>
        <p>That’s why companies are increasingly working to establish their tech brands, which 72% of recruiting leaders agree has a significant impact on hiring.</p>
        <p>Build a tech brand that developers will come to know and love with HackerRank, the developer skills company.</p>
      </div>
    </div>
    <div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-CalendarWithoutDates.svg" alt="host brand" />
        <h2>Host branded community events & hackathons</h2>
        <p>Launch turn-key events, emails, and branded websites to promote your tech brand and attract developer interest.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-Trophy.svg" alt="trofy" />
        <h2>Deliver real-world challenges</h2>
        <p>Showcase the types of problems your team solves with real-world, hands-on technical challenges.</p>
      </div>
      <div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/09/feature-Target.svg" alt="goal" />
        <h2>Expand your reach</h2>
        <p>Engage with the HackerRank Community, currently 24 million developers strong.</p>
      </div>
    </div>
    <div>
      <h2>Trusted Brand</h2>
      <h1>Meet our developer friends</h1>
      <p>Recruiting developers is easier when you’re backed by a trusted brand. Let us introduce you to the community, so you can be the cool kid at the developer lunch table.</p>
      <ul>
        <li>Partner with HackerRank to leverage over a decade of brand equity with developers.</li>
        <li>Tap into the power and reach of the HackerRank Community, with 24 million developers.</li>
        <li>Rely on HackerRank’s trusted assessments and skills intelligence.</li>
      </ul>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/developer-friends-noshad.png" alt="coding" />
    </div>
    <div>
      <h2>Talent Pool</h2>
      <h1>Grow your talent pipeline</h1>
      <p>It’s time to level up your recruitment marketing and start building your talent pipeline.</p>
      <ul>
        <li>Create the talent brand you need to drive awareness and candidate interest.</li>
        <li>Leverage HackerRank to build relationships with high-quality developers.</li>
      </ul>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/software-dev.png" alt="sw-devs" />
      <p>When companies invest in their tech talent brand, they see</p>
      <p>50% more qualified applicants and employees are 40% less likely to leave.</p>
      <p>Source: <Link>LinkedIn</Link></p>
    </div>
    <div>
      <h2>Integrated Platform</h2>
      <h1>The all-in-one engagement platform</h1>
      <p>Engage more developers with integrated tools for creating, hosting, and promoting recruiting events. Backed by expert service.</p>
      <ul>
        <li>Branded websites to promote recruiting events.</li>
        <li>Scheduled email sequences to drive event attendance.</li>
        <li>Leaderboards to showcase participant standing and gamify events.</li>
        <li>Advanced proctoring that monitors for suspicious activity and upholds challenge integrity.</li>
      </ul>
      <img src="https://www.hackerrank.com/wp-content/uploads/2023/10/allinone.png" alt="allinone" />
    </div>
    <div>
      <h1>Give developers what they want</h1>
      <p>Job descriptions don't do justice to what developers will be working on or what they'll be exposed to. Show developers that your company presents an exciting opportunity and the chance to work with cool technology and an even cooler team.</p>
    </div>
    <Footer />
    </>
  )
}
