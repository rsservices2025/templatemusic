// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion import kiya
import { Button } from '@/components/ui/button'; // shadcn/ui Button import kiya

const Hero = () => {
  // Pexels se li gayi background image
  const heroImage = 'https://images.pexels.com/photos/167439/pexels-photo-167439.jpeg';

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-[#ecf0f1] px-4">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-shadow-lg"
        >
          Sangeetkar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 text-xl md:text-2xl font-light"
        >
          Live Music for Unforgettable Moments
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <Button size="lg" className="bg-[#f39c12] text-[#2c3e50] hover:bg-[#f39c12]/90 text-lg font-bold px-8 py-6">
            Book Your Event
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;