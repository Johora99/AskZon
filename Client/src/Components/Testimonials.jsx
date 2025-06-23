import React, { useState } from 'react'
import bgImg from '../assets/testimonial.jpg'
import useTestimonial from '../Hooks/useTestimonial'
import BgImage from '../ShareComponent/BgImage'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
export default function Testimonials() {
  const { testimonials, isLoading } = useTestimonial()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (isLoading || testimonials.length === 0) return <p className='text-center p-10'>Loading...</p>

  return (
    <div className="w-full my-20 relative py-20">
        <BgImage bgImg={bgImg}>
      <div className="container w-11/12 mx-auto relative">
          <div className="relative z-50 p-10 text-white">
            <h3 className="text-4xl md:text-6xl font-medium tracking-widest mb-10">Testimonials.</h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl text-white"
                  >
                    <p className="text-white text-lg leading-8 tracking-wide mb-4 min-h-40">{testimonials[current].message}</p>
                    <div className='w-full h-[1px] bg-yellow-600 opacity-50 my-10'></div>
                    <div className='flex items-center gap-3'>
                    <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-yellow-500 shadow-xl"
                />
                <div>
                  <div className='flex items-center gap-5'>
                  <p className='tracking-wider'>{testimonials[current].name}</p>
                  <div>
                  <Rating
                  style={{ maxWidth: 80}}
                   value={testimonials[current].rating}
                   readOnly
                      />
                  </div>

                  </div>
                  <p className='text-sm text-yellow-500'>{testimonials[current].title}</p>
                </div>
                  
                </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={prevSlide}
                    className="p-2 border-[1px] border-white rounded-full text-white hover:bg-yellow-300 transition"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 border-[1px] border-white rounded-full text-white hover:bg-yellow-300 transition"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center justify-center">
  <div className="relative text-center bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-10 shadow-xl hover:shadow-3xl transition-transform duration-500 ease-out transform hover:-translate-y-2 border border-yellow-200 overflow-hidden">
    <div className="absolute inset-0 bg-yellow-300 opacity-10 blur-xl"></div>
    <h2 className="text-6xl font-black text-yellow-600 mb-3 animate-pulse">100%</h2>
    <p className="text-xl font-semibold text-yellow-700 tracking-tight uppercase">Satisfied Clients</p>
    <div className="mt-6 h-2 w-20 bg-yellow-400 mx-auto rounded-full animate-bounce"></div>
  </div>
</div>
            </div>
          </div>

      </div>
        </BgImage>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-yellow-900 z-0"></div>
        <div className="absolute -top-28 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-200 via-yellow-300 to-purple-300 rounded-full opacity-25 blur-4xl animate-slow-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300 via-yellow-200 to-yellow-300 rounded-full opacity-20 blur-4xl animate-slow-pulse" />
        {/* <div className="absolute -top-100 right-20 w-96 h-96 bg-gradient-to-br from-purple-900 via-yellow-800 to-yellow-900 opacity-30 blur-[120px] rounded-full animate-pulse pointer-events-none z-50" /> */}

    </div>
  )
}
