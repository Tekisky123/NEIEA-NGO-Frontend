import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  Users,
  GraduationCap,
  School,
  BookOpenCheck,
  Clock,
  MapPin,
  UserRound,
} from 'lucide-react';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 5,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <UserRound className="w-10 h-10 text-primary-500" />,
      count: 55,
      suffix: '%',
      label: 'of our learners are Girls & Women',
    },
    {
      icon: <BookOpenCheck className="w-10 h-10 text-primary-500" />,
      count: 3500,
      suffix: '+',
      label: 'Learners completed courses',
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-primary-500" />,
      count: 1500,
      suffix: '+',
      label: 'Teachers trained by NEIEA',
    },
    {
      icon: <MapPin className="w-10 h-10 text-primary-500" />,
      count: 250,
      suffix: '+',
      label: 'Towns & Cities reached in India',
    },
    {
      icon: <Clock className="w-10 h-10 text-primary-500" />,
      count: 53,
      suffix: '+',
      label: 'Classes per day from 6 AM to 10 PM',
    },
    {
      icon: <Users className="w-10 h-10 text-primary-500" />,
      count: 14300,
      suffix: '+',
      label: 'Students registered with NEIEA',
    },
    {
      icon: <School className="w-10 h-10 text-primary-500" />,
      count: 65,
      suffix: '+',
      label: 'Educational Institutions connected',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-primary-600 mb-12">
          We connect children to a bright future!
        </h2>

        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center border-2 border-transparent
                         transition-all duration-300 ease-in-out cursor-default
                         hover:-translate-y-2 hover:shadow-lg hover:border-primary-500"
              whileHover={{}}
            >
              <div className="flex justify-center mb-5">{stat.icon}</div>
              <h3 className="text-4xl font-extrabold text-neutral-900 mb-3">
                <Counter value={stat.count} />
                <span className="text-primary-500">{stat.suffix}</span>
              </h3>
              <p className="text-neutral-600 text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Stats;
