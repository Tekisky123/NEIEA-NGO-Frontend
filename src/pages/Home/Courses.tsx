import React from 'react';
import AnimatedSection from '../../components/UI/AnimatedSection';

interface Course {
  title: string;
  description: string;
  buttonLabel: string;
}

const courses: Course[] = [
  {
    title: "Foundational English",
    description:
      "Join us as we explore the wonders of language together, fostering kindness, understanding, and creativity along the way. Join us for an exciting and enriching linguistic adventure!",
    buttonLabel: "Register now",
  },
  {
    title: "English Beginner's Level Course",
    description:
      "Where language learning becomes a thrilling journey and growth! Unlock the power of interactive learning and communication.",
    buttonLabel: "Register now",
  },
  {
    title: "English Proficiency Course",
    description:
      "Designed for teachers and learners with limited exposure to English. Enhance reading, writing, speaking, and listening skills.",
    buttonLabel: "Register now",
  },
  {
    title: "NIOS English",
    description:
      "Tailored for students preparing for NIOS secondary exams, marginalized communities, and school dropouts.",
    buttonLabel: "Register now",
  },
  {
    title: "Math Foundation Course: Classes 6–8 / OBE C Level",
    description:
      "Covers advanced geometry, algebra, data handling, and basic trigonometry, laying strong mathematical foundations.",
    buttonLabel: "Register now",
  },
  {
    title: "Microsoft Office Course for Beginners",
    description:
      "Empower yourself with essential digital skills! Learn MS Word, Excel, and PowerPoint through live sessions and real-world examples.",
    buttonLabel: "Register now",
  },
  {
    title: "Math Foundation Course: Classes 1–3 / OBE A Level",
    description:
      "Fun, engaging introduction to basic arithmetic, shapes, patterns, and problem-solving using Discourse Oriented Pedagogy (DOP).",
    buttonLabel: "Register now",
  },
  {
    title: "Math’s Preparatory Course for NIOS & TOSS Exams",
    description:
      "Intensive practice and concept clarity to boost confidence and excel in your board exams.",
    buttonLabel: "Register now",
  },
  {
    title: "Beginner's Level Google Workspace",
    description:
      "Unlock the full potential of Google Workspace with hands-on training covering Docs, Sheets, Slides and more.",
    buttonLabel: "Register now",
  },
  {
    title: "Math Foundation Course: Classes 4–5 / OBE B Level",
    description:
      "Advance your understanding with arithmetic, intro to geometry, fractions, and basic algebra.",
    buttonLabel: "Register now",
  },
  {
    title: "Math Foundation Course: Classes 9–10",
    description:
      "Dive deep into algebra, geometry, trigonometry, and calculus concepts to prepare for board exams and future academics.",
    buttonLabel: "Register now",
  },
  {
    title: "3-Month Online Teacher Training Course",
    description:
      "Transform your teaching! Master English, embrace technology, and upgrade pedagogy with Discourse-Oriented Pedagogy (DOP).",
    buttonLabel: "Register now",
  },
];

const Courses: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Join Our <strong className="text-primary-600">FREE Online Courses</strong> and begin your journey towards empowerment and success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="bg-neutral-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-800">{course.title}</h3>
                <p className="text-neutral-600 ">{course.description}</p>
              </div>
              <div className="mt-6">
                <button className="mt-4 inline-block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                  {course.buttonLabel}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
