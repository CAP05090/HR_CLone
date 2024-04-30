import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Algorithms } from '../pages/domains/Algorithms'

export const DashboardTopicsRoute = () => {
  return (
    <Routes>
        <Route path='/domains/algorithms' element={<Algorithms />} />
        {/* <Route path='/domains/data-structures' element />
        <Route path='/domains/mathematics' element />
        <Route path='/domains/ai' element />
        <Route path='/domains/c' element />
        <Route path='/domains/cpp' element />
        <Route path='/domains/java' element />
        <Route path='/domains/python' element />
        <Route path='/domains/ruby' element />
        <Route path='/domains/sql' element />
        <Route path='/domains/database' element />
        <Route path='/domains/linux-shell' element />
        <Route path='/domains/functional-programming' element />
        <Route path='/domains/regex' element /> */}
    </Routes>
  )
}
