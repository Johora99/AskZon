import React from 'react';
import { motion } from 'framer-motion';

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Item animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Search bar animation variants
const searchVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Button container animation variants
const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Banner() {
  return (
    <section>
      <motion.div
        className="container w-11/12 mx-auto flex flex-col items-center px-4 py-20 text-center md:py-36 md:px-10 lg:px-20 xl:max-w-5xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          variants={itemVariants}
          
        >
          Got a Problem? <br />
          <span className="text-yellow-300">AskZone Has the Answer.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 mb-6 text-lg md:text-xl max-w-2xl text-white/90"
          variants={itemVariants}
        >
          Connect with a vibrant community, ask any questions, share insights, and find reliable answers quickly and easily.
        </motion.p>

        {/* Search Bar */}
        <motion.div className="w-full max-w-xl mb-10" variants={searchVariants}>
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full px-6 py-3 rounded-full border border-yellow-300 text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white/10 backdrop-blur-sm"
          />
        </motion.div>

        {/* Buttons with Animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Ask Question Button */}
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-white hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
          >
            Ask a Question
          </motion.button>

          {/* Learn More Button */}
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-semibold rounded-full border border-yellow-300 text-white hover:bg-yellow-300 hover:text-white hover:shadow-md transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}