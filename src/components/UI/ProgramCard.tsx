import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  description, 
  image, 
  link,
  delay = 0
}) => {
  return (
    <motion.div 
      className="card group h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          Learn More
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramCard;