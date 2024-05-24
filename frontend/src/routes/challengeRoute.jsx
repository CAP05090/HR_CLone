import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReverseString } from '../pages/challenge/Algorithms/ReverseString'

export const ChallengeRoute = () => {
  return (
    <Routes>
        <Route path='challenges/reverse-a-string' element={<ReverseString />} />
    </Routes>
  )
}
