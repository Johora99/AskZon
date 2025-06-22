import React from 'react'
import { motion } from 'framer-motion';
export default function Button({title}) {
    // Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};
  return (
    <div>
        <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md shadow-md text-lg  hover:shadow-lg transition-all duration-300 mt-10"
          >
        {title}
          </motion.button>
    </div>
  )
}
