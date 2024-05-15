import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homepage/HomePage'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { DashboardFooterRoute } from "./DashboardFooterRoute"
import { DashboardNavbar } from './DashboardNavbarRoute'
import { SolutionRoute } from './SolutionRoute'
import { ResourseRoute } from './ResourseRoute'
import { HomePageRoute } from './HomePageRoute'
import { AuthRoute } from './AuthRoute'
import { ProductRoute } from './ProductRoute'
import { DomainRoute } from './DomainRoute'
import { ChallengeRoute } from './challengeRoute'

export const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <ProductRoute />
        <AuthRoute />
        <HomePageRoute />
        <SolutionRoute />
        <ResourseRoute />
        <DashboardFooterRoute />
        <DashboardNavbar />
        <DomainRoute />
        <ChallengeRoute />
    </BrowserRouter>
  )
}