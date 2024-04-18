import React from 'react'

export const Interview = () => {
  let interviewtools = [
    {src:"https://www.hackerrank.com/wp-content/uploads/2022/10/tool1.png"},
    {src:"https://www.hackerrank.com/wp-content/uploads/2022/10/tool2.png"},
    {src:"https://www.hackerrank.com/wp-content/uploads/2022/10/tool3.png"},
    {src:"https://www.hackerrank.com/wp-content/uploads/2022/10/tool4.png"},
    {src:"https://www.hackerrank.com/wp-content/uploads/2022/10/tool5.png"},
    {src:"https://www.hackerrank.com/wp-content/uploads/2022/10/tool6.png"},
    {src:"https://www.hackerrank.com/wp-content/uploads/2022/10/tool7.png"},
  ]
  return (
    <div>
      <p>:: Technical interviews ::</p>
      <p><b>Interview like it's 2024</b></p>
      <p>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>
      <Link to="/products/developer-skills-platform/interview"><b>Learn more</b></Link>
      <div>
        {interviewtools.map((link, id) => (
          <img key={id} src={link.src} alt={id}/>
        ))}
      </div>
      <img src='' alt='live coding' />
    </div>
  )
}
