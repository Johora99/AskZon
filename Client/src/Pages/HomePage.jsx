import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import bgImg from '../assets/banner.webp'
import BgImage from '../ShareComponent/BgImage'
export default function HomePage() {
  return (
    <div className='relative'     style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
    }}>
      <svg
    className="absolute -bottom-5 left-0 w-full"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#facc15"
      d="M0,224 C480,320 960,128 1440,224 L1440,320 L0,320 Z"
    />
  </svg>
  
    <BgImage bgImg={bgImg}>
     <div className='relative z-50'>
     <Navbar />
     <Banner />
     </div>
    </BgImage>
    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-yellow-900  opacity-60 z-0"></div>
    </div>
  )
}
