import React from 'react'
import logo from '../assets/icon.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    const socialLinks = [
      { icon: <FaFacebookF />, link: 'https://facebook.com' },
      { icon: <FaInstagram />, link: 'https://instagram.com' },
      { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
      { icon: <FaTwitter />, link: 'https://twitter.com' }
    ];
  return (
    <div>
      <footer className="px-4 divide-y dark:bg-yellow-600 dark:text-white">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
    <div className="flex items-center gap-2">
              <NavLink to="/">
                <img src={logo} alt="AskZone Logo" />
              </NavLink>
              <h3 className="text-3xl font-bold text-white">
                Ask
                <span className='text-yellow-300'>Zone</span>
              </h3>
            </div>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-white">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-white">Social media</div>
				<div className="flex justify-start space-x-3">
        {socialLinks.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 text-lg"
    >
      {item.icon}
    </a>
  ))}
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-white">© 2025 Company Ask <span className='text-yellow-300'>Zone</span> All rights reserved.</div>
</footer>
    </div>
  )
}
