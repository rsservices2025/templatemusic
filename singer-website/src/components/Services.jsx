// src/components/Services.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaRing, FaBriefcase, FaGlassCheers, FaMusic } from 'react-icons/fa';

const services = [
  {
    icon: <FaRing className="w-10 h-10 text-[#f39c12]" />,
    title: "Wedding Melodies",
    description: "Make your special day unforgettable with soulful music that touches every heart."
  },
  {
    icon: <FaBriefcase className="w-10 h-10 text-[#f39c12]" />,
    title: "Corporate Events",
    description: "Add a touch of class and elegance to your corporate gatherings and conferences."
  },
  {
    icon: <FaGlassCheers className="w-10 h-10 text-[#f39c12]" />,
    title: "Private Parties",
    description: "Bring life to your birthday parties, anniversaries, and private celebrations."
  },
  {
    icon: <FaMusic className="w-10 h-10 text-[#f39c12]" />,
    title: "Festive Nights",
    description: "Electrifying performances for Navratri, cultural festivals, and public events."
  }
];

const Services = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#2c3e50]"
        >
          Book Us For
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600"
        >
          Crafting the perfect musical atmosphere for every occasion.
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div variants={cardVariants}>
                <Card className="text-left shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl font-bold text-[#2c3e50]">{service.title}</CardTitle>
                    <CardDescription className="pt-2 text-gray-700">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;