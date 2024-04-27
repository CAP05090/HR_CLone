import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TalentBrand } from '../pages/Solutions/TalentBrand'
import { SkillStrategy } from '../pages/Solutions/SkillStrategy'
import { EmbraceAI } from '../pages/Solutions/EmbraceAI'

export const SolutionRoute = () => {
  return (
    <Routes>
        <Route path='/solutions/talent-brand/' element={<TalentBrand />} />
        <Route path='/solutions/skills-strategy/' element={<SkillStrategy />} />
        <Route path='/products/ai/' element={<EmbraceAI />} />
    </Routes>
  )
}
