import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { RealWorldQuestions } from '../pages/product/realWorldQuestions'
import { Contact } from '../pages/Contact'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { RolesDirectory } from '../pages/resource/RolesDirectory'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Login } from '../pages/auth/login'
import { Signup } from '../pages/auth/signup'
import { Community } from '../components/home/community'
import { Interview } from '../components/home/interview'
import { Screen } from '../pages/product/Screen'
import { ForgetPassword } from '../pages/auth/ForgetPassword'
import { DashboardFooterRoute } from "./DashboardFooterRoute"
import { DashboardNavbar } from './DashboardNavbar'

export const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='#community' element={<Community />} />
            <Route parh="#screen" element={<Screen />} />
            <Route path="#interview" element={<Interview />} />
            <Route path='/auth/signup' element={<Signup />}/>
            <Route path='/auth/login' element={<Login />}/>
            <Route path='/auth/forget_password' element={<ForgetPassword />} />
            <Route path='/features/real-world-questions' element={<RealWorldQuestions />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/roles-directory' element={<RolesDirectory />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/screen' element={<Screen />} />
        </Routes>
        <DashboardFooterRoute />
        <DashboardNavbar />
    </BrowserRouter>
  )
}