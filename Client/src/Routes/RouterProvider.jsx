import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayOut from '../LayOut/MainLayOut'
import HomePage from '../Pages/HomePage'
import LogInPage from '../Pages/LogInPage'

export default function RouterProvider() {
  return (
    <Routes>
      <Route path='/' element={<MainLayOut />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/login' element={<LogInPage />}></Route>
      </Route>
    </Routes>
  )
}

