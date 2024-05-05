import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RolesDirectory } from '../pages/homepage/resource/RolesDirectory'
import { Integration } from '../pages/homepage/resource/Integration'
import { WhatNew } from '../pages/homepage/resource/WhatNew'
import { SkillsDirectory } from '../pages/homepage/resource/skillsDirrectory/SkillsDirectory'

export const ResourseRoute = () => {
  return (
    <Routes>
        <Route path='/roles-directory/' element={<RolesDirectory/>} />
        <Route path='/integrations/' element={<Integration />} />
        <Route path="/what's-new/" element={<WhatNew />} />
        <Route path='/skills-directory' element={<SkillsDirectory />} />
    </Routes>
  )
}
