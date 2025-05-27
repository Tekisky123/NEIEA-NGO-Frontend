import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, School, Mail } from 'lucide-react';
import PageHeader from '../../components/UI/PageHeader';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Change: React.FC = () => {
  const opportunities = [
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Become a Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact in students' lives through teaching, mentoring, or administrative support.",
      requirements: [
        "Minimum commitment of 3 months",
        "At least 18 years of age",
        "Passionate about education",
        "Basic communication skills"
      ]
    },
    {
      icon: <School className="w-12 h-12 text-primary-500" />,
      title: "Start a Local Chapter",
      description: "Lead the change in your community by establishing a NEIEA chapter. We provide training, resources, and ongoing support.",
      requirements: [
        "Leadership experience",
        "Local community connections",
        "Dedication to education",
        "Project management skills"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-500" />,
      title: "Join as Educator",
      description: "Bring your teaching expertise to our programs and help shape the future of underprivileged students.",
      requirements: [
        "Teaching qualification/experience",
        "Subject matter expertise",
        "Commitment to inclusive education",
        "Team player mindset"
      ]
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
        title="Be The Change" 
        subtitle="Join us in our mission to transform lives through education"
        backgroundImage="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Make a Difference</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              There are many ways you can contribute to our mission of educational empowerment. Choose the path that best matches your skills and interests.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 0.1}
                className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">{opportunity.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{opportunity.title}</h3>
                <p className="text-neutral-600 mb-6">{opportunity.description}</p>
                <div>
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-neutral-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Join Our Team</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="label">Area of Interest</label>
                  <select id="interest" className="input" required>
                    <option value="">Select an option</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="chapter">Start a Chapter</option>
                    <option value="educator">Join as Educator</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="label">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input"
                    placeholder="Tell us about your background and why you'd like to join NEIEA..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="resume" className="label">Upload Resume (Optional)</label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    className="input"
                  />
                  <p className="text-sm text-neutral-500 mt-1">PDF, DOC, or DOCX files only</p>
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Change;