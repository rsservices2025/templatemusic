// src/components/Footer.jsx

import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const bgColor = 'bg-[#2c3e50]'; // Deep Indigo from our palette
  const textColor = 'text-[#ecf0f1]'; // Off-White from our palette
  const accentColor = 'text-[#f39c12]'; // Gold from our palette

  const quickLinks = ["Home", "Services", "Gallery", "Our Team", "Blog", "Contact"];

  return (
    <div className={`${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className={`text-2xl font-bold ${accentColor}`}>Sangeetkar</h3>
            <p className="mt-2 text-gray-400">
              Providing soulful live music for weddings, corporate events, and private parties.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="hover:text-[#f39c12]"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-[#f39c12]"><FaYoutube size={24} /></a>
              <a href="#" className="hover:text-[#f39c12]"><FaFacebook size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Email: booking@sangeetkar.com</li>
              <li>Phone: +91 12345 67890</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>

        </div>
        
        {/* --- Copyright & Your Credit with LOGO --- */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sangeetkar. All Rights Reserved.</p>
          <div className="mt-2 flex justify-center items-center gap-2">
            <p>Website Designed & Developed by</p>
            <a 
              href="https://www.innovateweb.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 font-semibold text-white hover:text-[#f39c12] transition-colors"
            >
              <img 
                src="https://ik.imagekit.io/vquvxmrff/favicon%20(2).png?updatedAt=1756498798248" 
                alt="InnovateWeb Logo" 
                className="w-5 h-5" // Logo size
              />
              InnovateWeb.online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;