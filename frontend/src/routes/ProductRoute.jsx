import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Screen } from '../pages/homepage/product/Screen'
import { RealWorldQuestions } from '../pages/homepage/product/realWorldQuestions'


export const ProductRoute = () => {
  return (
    <Routes>
        <Route path='/screen' element={<Screen />} />
        <Route path='/features/real-world-questions' element={<RealWorldQuestions />} />
    </Routes>
  )
}
