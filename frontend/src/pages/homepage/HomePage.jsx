import React from 'react'
import { Navbar } from '../../components/home/navbar/Navbar.jsx'
import { Footer } from '../../components/home/footer/Footer.jsx'
import { Intro} from '../../components/home/intro.jsx'

export const HomePage = () => {
  return (
    <div style={{width:"99%", margin:"auto"}}>
      <Navbar />
      <Intro />
      <Footer />
    </div>
  )
}
