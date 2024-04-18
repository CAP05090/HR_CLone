import React from 'react'
import { Navbar } from '../components/navbar/Navbar.jsx'
import { Footer } from '../components/footer/Footer.jsx'
import { Intro} from '../components/home/intro.jsx'
import { Community } from '../components/home/community.jsx'
import { About } from '../components/home/About.jsx'

export const HomePage = () => {
  return (
    <>
    <Navbar />
    <Intro />
    <Community />
    <About />
    <Footer />
    </>
  )
}
