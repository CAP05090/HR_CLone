import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Algorithms } from '../pages/domains/Algorithms'
import  {DataStructure} from "../pages/domains/DataStructure"
import  {Mathematics} from "../pages/domains/Mathematics"
import { ArtificialIntellegence } from '../pages/domains/AI'
import { C } from '../pages/domains/C'
import { Cpp } from '../pages/domains/Cpp'
import { Java } from '../pages/domains/Java'
import { Python } from '../pages/domains/Python'
import { Ruby } from '../pages/domains/Ruby'
import { Sql } from '../pages/domains/Sql'
import { Database } from '../pages/domains/Database'
import { LinuxShell } from '../pages/domains/LinuxShell'
import { Regex } from '../pages/domains/Regex'
import { FunctionalProgramming } from '../pages/domains/FunctionalProgramming'

export const DomainRoute = () => {
  return (
    <Routes>
        <Route path='/domains/algorithms' element={<Algorithms />} />
        <Route path='/domains/data-structures' element={<DataStructure />} />
        <Route path='/domains/mathematics' element={<Mathematics />} />
        <Route path='/domains/ai' element={<ArtificialIntellegence />} />
        <Route path='/domains/c' element={<C />} />
        <Route path='/domains/cpp' element={<Cpp />} />
        <Route path='/domains/java' element={<Java />} />
        <Route path='/domains/python' element={<Python />} />
        <Route path='/domains/ruby' element={<Ruby />} />
        <Route path='/domains/sql' element={<Sql />} />
        <Route path='/domains/database' element={<Database />} />
        <Route path='/domains/linux-shell' element={<LinuxShell />} />
        <Route path='/domains/functional-programming' element={<FunctionalProgramming />} />
        <Route path='/domains/regex' element={<Regex />} />
    </Routes>
  )
}
