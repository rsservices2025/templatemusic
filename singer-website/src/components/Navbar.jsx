// src/components/Navbar.jsx

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll'; // <-- REACT-SCROLL IMPORT KIYA

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const bgColor = 'bg-[#2c3e50]';
  const textColor = 'text-[#ecf0f1]';
  const accentColor = 'text-[#f39c12]';
  const accentHoverColor = 'hover:text-[#f39c12]';

  // Links ko ID ke saath map karne ke liye object banaya
  const navLinks = [
    { to: "home", text: "Home" },
    { to: "services", text: "Services" },
    // Gallery ka section nahi hai, isliye comment out kar diya
    // { to: "gallery", text: "Gallery" }, 
    { to: "team", text: "Our Team" },
    { to: "blog", text: "Blog" },
    { to: "contact", text: "Contact" },
  ];

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${bgColor} ${textColor} z-50 shadow-lg`}>
      <div>
        <h1 className={`text-3xl font-bold ${accentColor} cursor-pointer`}>Sangeetkar</h1>
      </div>

      {/* --- Desktop Menu --- */}
      <ul className='hidden md:flex items-center'>
        {navLinks.map(link => (
          <li key={link.to} className={`px-4 cursor-pointer text-lg font-medium ${accentHoverColor} transition-colors duration-300`}>
            <Link to={link.to} smooth={true} duration={500} spy={true} offset={-80}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className='hidden md:flex'>
         <Button variant="outline" className="border-[#f39c12] text-[#f39c12] hover:bg-[#f39c12] hover:text-white">
            Book Now
         </Button>
      </div>

      {/* --- Hamburger Icon --- */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* --- Mobile Menu --- */}
      <ul className={!nav ? 'hidden' : `absolute top-0 left-0 w-full h-screen ${bgColor} flex flex-col justify-center items-center`}>
        {navLinks.map(link => (
          <li key={link.to} className={`py-6 text-4xl cursor-pointer ${accentHoverColor}`}>
            <Link onClick={handleClick} to={link.to} smooth={true} duration={500} spy={true} offset={-80}>
              {link.text}
            </Link>
          </li>
        ))}
        <Button variant="outline" size="lg" className="border-[#f39c12] text-[#f39c12] hover:bg-[#f39c12] hover:text-white text-2xl h-12 px-8 mt-4">
            Book Now
        </Button>
      </ul>
    </div>
  );
};

export default Navbar;