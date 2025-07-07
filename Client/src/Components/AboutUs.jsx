import React from 'react';
import about from '../assets/aboutjpg.jpg'
import { motion } from 'framer-motion';
import AboutUsSlider from './AboutUsSlider';
import Button from '../ShareComponent/Button';
import JumpingBallComponent from '../ShareComponent/JumpingBallComponent';
export default function AboutUs() {
  // Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};
const stats = [
  { value: '1', unit: '/Year', label: 'Keep Full Faith' },
  { value: '1', unit: '/Address', label: 'Consulting Branch' },
  { value: '1', unit: '/Consultant', label: 'Professional & Dedicated' },
  { value: '0k', unit: '/Clients', label: 'Happy and Trust Customers' },
];
  return (
    <div className='bg-gradient-to-b from-white  to-yellow-50 relative'>
      <div className="absolute -top-20 right-10 w-[500px] h-96 bg-gradient-to-br from-purple-400 via-yellow-300 to-orange-300 opacity-30 blur-[150px] rounded-full animate-pulse pointer-events-none z-0" />

      <div className="container w-11/12 mx-auto py-20">
      <JumpingBallComponent title={'About Us'}></JumpingBallComponent>
        <h2 className="text-6xl font-bold text-gray-800">About Ask <span className='text-yellow-400'>Zone</span></h2>
        <p className="text-lg text-gray-700 max-w-3xl mt-2 tracking-widest">At AskZone, we aim to maintain our place as a trusted platform where knowledge meets curiosity, empowering people through open questions and thoughtful answers.</p>
      </div>
      <div className='w-full h-[1px] bg-yellow-600 opacity-50'></div>
      <div className='grid grid-cols-11 gap-10'>
        <div className='col-span-3 my-10 rounded-2xl'>
          <img src={about} alt="" className='h-full w-full object-cover rounded-r-2xl'/>
        </div>
         <div className='col-span-4 py-20'>
          <h3 className='text-gray-500 tracking-[5px] text-lg'>Welcome to AskZone</h3>
          <p className='text-sm text-yellow-950'>Ask Questions. Share Answers. Grow Together.</p>
          <h2 className='text-5xl text-gray-800 my-6 leading-14 font-medium'>We help you find the answers you need to achieve your goals.</h2>
           <p className='mb-5 text-yellow-950'>AskZone is a collaborative knowledge-sharing platform where curious minds connect.
           From beginners to experts, everyone is welcome to ask questions, give thoughtful answers, and join open conversations on any topic that sparks interest.</p>
           <p className='text-yellow-950'>We're building more than just a Q&A site we’re growing a supportive community fueled by learning, respect, and meaningful contributions.Join us to explore new perspectives, grow your understanding, and empower others through shared knowledge.
           At AskZone, every question matters and every answer makes a difference.
           </p>
           <Button title={'More About Us'}></Button>
         </div>
         <div className='col-span-4 py-20'>
          <div className='h-full flex'>
          <div className='w-[1px] h-full bg-yellow-600 opacity-50'></div>
        <div className='w-full'>
        <div className='flex items-center p-10'>
            <h2 className='text-6xl font-medium text-gray-800'>1</h2>
            <span className='text-4xl font-medium text-gray-800'>+</span>
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
      <div className='w-full h-[1px] bg-yellow-600 opacity-50'></div>
      <div className="container w-11/12 mx-auto py-20">
        <div className='flex justify-between items-start'>
        <h2 className='text-5xl my-6 leading-14 font-medium max-w-3xl text-gray-800'>Maintaining Our Position as a Leading Knowledge-Sharing Platform in the Digital Space.</h2>
         <Button title={'Ask a Question'}></Button>
        </div>
        <div className='flex items-center justify-between'>
        {stats.map((item, idx) => (
          <div key={idx} className="mt-10">
            <h2 className="text-7xl font-semibold text-gray-800">{item.value}<span className="text-base font-medium text-gray-800">{item.unit}</span></h2>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
