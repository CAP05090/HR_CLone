import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContest } from '../pages/dashboard/navbar/contest/Admin/CreateContest'
import { ManageContest } from '../pages/dashboard/navbar/contest/Admin/ManageContest'
import { ArchiverdContest } from '../pages/dashboard/navbar/contest/ArchiverdContest'

export const ContestRoute = () => {
  return (
    <Routes>
        <Route path='/administration/contests/create' element={<CreateContest />} />
        <Route path='/administration/contests' element={<ManageContest />} />
        <Route path='/contests/archived' element={<ArchiverdContest />} />
    </Routes>
  )
}
