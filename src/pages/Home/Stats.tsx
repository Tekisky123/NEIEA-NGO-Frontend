import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, School, Heart } from 'lucide-react';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-primary-500" />,
      count: '15,000+',
      label: 'Students Supported',
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-primary-500" />,
      count: '500+',
      label: 'Courses Conducted',
    },
    {
      icon: <School className="w-10 h-10 text-primary-500" />,
      count: '50+',
      label: 'Schools Partnered',
    },
    {
      icon: <Heart className="w-10 h-10 text-primary-500" />,
      count: '1,200+',
      label: 'Volunteers',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-2">
                {stat.count}
              </h3>
              <p className="text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Stats;