// src/components/Blog.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Evolution of Indian Wedding Music",
    excerpt: "From traditional shehnai to modern DJ beats, discover how wedding music has transformed over the decades...",
    date: "September 10, 2025"
  },
  {
    image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "5 Tips for Choosing the Right Live Band",
    excerpt: "Choosing a live band can be tricky. Here are 5 essential tips to ensure your event's music is a hit...",
    date: "August 28, 2025"
  },
  {
    image: "https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Magic of Live Music in Corporate Events",
    excerpt: "Learn how live music can elevate your corporate event from a simple gathering to a memorable experience...",
    date: "August 15, 2025"
  }
];

const Blog = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
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
          Musical Musings
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600"
        >
          A few thoughts and stories from our musical journey.
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={cardVariants}>
                <Card className="text-left overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <CardHeader className="p-0">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
                    <CardTitle className="text-xl font-bold text-[#2c3e50]">{post.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                    <p className="text-gray-600 mt-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-[#f39c12] p-0">Read More →</Button>
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

export default Blog;