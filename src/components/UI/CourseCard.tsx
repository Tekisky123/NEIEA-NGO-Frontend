import React from 'react';
import { Clock, Users, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  id: string;
  title: string;
  duration: string;
  students: number;
  level: string;
  image: string;
  onEnroll: (id: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  duration,
  students,
  level,
  image,
  onEnroll
}) => {
  return (
    <motion.div 
      className="card overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-primary-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1 text-primary-500" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1 text-primary-500" />
            <span>{level}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <button 
            onClick={() => onEnroll(id)}
            className="btn-primary w-full"
          >
            <span>Enroll Now</span>
            <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;