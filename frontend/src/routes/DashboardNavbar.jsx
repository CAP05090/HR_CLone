import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Prepare } from '../pages/dashboard/navbar/Prepare'
import { Certify } from '../pages/dashboard/navbar/Certify'
import { Contests } from '../pages/dashboard/navbar/Contests'

export const DashboardNavbar = () => {
  return (
    <Routes>
        <Route path='/prepare' element={<Prepare />} />
        <Route path='/skills-verification' element={<Certify />} />
        <Route path='/contest' element={<Contests />} />
    </Routes>
  )
}
