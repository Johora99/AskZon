import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function TopNav() {
  const links = [
    {
      icon: <FaPhone />,
      item: '(415) 555-0198',
      link: 'tel:+14155550198'
    },
    {
      icon: <IoMdMail />,
      item: 'info.askzon@gmail.com',
      link: 'mailto:info.askzon@gmail.com'
    },
    {
      icon: <FaLocationDot />,
      item: 'Springfield, IL 62704',
      link: null
    }
  ];
  const socialLinks = [
    { icon: <FaFacebookF />, link: 'https://facebook.com' },
    { icon: <FaInstagram />, link: 'https://instagram.com' },
    { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
    { icon: <FaTwitter />, link: 'https://twitter.com' }
  ];
  
  return (
    <div className='w-full bg-yellow-600 text-white text-sm py-2'>
      <div className='container w-11/12 mx-auto flex flex-wrap justify-between items-center gap-2'>
        <div className='flex flex-wrap gap-4'>
          {links.map((link, index) => (
            <div key={index} className='flex items-center gap-1'>
              {link.link ? (
                <a href={link.link} className='flex items-center gap-1 hover:underline'>
                  {link.icon} {link.item}
                </a>
              ) : (
                <span className='flex items-center gap-1'>
                  {link.icon} {link.item}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
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
  );
}
