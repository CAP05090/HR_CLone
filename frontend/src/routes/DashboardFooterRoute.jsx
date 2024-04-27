import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Blog } from '../pages/dashboard/footer/Blog'
import { Scoring } from '../pages/dashboard/footer/Scoring'
import { Environment } from '../pages/dashboard/footer/Environment'
import { FAQ } from '../pages/dashboard/footer/FAQ'
import { AboutUs } from '../pages/dashboard/footer/AboutUs'
import { Support } from '../pages/dashboard/footer/Support'
import { Careers } from '../pages/dashboard/footer/Careers'
import { TermsOfService } from '../pages/dashboard/footer/TermsOfService'

export const DashboardFooterRoute = () => {
  return (
    <Routes>
      <Route path='/blog' element={<Blog />} />
      <Route path="/scoring" element={<Scoring />} />
      <Route path='/environment' element={<Environment />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/support' element={<Support />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/terms-of-service' element={<TermsOfService />} />
    </Routes>
  )
}
