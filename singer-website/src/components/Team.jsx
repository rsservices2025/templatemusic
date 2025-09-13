// src/components/Team.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    image: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    name: "Rahul Sharma",
    role: "Lead Vocalist & Guitarist"
  },
  {
    image: `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    name: "Priya Singh",
    role: "Keyboardist & Backing Vocals"
  },
  {
    image: `https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    name: "Amit Kumar",
    role: "Drummer & Percussionist"
  },
  {
    image: `https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    name: "Sunita Reddy",
    role: "Bassist & Manager"
  }
];

const Team = () => {
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
    <div className="w-full py-20 px-4 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#2c3e50]"
        >
          Meet The Maestros
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600"
        >
          The talented artists who create magic on stage.
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={cardVariants}>
                <Card className="text-center overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="p-0">
                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="text-2xl font-bold text-[#2c3e50]">{member.name}</CardTitle>
                    <p className="text-[#f39c12] font-semibold">{member.role}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-4 pb-6">
                    <FaInstagram className="text-gray-500 hover:text-[#f39c12] cursor-pointer" size={20}/>
                    <FaTwitter className="text-gray-500 hover:text-[#f39c12] cursor-pointer" size={20}/>
                    <FaLinkedin className="text-gray-500 hover:text-[#f39c12] cursor-pointer" size={20}/>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;