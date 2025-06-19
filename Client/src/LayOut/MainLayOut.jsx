import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';

export default function MainLayOut() {
  const location = useLocation();
  return (
    <div className='robotoCondensed'>
      <TopNav />
      <div className={`${location.pathname === '/' && 'hidden'} bg-SeaGreen`}>
      <Navbar />
      </div>
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}
