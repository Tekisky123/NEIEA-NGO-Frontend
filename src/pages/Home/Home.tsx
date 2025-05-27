import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Stats from './Stats';
import Features from './Features';
import Programs from './Programs';
import Testimonials from './Testimonials';
import Cta from './Cta';
import BlogPreview from './BlogPreview';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Stats />
      <Features />
      <Programs />
      <Testimonials />
      <Cta />
      <BlogPreview />
    </motion.div>
  );
};

export default Home;