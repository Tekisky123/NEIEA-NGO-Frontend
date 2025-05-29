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
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-200 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <div className="h-52 md:h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-neutral-800">
          {title}
        </h3>
        <p className="text-neutral-600 mb-4 line-clamp-4 text-sm">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            to={link}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
