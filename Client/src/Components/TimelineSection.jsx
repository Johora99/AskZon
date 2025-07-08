import { Shield, Network, Users, Target, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: '01.',
    title: 'Transparency & Communication',
    icon: <Shield className="w-6 h-6 text-yellow-500" />,
    description:
      'We prioritize open communication and clear information sharing to build trust and ensure everyone feels included and informed.',
  },
  {
    id: '02.',
    title: 'Cutting-Edge Tools & Techniques',
    icon: <Network className="w-6 h-6 text-yellow-500" />,
    description:
      'Askzone integrates advanced tools like AI, automation, and modern frameworks to power intelligent, user-friendly solutions.',
  },
  {
    id: '03.',
    title: 'User-Centric Experience',
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    description:
      'Our platform is built with the user in mind—making it intuitive, accessible, and efficient for everyone.',
  },
  {
    id: '04.',
    title: 'Goal-Driven Development',
    icon: <Target className="w-6 h-6 text-yellow-500" />,
    description:
      'Every feature is designed with a clear purpose to ensure alignment with user needs and business outcomes.',
  },
  {
    id: '05.',
    title: 'Results That Scale',
    icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
    description:
      'From idea to impact, Askzone is engineered to deliver measurable results and grow with your needs.',
  },
];

const TimelineSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 min-h-screen">
      {steps.map((step, idx) => (
        <div
          key={step.id}
          className="relative flex flex-col items-center text-center w-full max-w-2xl"
        >
          {/* Step Number with Lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
            <div className="flex flex-col items-center">
              {idx !== 0 && (
                <div className="w-1 h-16 bg-orange-300" style={{ position: 'absolute', top: '-64px' }}></div>
              )}
              <div className="bg-white text-yellow-500 border-2 border-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.id}
              </div>

            </div>
          </div>

          {/* Card Content */}
          <div
            className={`w-full rounded-xl p-6 mt-6 transition-all duration-300 ${
              idx % 2 === 0
                ? 'bg-white border-2 border-yellow-400 shadow-lg'
                : 'bg-orange-50 border border-yellow-200 shadow-md'
            }`}
          >
            <div className="flex items-center gap-4 mb-4 justify-center">
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineSection;