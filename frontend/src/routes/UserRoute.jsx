import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../pages/users/Profile'
import { Leaderboard } from '../pages/users/Leaderboard'
import { Bookmarks } from '../pages/users/Bookmarks'
import { Settings } from '../pages/users/Settings'

export const UserRoute = () => {
  return (
    <Routes>
        <Route path='/profile/' element={ <Profile /> } />
        <Route path='/leaderboard' element={ <Leaderboard /> } />
        <Route path='/challenges/bookmarks' element={ <Bookmarks /> } />
        <Route path='/settings' element={ <Settings /> } />
    </Routes>
  )
}
