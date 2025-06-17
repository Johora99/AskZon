import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import bgImg from '../assets/banner.jpg'
import BgImage from '../ShareComponent/BgImage'
export default function HomePage() {
  return (
    <div className='relative'>
    <BgImage bgImg={bgImg} height={500}>
     <div className='relative z-50'>
     <Navbar />
     <Banner />
     </div>
    </BgImage>
    <div className="absolute inset-0 bg-gradient-to-l from-[#52955F] to-transparent opacity-60 z-0"></div>
    </div>
  )
}
