import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TalentBrand } from '../pages/homepage/Solutions/TalentBrand'
import { SkillStrategy } from '../pages/homepage/Solutions/SkillStrategy'
import { EmbraceAI } from '../pages/homepage/Solutions/EmbraceAI'
import { InternalTalent } from '../pages/homepage/Solutions/InternalTalent'

export const SolutionRoute = () => {
  return (
    <Routes>
        <Route path='/solutions/talent-brand/' element={<TalentBrand />} />
        <Route path='/solutions/skills-strategy/' element={<SkillStrategy />} />
        <Route path='/solutions/internal-talent' element={<InternalTalent />} />
        <Route path='/products/ai/' element={<EmbraceAI />} />
    </Routes>
  )
}
