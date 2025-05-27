import React from 'react';
import ProgramCard from '../../components/UI/ProgramCard';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Girls Education Program",
      description: "Empowering girls through quality education, mentorship, and skills development to break barriers and create opportunities.",
      image: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/programmes#girls-education"
    },
    {
      title: "Education for Slum Children",
      description: "Bringing education to underprivileged children in urban slums through mobile classrooms and learning centers.",
      image: "https://images.pexels.com/photos/1334544/pexels-photo-1334544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/programmes#slum-children"
    },
    {
      title: "Dropout Re-engagement",
      description: "Supporting school dropouts to re-enter the education system through bridge courses and personalized learning plans.",
      image: "https://images.pexels.com/photos/8422131/pexels-photo-8422131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/programmes#dropouts"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Programs</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Through these targeted initiatives, we address educational disparities and create pathways to success for underserved communities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
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

        <div className="text-center mt-12">
          <a href="/programmes" className="btn-primary">
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;