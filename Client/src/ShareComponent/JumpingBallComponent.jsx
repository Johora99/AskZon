import React from 'react';

const JumpingBallComponent = ({title}) => {
  return (
    <div className="flex items-center ">
      <div className="animate-jump mr-2">
      <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-800 rounded-full"></div>
      </div>
      <p className="text-xl font-medium text-yellow-800 text-center mb-2">
      {title}
      </p>
      <style>
        {`
          @keyframes jump {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .animate-jump {
            animation: jump 0.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default JumpingBallComponent;