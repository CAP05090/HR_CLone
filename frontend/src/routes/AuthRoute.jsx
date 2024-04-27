import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/auth/login'
import { Signup } from '../pages/auth/signup'
import { ForgetPassword } from '../pages/auth/ForgetPassword'

export const AuthRoute = () => {
  return (
    <Routes>
        <Route path='/auth/signup' element={<Signup />}/>
        <Route path='/auth/login' element={<Login />}/>
        <Route path='/auth/forget_password' element={<ForgetPassword />} />
    </Routes>
  )
}
