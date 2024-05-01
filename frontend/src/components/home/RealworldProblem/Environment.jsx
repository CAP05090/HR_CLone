import React from 'react'
import style from "./environment.module.css"

export const Environment = () => {
  return (
    <>
    <div className={style.environment}>
      <h1 id={style.envtag}>Give devs the tools to do their best work</h1>
      <div className={style.btns}>
        <button className={style.btn}>Back-end environments</button>
        <button className={style.btn}>Full stack environments</button>
        <button className={style.btn}>Front-end environments</button>
        <button className={style.btn}>Mobile environments</button>
      </div>
    </div>
    <div className={style.uniquenv}>
        <p id={style.tag}>Hire the right devs for your unique environment</p>
        <div className={style.container}>
            <div>
                <img src="https://www.hackerrank.com/wp-content/uploads/2023/11/Vector.svg" alt="tech stack" />
                <h2>Your tech stack</h2>
                <p>Customize environments and see how devs would address real-world problems in your tech stack.</p>
            </div>
            <div>
                <img src="https://www.hackerrank.com/wp-content/uploads/2023/11/Group-1321314666.svg" alt="ide" />
                <h2>Best-in-class IDE</h2>
                <p>Create tests that match your production environment, with support for all necessary frameworks and libraries.</p>
            </div>
            <div>
                <img src="https://www.hackerrank.com/wp-content/uploads/2023/11/Group-1321314664.svg" alt="dev experience" />
                <h2>Superior dev experience</h2>
                <p>Let developers showcase their skills in familiar tools and environments.</p>
            </div>
        </div>
    </div>
    <div className={style.testskills}>
        <div>
            <h1>Test skills in real scenarios</h1>
            <p>Unlike general coding questions, our real-world experience lets candidates work through extended problems and carry context forward from one challenge to the next.</p>
            <ul>
                <li>Watch candidates problem solve</li>
                <li>Effortlessly upload project repos</li>
            </ul>
        </div>
        <img src="https://www.hackerrank.com/wp-content/uploads/2023/11/rwq2.png" alt="code editor" />
    </div>
    </>
  )
}
