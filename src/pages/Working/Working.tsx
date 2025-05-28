import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/UI/PageHeader';
import AnimatedSection from '../../components/UI/AnimatedSection';
import { BookOpen, Users, School, GraduationCap } from 'lucide-react';

const Working: React.FC = () => {
  const methodologies = [
    {
      icon: <BookOpen className="w-12 h-12 text-primary-500" />,
      title: "Blended Learning",
      description: "Combining traditional classroom teaching with digital tools and online resources to create an engaging and effective learning environment.",
      points: [
        "Interactive digital content",
        "Personalized learning paths",
        "Regular assessments",
        "Hands-on activities"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Discourse Oriented Pedagogy (DOP)",
      description: "Encouraging active participation and critical thinking through structured discussions and collaborative learning.",
      points: [
        "Student-led discussions",
        "Critical analysis",
        "Peer learning",
        "Reflective practice"
      ]
    },
    {
      icon: <School className="w-12 h-12 text-primary-500" />,
      title: "Teacher Training",
      description: "Comprehensive professional development programs to enhance teaching skills and implement modern educational practices.",
      points: [
        "Modern teaching methods",
        "Technology integration",
        "Classroom management",
        "Student engagement"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary-500" />,
      title: "Continuous Assessment",
      description: "Regular evaluation of student progress and teaching effectiveness to ensure optimal learning outcomes.",
      points: [
        "Regular feedback",
        "Progress tracking",
        "Data-driven decisions",
        "Adaptive teaching"
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
        title="NEIEA Working" 
        subtitle="Discover our innovative teaching methodologies and educational approaches"
        backgroundImage="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Educational Approach</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We employ research-backed methodologies and innovative teaching approaches to ensure effective learning outcomes for all our students.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 0.1}
                className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">{method.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{method.title}</h3>
                <p className="text-neutral-600 mb-6">{method.description}</p>
                <ul className="space-y-3">
                  {method.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Through our innovative teaching methodologies and dedicated approach, we've achieved significant results in educational outcomes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
              <p className="text-neutral-600">Improvement in Student Performance</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2,500+</div>
              <p className="text-neutral-600">Teachers Trained</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">90%</div>
              <p className="text-neutral-600">Student Retention Rate</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Working;