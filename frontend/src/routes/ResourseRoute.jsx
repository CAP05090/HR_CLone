import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RolesDirectory } from '../pages/homepage/resource/RolesDirectory'
import { Integration } from '../pages/homepage/resource/Integration'
import { WhatNew } from '../pages/homepage/resource/WhatNew'

export const ResourseRoute = () => {
  return (
    <Routes>
        <Route path='/roles-directory/' element={<RolesDirectory/>} />
        <Route path='/integrations/' element={<Integration />} />
        <Route path="/what's-new/" element={<WhatNew />} />
    </Routes>
  )
}
