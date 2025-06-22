import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Our Mission.',
    text: 'AskZone empowers people to ask freely and answer meaningfully. We believe every question opens the door to discovery and every answer fuels growth.',
  },
  {
    title: 'Our Vision.',
    text: 'To become the most trusted global platform where curious minds connect, learn, and collaborate shaping a smarter future together and grow together',
  },
];

export default function AboutUsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); 

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="rounded-lg max-w-xl overflow-hidden p-14">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">{slides[current].title}</h2>
          <p className="text-base leading-relaxed mb-6 text-yellow-950 ">{slides[current].text}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded hover:bg-yellow-400 transition"
          aria-label="Previous"
        >
          <ArrowLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded hover:bg-yellow-400 transition"
          aria-label="Next"
        >
          <ArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}
