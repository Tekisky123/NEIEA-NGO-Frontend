import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/UI/PageHeader';
import AnimatedSection from '../../components/UI/AnimatedSection';
import { Users, GraduationCap, BookOpen } from 'lucide-react';

const USA: React.FC = () => {
  const initiatives = [
    {
      title: "Native American Youth Empowerment",
      description: "Supporting Native American communities through culturally sensitive education programs and resources.",
      image: "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Immigrant Youth Education",
      description: "Providing educational support and language assistance to immigrant youth for better integration.",
      image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Incarcerated Youth Programs",
      description: "Offering educational opportunities and skill development for incarcerated youth.",
      image: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      number: "5,000+",
      label: "Students Supported"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
      number: "85%",
      label: "Program Completion Rate"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      number: "25+",
      label: "Partner Organizations"
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
        title="NEI USA" 
        subtitle="Expanding our mission of educational empowerment across the United States"
        backgroundImage="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our US Initiatives</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We're committed to providing quality education and support to underserved communities across the United States.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                  <p className="text-neutral-600">{initiative.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="bg-white p-8 rounded-xl text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <p className="text-neutral-600">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
              <p className="text-lg text-neutral-600 mb-8">
                We're always looking to collaborate with organizations that share our vision of educational empowerment. Join us in making a difference.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="organization" className="label">Organization Name</label>
                  <input type="text" id="organization" className="input" required />
                </div>
                <div>
                  <label htmlFor="contact" className="label">Contact Person</label>
                  <input type="text" id="contact" className="input" required />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email Address</label>
                  <input type="email" id="email" className="input" required />
                </div>
                <div>
                  <label htmlFor="message" className="label">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input"
                    placeholder="Tell us about your organization and how we can collaborate..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">Submit Inquiry</button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative h-[600px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent z-10"></div>
                <img
                  src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-white text-2xl font-bold mb-2">Join Our Mission</h3>
                  <p className="text-white/90">
                    Together, we can create more opportunities for education and empowerment.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default USA;