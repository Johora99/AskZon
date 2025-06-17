import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function MainLayOut() {
  const location = useLocation();
  return (
    <div className='robotoCondensed'>
      <div className={`${location.pathname === '/' && 'hidden'} bg-SeaGreen`}>
      <Navbar />
      </div>
      <Outlet></Outlet>
    </div>
  )
}
