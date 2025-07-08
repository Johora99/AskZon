import React from 'react';

export default function Servicecard({ service }) {
  return (
    <div
      key={service.id}
      style={{ transform: `translateY(${service.updown}px)` }}
      className={`relative p-6 rounded-tl-3xl rounded-br-3xl bg-gradient-to-br from-yellow-900/90 to-yellow-800/70 backdrop-blur-lg shadow-lg group hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-500 w-80 overflow-hidden`}
    >
      {/* Animated yellow border */}
      <div 
        className="absolute inset-0 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 animate-border-flow opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
        style={{ zIndex: -1, clipPath: 'polygon(0 20%, 100% 0, 80% 100%, 0 80%)' }}
      />
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 bg-yellow-600/10 rounded-tl-3xl rounded-br-3xl transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" 
        style={{ zIndex: -2 }}
      />
      {/* Content container */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <img
            src={service.icon}
            alt={`${service.title} icon`}
            className="w-14 h-14 object-contain rounded-full border-2 border-yellow-900 group-hover:border-amber-400 p-1 transition-all duration-300 bg-white opacity-60"
          />
          <p className="text-yellow-300 font-bold text-xl group-hover:text-yellow-100 drop-shadow-[0_1px_3px_rgba(234,179,8,0.4)] transition-colors duration-300">
            {service.id}
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-3xl font-extrabold text-white group-hover:text-yellow-200 tracking-tight animate-text-reveal">
            {service.title}
          </h3>
          <p className="mt-3 text-base text-gray-300 group-hover:text-gray-100 font-medium leading-relaxed animate-text-reveal delay-100">
            {service.text}
          </p>
        </div>
      </div>
    </div>
  );
}

