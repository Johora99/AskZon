import React from 'react'

export default function Servicecard({service}) {
  return (
    <div
    key={service.id}
    style={{ transform: `translateY(${service.updown}px)` }}
    className={`border-[2px] border-gray-200 p-5 rounded-lg bg-white/10 backdrop-blur-2xl shadow-lg group hover:border-yellow-600 transition duration-500 transform`}
  >
    <div className='flex items-center justify-between'>
      <img src={service.icon} alt="" className='w-14' />
      <p className='text-yellow-700 font-medium text-2xl group-hover:text-white'>{service.id}</p>
    </div>
    <div className='mt-5'>
      <h3 className='text-3xl font-bold text-gray-800 group-hover:text-yellow-700'>{service.title}</h3>
      <p className='mt-5 text-lg text-yellow-8'>{service.text}</p>
    </div>
  </div>
  )
}
