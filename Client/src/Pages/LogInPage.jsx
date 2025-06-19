import React from 'react';
import bgImg from '../assets/loginbg.png';
import BgImage from '../ShareComponent/BgImage';

export default function LogInPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="container w-11/12 mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
          
          {/* Left: Login Form */}
          <div className="w-full max-w-md p-6 my-10 mx-auto">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center dark:text-gray-600">
              Don’t have an account?{' '}
              <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-yellow-500">
                Sign up here
              </a>
            </p>

            {/* Google Button */}
            <div className="my-6 space-y-4">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-yellow-400 focus:ring-yellow-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-600" />
              <p className="px-3 dark:text-gray-600">OR</p>
              <hr className="w-full dark:text-gray-600" />
            </div>

            {/* Login Form */}
            <form noValidate="" action="" className="space-y-8">
              <div className="space-y-4">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="demo@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-yellow-400 dark:bg-gray-50 dark:text-gray-800 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline dark:text-gray-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-yellow-400 dark:bg-gray-50 dark:text-gray-800 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-400 text-white hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 dark:text-gray-50"
              >
                Sign in
              </button>
            </form>
          </div>

        {/* Right: Background Section */}
<div className="w-full hidden md:block relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
  <svg
    className="absolute left-0 top-0 h-full w-full"
    viewBox="0 0 500 500"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,0 C100,150 100,350 0,500 L0,0 Z"
      fill="white"
    />
  </svg>
</div>

        </div>
      </div>
    </div>
  );
}
