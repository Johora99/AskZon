import React from 'react'
import JumpingBallComponent from '../ShareComponent/JumpingBallComponent'
import icon1 from '../assets/icons8-ask-question-64.png'
import icon2 from '../assets/icons8-knowledge-sharing-50.png'
import icon3 from '../assets/icons8-user-groups-50.png'
import icon4 from '../assets/icons8-development-skill-50.png'
import icon5 from '../assets/icons8-reputation-64.png'
import Servicecard from './Servicecard'
import Button from '../ShareComponent/Button'
import TimelineSection from './TimelineSection'

export default function OurServices() {
const services =   [
  {
    "id": "01",
    "icon": icon1,
    "title": "Ask Anything",
    "text": "From science to lifestyle, relationships to tech — ask any question that matters to you.",
    'updown':200
  },
  {
    "id": "02",
    "icon": icon2,
    "title": "Share Knowledge",
    "text": "Answer questions in your areas of interest or expertise and help others learn.",
    'updown':100
  },
  {
    "id": "03",
    "icon": icon3,
    "title": "Community Driven",
    "text": "A vibrant, supportive community where questions spark conversations and ideas.",
    'updown':0,
  },
  {
    "id": "04",
    "icon": icon4,
    "title": "Smart Tagging",
    "text": "Use tags to organize questions by topic — from health, coding, education, to hobbies.",
    'updown':100,
  },
  {
    "id": "05",
    "icon": icon5,
    "title": "Build Reputation",
    "text": "Earn points, badges, and recognition for your valuable contributions and insights.",
    'updown':200,
  }
]

  return (
    <div className='w-full relative'>
    <div className='bg pt-30 pb-80'>
      <div className='bg-gradient-to-b from-yellow-50  to-yellow-100 opacity-60 absolute top-0 w-full h-full'></div>
    <div className='container w-11/12 mx-auto relative z-50'>
         <div className='text-center lg:max-w-4xl mx-auto '>
        <div className='flex items-center justify-center'>
        <JumpingBallComponent title={'Our Services'}></JumpingBallComponent>
        </div>
           <h3 className='text-5xl font-bold leading-14 text-gray-800'>Empowering Ideas, Solving Problems – Welcome to AskZon!</h3>
         </div>
         <div className='flex items-center justify-between mt-20 gap-10'>
     {
    services.map(service => <Servicecard service={service}></Servicecard>)
     }
        </div>
         <div className='mt-100'>
         <div className="min-h-screen grid grid-cols-2 gap-10 relative overflow-visible ">
  <div className="sticky top-0 self-start py-30">
    <JumpingBallComponent title={'Why Choose Us'} />
    <div>
      <h3 className="text-5xl font-bold text-gray-800 mt-5 mb-3">
        Where Expertise Meets Innovation
      </h3>
      <p className="opacity-60 text-lg">
        At Askzone, insight leads the way and passion powers every solution. With deep domain knowledge and a relentless drive for excellence, we deliver intelligent, results-driven outcomes that go beyond expectations.
      </p>
      <Button title={'Contact Us'} />
    </div>
  </div>

  <div>
    <TimelineSection />
  </div>
</div>

         </div>
      </div>
      </div>
    </div>
  
  )
}
