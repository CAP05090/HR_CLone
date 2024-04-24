import React from 'react'
import { Navbar } from '../components/navbar/Navbar.jsx'
import { Footer } from '../components/footer/Footer.jsx'
import { Intro} from '../components/home/intro.jsx'
import { About } from '../components/home/About.jsx'

export const HomePage = () => {
  return (
    <div style={{width:"99%", margin:"auto"}}>
      <Navbar />
      <Intro />
      <About />
      <Footer />
    </div>
  )
}
