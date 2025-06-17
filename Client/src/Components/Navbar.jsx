import React from 'react'
import logo from '../assets/icon.png'
import { NavLink, useLocation } from 'react-router-dom'
import user from '../assets/user.png'
export default function Navbar() {
  const location = useLocation()
  const navLinks = [
    {link:'/' , title: 'Home'},
    {link:'/All Questions' , title: 'All Questions'},
    {link:'/login' , title: 'LogIn'}
  ]
    

  return (
    <div>
      <div className='w-full py-5'>
      <nav className='container w-11/12 mx-auto'>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
           <NavLink to={'/'}>
            <img src={logo} alt="" />
           </NavLink>
           <h3 className='text-3xl font-bold text-white'>Ask<span className={`${location.pathname === '/' ? 'text-SeaGreen' : 'text-white'}`}>Zone</span></h3>
        </div>
        <div className='flex items-center gap-5'>
           {
            navLinks.map(link => <NavLink to={link.link} className={'text-white text-xl'}>{link.title}</NavLink>)
           }
           <NavLink>
            <img src={user} alt="" />
           </NavLink>
        </div>
       </div>
      </nav>
    </div>
      <div className='w-full h-[1px] bg-gray-500 opacity-50'></div>
    </div>
  )
}
