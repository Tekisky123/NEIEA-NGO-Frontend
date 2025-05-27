import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/UI/PageHeader';
import ProgramCard from '../../components/UI/ProgramCard';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Programmes: React.FC = () => {
  const programmes = [
    {
      title: "Girls Education Program",
      description: "Empowering girls through quality education, mentorship, and skills development to break barriers and create opportunities.",
      image: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/programmes#girls-education"
    },
    {
      title: "Slum Children Education",
      description: "Bringing education to underprivileged children in urban slums through mobile classrooms and learning centers.",
      image: "https://images.pexels.com/photos/1334544/pexels-photo-1334544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/programmes#slum-children"
    },
    {
      title: "Dropout Re-engagement",
      description: "Supporting school dropouts to re-enter the education system through bridge courses and personalized learning plans.",
      image: "https://images.pexels.com/photos/8422131/pexels-photo-8422131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/programmes#dropouts"
    },
    {
      title: "School Support Initiative",
      description: "Partnering with government and private schools to enhance educational quality and infrastructure.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/programmes#school-support"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Our Programmes" 
        subtitle="Discover our comprehensive range of educational initiatives designed to create lasting impact"
        backgroundImage="https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Programmes</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our programmes are designed to address specific educational needs and create sustainable impact in communities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                image={program.image}
                link={program.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Through our programmes, we've created meaningful change in communities across India and the United States.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <p className="text-neutral-600">Students Impacted</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <p className="text-neutral-600">Communities Served</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-neutral-600">Program Success Rate</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Programmes;