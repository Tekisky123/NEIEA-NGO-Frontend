import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  categories: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  author,
  image,
  categories
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
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <p className="text-neutral-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center text-sm text-neutral-500 mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Link 
            to={`/blog/${id}`} 
            className="btn-outline"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;