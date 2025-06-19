import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/icon.png';
import { NavLink, useLocation } from 'react-router-dom';
import user from '../assets/user.png';
import BgImage from '../ShareComponent/BgImage';
import bgImg from '../assets/banner.webp'
// Letter animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 },
  },
};

// Text container animation variants
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each letter
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Letters fade out in reverse order
    },
  },
};

export default function Navbar() {
  const location = useLocation();
  const navLinks = [
    { link: '/', title: 'Home' },
    { link: '/All Questions', title: 'All Questions' },
    { link: '/login', title: 'LogIn' },
  ];

  const texts = ['Zone', 'Question', '&Solve'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Cycle through texts every 3 seconds to allow typing animation to complete
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='relative'>
      <BgImage bgImg={bgImg}>
      
      <div className="w-full py-5 relative z-50">
        <nav className="container w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <NavLink to="/">
                <img src={logo} alt="AskZone Logo" />
              </NavLink>
              <h3 className="text-3xl font-bold text-white">
                Ask
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    className={`
                    text-yellow-300 inline-block`}
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {texts[currentTextIndex].split('').map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        variants={letterVariants}
                        style={{ display: 'inline-block' }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </h3>
            </div>
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.link}
                  className="text-white text-xl"
                >
                  {link.title}
                </NavLink>
              ))}
              <NavLink>
                <img src={user} alt="User Profile" />
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      </BgImage>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-yellow-900  opacity-60 z-0"></div>
      <div className="w-full h-[1px] bg-white opacity-20"></div>
    </div>
  );
}