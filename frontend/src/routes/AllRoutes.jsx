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
import { ContestRoute } from './ContestRoute'
import { UserRoute } from './UserRoute'
import { SkillsRoute } from './SkillsRoute'

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
        <ContestRoute />
        <UserRoute />
        <SkillsRoute />
    </BrowserRouter>
  )
}