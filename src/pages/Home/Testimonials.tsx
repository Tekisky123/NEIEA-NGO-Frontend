import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../../components/UI/TestimonialCard';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Palak",
      role: "Patiala, Punjab",
      content:
        "I want to share my experience with NEIEA, an online platform offering 100% free courses in subjects like English, Maths, and Science. I completed the foundational English course and truly enjoyed the classes. My mother and younger brother were so impressed by the teaching that they joined as well. Now, I’m pursuing the proficiency-level English course, which is also free. The teachers are cooperative, and NEIEA even provides certificates for their courses. I highly recommend NEIEA to everyone—it’s a great opportunity for learning!",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Malik Khan",
      role: "Karnataka",
      content:
        "I took an online course in NEIEA which is regarding spoken English and I was blown away by how much I learned. The instructor was engaging and knowledgeable, and the course material was presented in a clear and concise way. I loved the interactive activities that helped me solidify my understanding of the material. Overall, I would highly recommend this course to anyone looking to expand their communication skills.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Priya Sharma",
      role: "Student, Girls Education Program",
      content: "The NEIEA program changed my life. I was about to drop out of school, but their support helped me continue my education. Now I'm preparing for college.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Raj Kumar",
      role: "Parent",
      content: "My son struggled in school until he joined NEIEA's after-school program. The teachers are caring and passionate. His grades have improved significantly.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Aisha Khan",
      role: "Volunteer Teacher",
      content: "Volunteering with NEIEA has been incredibly rewarding. Seeing the students grow and develop their skills makes all the effort worthwhile.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Johnson",
      role: "Donor",
      content: "I've supported NEIEA for three years now, and I'm impressed by how effectively they use donations to create real educational opportunities.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Lakshmi Patel",
      role: "Graduate, Computer Skills Program",
      content: "Learning computer skills through NEIEA helped me secure a job at a local company. The practical training was exactly what I needed.",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const displayedTestimonials = testimonials.slice(currentIndex * 3, (currentIndex * 3) + 3);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear from students, parents, and volunteers about how NEIEA has made a difference in their lives.
          </p>
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {displayedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  image={testimonial.image}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {testimonials.length > 3 && (
            <div className="flex justify-center mt-10 gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6 text-neutral-600" />
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <a href="/testimonials" className="btn-outline">
            Read More Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
