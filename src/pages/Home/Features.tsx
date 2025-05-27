import React from 'react';
import { BookOpen, Users, School, Globe } from 'lucide-react';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary-500" />,
      title: 'Quality Education',
      description: 'Our curriculum is designed to provide comprehensive education that meets international standards while adapting to local needs.',
    },
    {
      icon: <Users className="w-10 h-10 text-primary-500" />,
      title: 'Experienced Educators',
      description: 'Our team consists of dedicated teachers with expertise in various subjects and a passion for educational empowerment.',
    },
    {
      icon: <School className="w-10 h-10 text-primary-500" />,
      title: 'Inclusive Learning',
      description: 'We ensure that our programs are accessible to all, regardless of socioeconomic background, gender, or ability.',
    },
    {
      icon: <Globe className="w-10 h-10 text-primary-500" />,
      title: 'Global Reach',
      description: 'With initiatives in India and the United States, we bridge educational gaps across diverse communities worldwide.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            At NEIEA, we are guided by these fundamental principles that drive our mission to empower communities through education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="bg-neutral-50 p-6 rounded-xl">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;