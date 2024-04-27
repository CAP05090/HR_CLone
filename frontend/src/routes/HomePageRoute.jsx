import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Community } from '../components/home/community'
import { Interview } from '../components/home/interview'
import { Contact } from '../pages/homepage/Contact'
import { PrivacyPolicy } from '../pages/homepage/PrivacyPolicy'
import { Screen } from '../components/home/screen'

export const HomePageRoute = () => {
  return (
    <Routes>
        <Route path='#community' element={<Community />} />
        <Route parh="#screen" element={<Screen />} />
        <Route path="#interview" element={<Interview />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />

    </Routes>
  )
}
