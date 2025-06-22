import React from 'react';
import about from '../assets/aboutjpg.jpg'
import { motion } from 'framer-motion';
import AboutUsSlider from './AboutUsSlider';
export default function AboutUs() {
  // Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};
  return (
    <div className='bg-gradient-to-b from-white via-yellow-100 to-yellow-100'>
      <div className="container w-11/12 mx-auto">
        <h2 className="text-6xl font-bold text-black py-20">About Ask <span className='text-yellow-400'>Zone</span></h2>
      </div>
      <div className='w-full h-[1px] bg-yellow-600 opacity-50'></div>
      <div className='grid grid-cols-12 gap-10'>
        <div className='col-span-2'>
          <img src={about} alt="" className='h-full w-full object-cover'/>
        </div>
         <div className='col-span-5 py-20'>
          <h3 className='text-gray-500 tracking-[5px] text-lg'>Welcome to AskZone</h3>
          <p className='text-sm text-yellow-950'>Ask Questions. Share Answers. Grow Together.</p>
          <h2 className='text-5xl my-6 leading-14 font-medium'>We help you find the answers you need to achieve your goals.</h2>
           <p className='mb-5 text-yellow-950'>AskZone is a collaborative knowledge-sharing platform where curious minds connect.
           From beginners to experts, everyone is welcome to ask questions, give thoughtful answers, and join open conversations on any topic that sparks interest.</p>
           <p className='text-yellow-950'>We're building more than just a Q&A site we’re growing a supportive community fueled by learning, respect, and meaningful contributions.Join us to explore new perspectives, grow your understanding, and empower others through shared knowledge.
           At AskZone, every question matters and every answer makes a difference.
           </p>
           <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-white hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 mt-10"
          >
           More About Us
          </motion.button>
         </div>
         <div className='col-span-5 py-20'>
          <div className='h-full flex'>
          <div className='w-[1px] h-full bg-yellow-600 opacity-50'></div>
        <div className='w-full'>
        <div className='flex items-center p-10'>
            <h2 className='text-6xl font-medium'>1</h2>
            <span className='text-4xl font-medium'>+</span>
            <div className=' ml-5'>
              <p className='text-gray-500 tracking-[5px] text-lg'>Growth</p>
              <p className='text-gray-500 tracking-[5px] text-lg'>Together</p>
            </div>
          </div>
          <div className='w-full h-[1px] bg-yellow-600 opacity-50'></div>
          <div>
            <AboutUsSlider />
          </div>
        </div>
          </div>
         </div>
      </div>
    </div>
  );
}
