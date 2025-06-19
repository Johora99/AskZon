import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayOut from '../LayOut/MainLayOut'
import HomePage from '../Pages/HomePage'
import LogInPage from '../Pages/LogInPage'
import SignUpPage from '../Pages/SignUpPage'
import ErrorPage from '../Pages/ErrorPage'

export default function RouterProvider() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path='/' element={<MainLayOut />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/login' element={<LogInPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
      </Route>
    </Routes>
  )
}

