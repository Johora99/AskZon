import React from 'react';
import { FaSignInAlt, FaPenFancy, FaLightbulb } from 'react-icons/fa';
import Button from '../ShareComponent/Button';
import JumpingBallComponent from '../ShareComponent/JumpingBallComponent';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Create Your Free Account',
      icon: <FaSignInAlt className="text-yellow-600 text-5xl mb-4" />,
      description:
        'Start by joining our growing community of learners and thinkers. Signing up is quick and easy, giving you access to all features including asking, answering, bookmarking, and following questions.',
    },
    {
      title: 'Ask Meaningful Questions',
      icon: <FaPenFancy className="text-yellow-600 text-5xl mb-4" />,
      description:
        'Struggling with a concept? Curious about a topic? AskZone lets you craft detailed questions with rich formatting and topic tags, helping the right people find and respond to you quickly.',
    },
    {
      title: 'Get Thoughtful Answers & Engage',
      icon: <FaLightbulb className="text-yellow-600 text-5xl mb-4" />,
      description:
        'Our community provides insightful answers from a range of backgrounds. Engage in discussions, give feedback, and even reward contributors with thanks and upvotes to keep the learning loop strong.',
    },
  ];

  return (
    <section className="relative overflow-hidden">
    
      <div className='container w-11/12 mx-auto'>
        {/* Clip Path Background */}
        <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-white  to-yellow-100 clip-path-custom"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className='flex items-center justify-center'>
      <JumpingBallComponent title={'how it work'}></JumpingBallComponent>
      </div>
  
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-4 text-gray-800">
          How <span className='text-yellow-400'>AskZone</span> Works
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12 tracking-widest">
          AskZone empowers you to explore ideas, solve problems, and expand your knowledge. Here's how you can get started in just a few steps.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Join AskZone — where every question finds its voice.
          </h3>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            Whether you're curious, confused, or confident — this is the place to connect and contribute. AskZone thrives on thoughtful curiosity and helpful answers.
          </p>
        <Button title={'Ask Your First Question'}></Button>
        </div>
      </div>

      {/* Custom clip-path using Tailwind plugin or extra CSS */}
      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
        }
      `}</style>
</div>
    </section>
  );
}
