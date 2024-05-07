import React from 'react'
import { Navbar } from '../../../components/home/navbar/Navbar'
import { Footer } from '../../../components/home/footer/Footer'
import { Link } from 'react-router-dom'
import style from "./rolesdirectory.module.css"

export const RolesDirectory = () => {
  let AI_ML = [
    {to:"/roles-directory/machin-learning-engineer", displayText:"Machine Learning Engineer"},
    {to:"/roles-directory/machine-learning-engineer-computer-vision)", displayText:"Machine Learning Engineer (Computer Vision)"},
    {to:"/roles-directory/machine-learning-engineer-nlp", displayText:"Machine Learning Engineer (NLP)"},
    {to:"/roles-directory/senior-machine-learning-engineer", displayText:"Sr. Machine Learning Engineer"},
    {to:"/roles-directory/Senior-machine-learning-engineer-computer-vision", displayText:"Sr. Machine Learning Engineer (Computer Vision)"},
    {to:"/roles-directory/Senior-machine-learning-engineer-nlp", displayText:"Sr. Machine Learning Engineer (NLP)"}
  ]
  let Cloud = [
    {to:"/roles-directory/cloud-engineer", displayText:"Cloud Engineer"},
    {to:"/roles-directory/cloud-engineer-aws", displayText:"Cloud Engineer (AWS)"},
    {to:"/roles-directory/cloud-security-engineer", displayText:"Cloud Security Engineer"},
    {to:"/roles-directory/site-reliability-engineer", displayText:"Site Reliability Engineer"},
    {to:"/roles-directory/senior-cloud-engineer", displayText:"Sr. Cloud Engineer"},
    {to:"/roles-directory/seniorcloud-engineer-aws", displayText:"Sr. Cloud Engineer (AWS)"},
    {to:"/roles-directory/senior-cloud-security-engineer", displayText:"Sr. Cloud Security Engineer"},
    {to:"/roles-directory/senior-site-reliability-engineer", displayText:"Sr. Site Reliability Engineer"}
  ]
  let CyberSecurity = [
    {to:"/roles-directory/cybersecurity-engineer", displayText:"Cybersecurity Engineer"},
    {to:"/roles-directory/senior-cybersecurity-engineer", displayText:"Sr. Cybersecurity Engineer"}
  ]
  let DataEngineering = [
    {to:"/roles-directory/data-engineer", displayText:"Data Engineer"},
    {to:"/roles-directory/data-engineer-java-spark", displayText:"Data Engineer (Java Spark)"},
    {to:"/roles-directory/data-engineer-pyspark", displayText:"Data Engineer (PySpark)"},
    {to:"/roles-directory/data-engineer-scala-spark", displayText:"Data Engineer (Scala Spark)"},
    {to:"/roles-directory/senior-data-engineer", displayText:"Sr. Data Engineer"},
    {to:"/roles-directory/senior-data-engineer-java-spark", displayText:"Sr. Data Engineer (Java Spark)"},
    {to:"/roles-directory/senior-data-engineer-pyspark", displayText:"Sr. Data Engineer (PySpark)"},
    {to:"/roles-directory/senior-data-engineer-scala-spark", displayText:"Sr. Data Engineer (Scala Spark)"}
  ]
  let DataSciencsAndAnalytics = [
    {to:"/roles-directory/data-analyst", displayText:"Data Analyst"},
    {to:"/roles-directory/data-analyst-python", displayText:"Data Analyst (Python)"},
    {to:"/roles-directory/data-analyst-r", displayText:"Data Analyst (R)"},
    {to:"/roles-directory/data-scientist", displayText:"Data Scientist"},
    {to:"/roles-directory/data-scientist-python", displayText:"Data Scientist (Python)"},
    {to:"/roles-directory/data-scientist-r", displayText:"Data Scientist (R)"},
    {to:"/roles-directory/senior-data-analyst", displayText:"Sr. Data Analyst"},
    {to:"/roles-directory/senior-data-analyst-python", displayText:"Sr. Data Analyst (Python)"},
    {to:"/roles-directory/senior-data-analyst-r", displayText:"Sr. Data Analyst (R)"},
    {to:"/roles-directory/senior-data-scientist", displayText:"Sr. Data Scientist"},
    {to:"/roles-directory/senior-data-scientist-python", displayText:"Sr. Data Scientist (Python)"},
    {to:"/roles-directory/senior-data-scientist-r", displayText:"Sr. Data Scientist (R)"}
  ]
  let Mobile = [
    {to:"/roles-directory/mobile-applications-developer-android-java", displayText:"Mobile Applications Developer (Android - Java)"},
    {to:"/roles-directory/mobile-applications-developer-android-kotlin", displayText:"Mobile Applications Developer (Android - Kotlin)"},
    {to:"/roles-directory/mobile-applications-developer-react-native", displayText:"Mobile Applications Developer (React Native)"},
    {to:"/roles-directory/senior-mobile-applications-developer-android-java", displayText:"Sr. Mobile Applications Developer (Android - Java)"},
    {to:"/roles-directory/senior-mobile-applications-developer-android-kotlin", displayText:"Sr. Mobile Applications Developer (Android - Kotlin)"},
    {to:"/roles-directory/senior-mobile-applications-developer-react-native", displayText:"Sr. Mobile Applications Developer (React Native)"}
  ]
  let QualityAssurance = [
    {to:"/roles-directory/qa-engineer-selenium", displayText:"QA Engineer (Selenium)"},
    {to:"/roles-directory/quality-assurance-engineer", displayText:"Quality Assurance Engineer"},
    {to:"/roles-directory/quality-assurance-engineer-mobile", displayText:"Quality Assurance Engineer (Mobile)"},
    {to:"/roles-directory/senior-qa-engineer-selenium", displayText:"Sr. QA Engineer (Selenium)"},
    {to:"/roles-directory/senior-quality-assurance-engineer", displayText:"Sr. Quality Assurance Engineer"},
    {to:"/roles-directory/senior-quality-assurance-engineer-mobile", displayText:"Sr. Quality Assurance Engineer (Mobile)"}
  ]
  let SoftwareEngineering = [
    {to:"/roles-directory/software-engineer", displayText:"Software Engineer"},
    {to:"/roles-directory/software-engineer-intern", displayText:"Software Engineer Intern"},
    {to:"/roles-directory/senior-software-engineer", displayText:"Sr. Software Engineer"}
  ]
  let WebDevelopment = [
    {to:"/roles-directory/back-end-developer", displayText:"Back-End Developer"},
    {to:"/roles-directory/back-end-developer-net", displayText:"Back-End Developer (.NET)"},
    {to:"/roles-directory/back-end-developer-django", displayText:"Back-End Developer (Django)"},
    {to:"/roles-directory/back-end-developer-laravel", displayText:"Back-End Developer (Laravel)"},
    {to:"/roles-directory/back-end-developer-node", displayText:"Back-End Developer (Node)"},
    {to:"/roles-directory/back-end-developer-rails", displayText:"Back-End Developer (Rails)"},
    {to:"/roles-directory/back-end-developer-spring-boot", displayText:"Back-End Developer (Spring Boot)"},
    {to:"/roles-directory/front-end-developer", displayText:"Front-End Developer"},
    {to:"/roles-directory/front-end-developer-angular", displayText:"Front-End Developer (Angular)"},
    {to:"/roles-directory/front-end-developer-react", displayText:"Front-End Developer (React)"},
    {to:"/roles-directory/front-end-developer-vue-js", displayText:"Front-End Developer (Vue.js)"},
    {to:"/roles-directory/full-stack-engineer-angular-node", displayText:"Full-Stack Engineer (Angular & Node)"},
    {to:"/roles-directory/full-stack-engineer-react-node", displayText:"Full-Stack Engineer (React & Node)"},
    {to:"/roles-directory/senior-back-end-developer", displayText:"Sr. Back-End Developer"},
    {to:"/roles-directory/senior-back-end-developer-net", displayText:"Sr. Back-End Developer (.NET)"},
    {to:"/roles-directory/senior-back-end-developer-django", displayText:"Sr. Back-End Developer (Django)"},
    {to:"/roles-directory/senior-back-end-developer-laravel", displayText:"Sr. Back-End Developer (Laravel)"},
    {to:"/roles-directory/senior-back-end-developer-node", displayText:"Sr. Back-End Developer (Node)"},
    {to:"/roles-directory/senior-back-end-developer-rails", displayText:"Sr. Back-End Developer (Rails)"},
    {to:"/roles-directory/senior-back-end-developer-spring-boot", displayText:"Sr. Back-End Developer (Spring Boot)"},
    {to:"/roles-directory/senior-front-end-developer", displayText:"Sr. Front-End Developer"},
    {to:"/roles-directory/senior-front-end-developer-angular", displayText:"Sr. Front-End Developer (Angular)"},
    {to:"/roles-directory/senior-front-end-developer-react", displayText:"Sr. Front-End Developer (React)"},
    {to:"/roles-directory/senior-front-end-developer-vue-js", displayText:"Sr. Front-End Developer (Vue.js)"},
    {to:"/roles-directory/senior-full-stack-engineer-angular-node", displayText:"Sr. Full-Stack Engineer (Angular & Node)"},
    {to:"/roles-directory/senior-full-stack-engineer-react-node", displayText:"Sr. Full-Stack Engineer (React & Node)"}
  ]
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
        <div>
        {
          AI_ML.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Cloud</h2>
        <hr className={style.hr} />
        <div>
        {
          Cloud.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Cybersecurity</h2>
        <hr className={style.hr} />
        <div>
        {
          CyberSecurity.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Data Engineering</h2>
        <hr className={style.hr} />
        <div>
        {
          DataEngineering.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Data Science & Analytics</h2>
        <hr className={style.hr} />
        <div>
        {
          DataSciencsAndAnalytics.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Mobile</h2>
        <hr className={style.hr} />
        <div>
        {
          Mobile.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Quality Assurance</h2>
        <hr className={style.hr} />
        <div>
        {
          QualityAssurance.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Software Engineering</h2>
        <hr className={style.hr} />
        <div>
        {
          SoftwareEngineering.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Web Development</h2>
        <hr className={style.hr} />
        <div>
        {
          WebDevelopment.map((item, id)=>(
            <Link key={id} to={item.to} className={style.links}>{item.displayText}</Link>
          ))
        }
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
