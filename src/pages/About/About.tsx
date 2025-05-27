import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/UI/PageHeader';
import Mission from './Mission';
import Timeline from './Timeline';
import Leadership from './Leadership';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="About NEIEA" 
        subtitle="Learn about our history, mission, and the dedicated team behind our educational initiatives."
        backgroundImage="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Mission />
      <Timeline />
      <Leadership />
    </motion.div>
  );
};

export default About;