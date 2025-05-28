import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Mission: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="mb-10">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-700 text-lg leading-relaxed">
                To empower underprivileged communities through quality education, innovative teaching methodologies, and sustainable development initiatives, enabling individuals to realize their potential and contribute to society.
              </p>
            </div>

            <div className="mb-10">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100">
                <Eye className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-neutral-700 text-lg leading-relaxed">
                A world where every individual, regardless of socioeconomic background, has access to quality education and the opportunity to develop the skills, knowledge, and confidence necessary for personal and community development.
              </p>
            </div>

            <div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-neutral-700 text-lg space-y-3">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                  <span><strong>Inclusivity:</strong> Embracing diversity and ensuring all individuals have equal access to educational opportunities.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                  <span><strong>Innovation:</strong> Continually improving our teaching methodologies and approaches to meet evolving educational needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                  <span><strong>Integrity:</strong> Maintaining the highest standards of honesty, transparency, and ethical conduct in all our operations.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                  <span><strong>Impact:</strong> Focusing on measurable, sustainable outcomes that create lasting positive change in communities.</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div 
              className="relative h-[600px] rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent z-10"></div>
              <img 
                src="https://images.pexels.com/photos/8363278/pexels-photo-8363278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students in classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-white text-2xl font-bold mb-2">Empowering Through Education</h3>
                <p className="text-white/90">
                  Since 2005, we've been dedicated to creating educational opportunities that transform lives and communities.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Mission;