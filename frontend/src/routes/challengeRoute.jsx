import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReverseString } from '../pages/challenge/Algorithms/ReverseString'
import { MaximumElement } from '../pages/challenge/Algorithms/MaximumElement'
import { MaxSubarraySum } from '../pages/challenge/Algorithms/MaxSubarraySum'

export const ChallengeRoute = () => {
  return (
    <Routes>
        <Route path='/challenges/reverse-a-string' element={<ReverseString />} />
        <Route path='/challenges/find-the-maximum-element-in-an-array' element={<MaximumElement />} />
        <Route path='/challenges/maximum-subarray-sum' element={<MaxSubarraySum />} />
    </Routes>
  )
}
