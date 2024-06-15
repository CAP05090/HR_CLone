import React from 'react'
import {Routes, Route} from "react-router-dom"
import { AWSBasic } from '../pages/homepage/resource/skillsDirrectory/skillsdirectory/aws/AWSBasic'

export const SkillsRoute = () => {
  return (
    <Routes>
        <Route path='/skills-directory/aws_basic' element={<AWSBasic />} />
    </Routes>
  )
}
