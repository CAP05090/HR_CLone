import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { RealWorldQuestions } from '../pages/product/realWorldQuestions'
import { Contact } from '../pages/Contact'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { RolesDirectory } from '../pages/resource/RolesDirectory'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/auth/login'
import { Signup } from '../pages/auth/signup'

export const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='/auth/signup' element={<Signup />}/>
            <Route path='/auth/login' element={<Login />}/>
            <Route path='/features/real-world-questions' element={<RealWorldQuestions />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/roles-directory' element={<RolesDirectory />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}