import React from 'react'
import { Link } from 'react-router-dom'
import { Community } from './community'
import { Screen } from './screen'
import { Interview } from './interview'

export const Intro = () => {
  
  return (
    <>
    <h1>Skills speak louder than words</h1>
    <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
    <div>
      <Link to="/get-started/">Sign up</Link>
    </div>
    <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
    <div>
      <p><b>It’s not a pipeline problem.</b></p>
      <p><b>It’s a spotlight problem.</b></p>
      <p>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.</p>
      <div>
        <Link to="#community">Prep</Link>
        <Link to="#screen">Screen</Link>
        <Link to="#interview">Interview</Link>
      </div>
      <Community />
      <Screen />
      <Interview/>
    </div>
    </>
  )
}
