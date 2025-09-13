// src/components/Counter.jsx

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaMusic, FaBuilding } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUsers className="w-12 h-12 text-[#f39c12]" />,
    end: 500,
    label: "Shows Performed"
  },
  {
    icon: <FaMusic className="w-12 h-12 text-[#f39c12]" />,
    end: 150,
    label: "Weddings Rocked"
  },
  {
    icon: <FaBuilding className="w-12 h-12 text-[#f39c12]" />,
    end: 75,
    label: "Corporate Gigs"
  }
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation sirf ek baar chalega
    threshold: 0.5,   // Jab 50% section dikhega tab start hoga
  });

  return (
    <div ref={ref} className="w-full py-20 bg-[#2c3e50]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white px-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {stat.icon}
            <div className="mt-4 text-5xl font-bold">
              {inView ? (
                <CountUp end={stat.end} duration={2.5} separator="," />
              ) : (
                '0'
              )}
              +
            </div>
            <p className="mt-2 text-lg text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;