import React from 'react'
import { Navbar } from '../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../components/dashboard/Footer/Footer'

export const Dashboard = () => {
  return (
    <div style={{width:"100%", margin:"auto", backgroundColor:"aliceblue"}}>
      <Navbar />
      <div>Dashboard</div>
      <Footer />
    </div>
  )
}
