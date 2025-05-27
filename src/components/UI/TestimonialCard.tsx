import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image
}) => {
  return (
    <motion.div 
      className="card p-6 h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-neutral-600 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="mb-4 relative">
        <Quote className="w-10 h-10 text-primary-100 absolute -top-2 -left-2 -z-10" />
        <p className="text-neutral-700 relative z-10 italic">"{content}"</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;