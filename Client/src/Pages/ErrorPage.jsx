import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function ErrorPage() {
  const MotionLink = motion(Link);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center dark:bg-gray-50 ">
      <section className="flex items-center h-full p-16 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
<MotionLink
  to="/"
  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-white hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
>
Back to homepage
</MotionLink>
		</div>
	</div>
</section>
    </div>
  )
}
