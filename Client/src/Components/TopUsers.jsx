import React from 'react';
import { FaGem, FaCrown, FaMedal, FaStar } from 'react-icons/fa';

const topUsers = [
  {
    id: 1,
    name: 'Ayesha Rahman',
    badge: 'Diamond',
    points: 1800,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Tariq Hossain',
    badge: 'Gold',
    points: 1400,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Nadia Karim',
    badge: 'Silver',
    points: 1100,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Sofia Ahmed',
    badge: 'Bronze',
    points: 850,
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

const getBadgeStyle = (badge) => {
  switch (badge) {
    case 'Diamond':
      return 'bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-700 text-white shadow-2xl';
    case 'Gold':
      return 'bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-500 text-white shadow-xl';
    case 'Silver':
      return 'bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 text-gray-900 shadow-xl';
    case 'Bronze':
      return 'bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 text-white shadow-xl';
    default:
      return 'bg-gray-200 text-gray-900';
  }
};

const getBadgeIcon = (badge) => {
  switch (badge) {
    case 'Diamond':
      return <FaGem className="text-3xl text-yellow-500 drop-shadow-xl animate-glow" />;
    case 'Gold':
      return <FaCrown className="text-3xl text-yellow-500 drop-shadow-xl" />;
    case 'Silver':
      return <FaMedal className="text-3xl text-yellow-500 drop-shadow-xl" />;
    case 'Bronze':
      return <FaStar className="text-3xl text-yellow-500 drop-shadow-xl" />;
    default:
      return null;
  }
};

export default function TopUsers() {
  return (
    <section
      className="relative z-10 my-40 px-6 md:px-28 py-24 bg-fixed bg-cover bg-center overflow-hidden"
    >
      {/* Header with Dynamic Gradient */}
  
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-30">
      Top <span className='text-yellow-400'>Contributors</span> 
        </h2>
      {/* Grid Layout with 3D Tilt */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {topUsers.map((user, index) => (
          <div
            key={user.id}
            className="relative group p-8 rounded-3xl bg-white/85 backdrop-blur-2xl border border-transparent hover:border-yellow-400 shadow-2xl hover:shadow-yellow-600/60 transition-all duration-500 transform hover:-translate-y-5 tilt-card"
            style={{
              animation: `float-${index} 4.5s ease-in-out infinite`,
              animationDelay: `${index * 0.4}s`,
            }}
          >
            {/* Ranking Crown for Top User */}
            {index === 0 && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <FaCrown className="text-4xl text-yellow-400 animate-pulse drop-shadow-lg" />
              </div>
            )}

            {/* Badge Ribbon with 3D Effect */}
            <div
              className={`absolute -top-6 right-6 px-8 py-2 text-base font-extrabold rounded-full transform rotate-8 shadow-lg ${getBadgeStyle(
                user.badge
              )} transition-transform duration-500 group-hover:scale-115 group-hover:-rotate-8`}
            >
              {user.badge}
            </div>

            {/* User Card Content */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 group-hover:opacity-70 blur-lg transition-opacity duration-500" />
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="relative w-36 h-36 rounded-full border-4 border-transparent group-hover:border-yellow-300 shadow-2xl transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${
                      user.badge === 'Diamond'
                        ? '#22d3ee, #a78bfa'
                        : user.badge === 'Gold'
                        ? '#fef08a, #f59e0b'
                        : user.badge === 'Silver'
                        ? '#d1d5db, #9ca3af'
                        : '#f59e0b, #ef4444'
                    })`,
                  }}
                />
                <div className="absolute -bottom-5 right-4 transform group-hover:scale-130 transition-transform duration-500">
                  {getBadgeIcon(user.badge)}
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-yellow-500 transition-colors duration-500">
                {user.name}
              </h3>
              <p className="text-lg text-gray-600">
                Points: <span className="font-extrabold text-gray-900">{user.points.toLocaleString()}</span>
              </p>
            </div>

            {/* Spark Effect on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-spark"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -top-28 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-200 via-yellow-300 to-purple-300 rounded-full opacity-25 blur-4xl animate-slow-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300 via-yellow-200 to-yellow-300 rounded-full opacity-20 blur-4xl animate-slow-pulse" />

      {/* Enhanced Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-50 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${1.5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Custom Animations and Tilt Effect */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-1deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-1.5deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.5); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.95); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.6)); }
          50% { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spark {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1.2) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
          100% { opacity: 0; transform: scale(0) translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
        }
        .tilt-card {
          transition: transform 0.6s ease;
        }
        .tilt-card:hover {
          transform: perspective(1000px) rotateX(3deg) rotateY(3deg);
        }
      `}</style>
    </section>
  );
}