import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import bgImg from '../assets/banner.webp'
import BgImage from '../ShareComponent/BgImage'
import AboutUs from '../Components/AboutUs'
import AnimatedBottom from '../Components/AnimatedBottom'
import HowItWorks from '../Components/HowItWorks'
import TopUsers from '../Components/TopUsers'
import Testimonials from '../Components/Testimonials'
import OurServices from '../Components/OurServices'
export default function HomePage() {
  return (
    
    <div>
    <div className='relative' style={{
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
    <div className="relative">
  <AboutUs />
  <svg
    className="absolute -bottom-1 left-0 w-full"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      fill="#facc15"
      d="M0,288 C360,192 1080,384 1440,288 L1440,320 L0,320 Z"
    />
  </svg>
    </div>
    <div>
      <OurServices />
    </div>
    <div className="my-40 relative">
  <HowItWorks />
  <svg
    className="absolute -bottom-1 left-0 w-full"
    viewBox="20 20 1400 250"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      fill="#facc15"
      d="M0,256 C300,320 1140,160 1440,240 L1440,320 L0,320 Z"
    />
  </svg>
    </div>
    <div>
    <TopUsers />
    </div>
    
    <div>
      <Testimonials />
    </div>
    <div>
      <AnimatedBottom />
    </div>
    </div>
  )
}
