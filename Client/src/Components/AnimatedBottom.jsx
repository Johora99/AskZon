import React from 'react';

export default function AnimatedBottom() {
  return (
    <div className="w-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#fcb900" />
            <stop offset="95%" stopColor="#a16207" />
          </linearGradient>
        </defs>
        <path
          d="M 0,600 L 0,300 C 121.1,351.7 242.2,403.5 330,362 C 417.7,320.5 472.1,185.8 557,162 C 641.9,138.1 757.3,225.2 853,224 C 948.6,222.7 1024.4,133 1119,81 C 1213.5,28.9 1326.7,14.4 1440,0 L 1440,600 L 0,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.53"
          className="path-0"
        />
        <path
          d="M 0,600 L 0,500 C 74.4,466.4 148.9,432.8 247,429 C 345,425.1 466.6,451.1 573,428 C 679.3,404.8 770.4,332.4 860,310 C 949.5,287.5 1037.5,315 1134,305 C 1230.4,294.9 1335.2,247.4 1440,200 L 1440,600 L 0,600 Z"
          fill="url(#gradient)"
          fillOpacity="1"
          className="path-1"
        />
      </svg>
    </div>
  );
}
