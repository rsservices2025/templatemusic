// src/components/Contact.jsx

import React, { useState } from 'react'; // <-- YEH LINE AB CORRECT HAI
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#2c3e50]"
        >
          Let's Make Music Happen
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600"
        >
          Ready to book us for your next event? Fill out the form below.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" required className="bg-gray-50"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required className="bg-gray-50"/>
                </div>
              </div>
               <div className="space-y-2">
                  <Label htmlFor="event-type" className="text-gray-700">Type of Event</Label>
                  <Input id="event-type" placeholder="e.g., Wedding, Corporate, etc." required className="bg-gray-50"/>
                </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">Your Message</Label>
                <Textarea id="message" placeholder="Tell us more about your event" required className="bg-gray-50"/>
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-[#f39c12] text-[#2c3e50] hover:bg-[#f39c12]/90 font-bold px-10">
                  Send Inquiry
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
              <p className="mt-2 text-green-700">
                Your inquiry has been received. Our team will get back to you within 24 hours.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;