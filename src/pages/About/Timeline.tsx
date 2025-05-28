import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      year: 2005,
      title: "Foundation of NEIEA",
      description: "NEIEA was established with a mission to provide quality education to underprivileged communities."
    },
    {
      year: 2008,
      title: "First Education Center",
      description: "Opened our first education center in Delhi, serving 50 students from nearby slum areas."
    },
    {
      year: 2010,
      title: "Girls Education Initiative",
      description: "Launched a focused program to support girls' education and reduce dropout rates."
    },
    {
      year: 2013,
      title: "Digital Literacy Program",
      description: "Introduced computer education and digital literacy courses for students and adults."
    },
    {
      year: 2015,
      title: "Expansion to 5 States",
      description: "Expanded operations to Maharashtra, Karnataka, Tamil Nadu, and West Bengal."
    },
    {
      year: 2018,
      title: "Launch of NEI USA",
      description: "Established our presence in the United States to support Native American and immigrant education."
    },
    {
      year: 2020,
      title: "Remote Learning Response",
      description: "Developed comprehensive remote learning solutions during the global pandemic."
    },
    {
      year: 2022,
      title: "Reaching 15,000 Students",
      description: "Achieved the milestone of supporting over 15,000 students across all our programs."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Tracing the evolution of NEIEA from its founding to present day.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 z-10"></div>
                
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className={`bg-neutral-50 p-6 rounded-xl shadow-sm border-l-4 ${index % 2 === 0 ? 'border-primary-500' : 'border-secondary-500'}`}>
                    <div className="mb-2 inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full font-semibold">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-neutral-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;