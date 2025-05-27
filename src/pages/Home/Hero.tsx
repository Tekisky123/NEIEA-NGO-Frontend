import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-neutral-900 bg-opacity-50 bg-blend-multiply pt-16" 
      style={{ 
        backgroundImage: `url(https://neiea.org/wp-content/uploads/slider/cache/600eb717c9bed23f99c25e070179f69c/slide-1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/40"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Communities Through Education
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            NEIEA is dedicated to providing quality education to underprivileged communities, fostering development, and creating opportunities for a better future.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/about" className="btn-primary">
              <span>Learn More</span>
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
            <Link to="/donate" className="btn-accent">
              <span>Donate Now</span>
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
            <Link to="/change" className="btn-outline bg-white/10 text-white border-white/20 hover:bg-white/20">
              <span>Volunteer</span>
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;