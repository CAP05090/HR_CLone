import React from 'react'
import { Link } from 'react-router-dom'

export const Intro = () => {
  
  return (
    <>
    <h1>Skills speak louder than words</h1>
    <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
    <div>
      <Link to="/get-started/">Sign up</Link>
      <Link to="/request-demo/">Request demo</Link>
    </div>
    <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
    </>
  )
}
