import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/UI/PageHeader';
import CourseCard from '../../components/UI/CourseCard';
import AnimatedSection from '../../components/UI/AnimatedSection';
import { Search, Filter } from 'lucide-react';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: "1",
      title: "Foundational English",
      duration: "3 months",
      students: 250,
      level: "Beginner",
      image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "language"
    },
    {
      id: "2",
      title: "Basic Mathematics",
      duration: "4 months",
      students: 180,
      level: "Beginner",
      image: "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "mathematics"
    },
    {
      id: "3",
      title: "NIOS Preparation",
      duration: "6 months",
      students: 320,
      level: "Intermediate",
      image: "https://images.pexels.com/photos/4778669/pexels-photo-4778669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "exam-prep"
    },
    {
      id: "4",
      title: "Microsoft Office Basics",
      duration: "2 months",
      students: 150,
      level: "Beginner",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "computer"
    },
    {
      id: "5",
      title: "Advanced English",
      duration: "4 months",
      students: 120,
      level: "Advanced",
      image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "language"
    },
    {
      id: "6",
      title: "Science Fundamentals",
      duration: "5 months",
      students: 200,
      level: "Intermediate",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "science"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'language', name: 'Language' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'exam-prep', name: 'Exam Preparation' },
    { id: 'computer', name: 'Computer Skills' },
    { id: 'science', name: 'Science' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEnroll = (courseId: string) => {
    console.log(`Enrolling in course: ${courseId}`);
    // Add enrollment logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Course Offerings" 
        subtitle="Explore our comprehensive range of courses designed to empower and educate"
        backgroundImage="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="text-neutral-400 w-5 h-5" />
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-neutral-600 hover:bg-primary-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                duration={course.duration}
                students={course.students}
                level={course.level}
                image={course.image}
                onEnroll={handleEnroll}
              />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Courses;