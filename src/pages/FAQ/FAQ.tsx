import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import PageHeader from '../../components/UI/PageHeader';
import AnimatedSection from '../../components/UI/AnimatedSection';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      question: "How can I donate to NEIEA?",
      answer: "You can donate to NEIEA through our secure online donation platform. We accept various payment methods including credit/debit cards, UPI, and bank transfers. All donations are eligible for tax benefits under section 80G.",
      category: "donations"
    },
    {
      question: "What are the requirements to become a volunteer?",
      answer: "To become a volunteer, you must be at least 18 years old, commit to a minimum of 3 months, and have a passion for education. We provide training and orientation for all volunteers.",
      category: "volunteering"
    },
    {
      question: "How do I enroll in a course?",
      answer: "Course enrollment can be done through our website. Visit the Courses page, select your desired course, and click on 'Enroll Now'. You'll need to create an account and complete the registration process.",
      category: "courses"
    },
    {
      question: "Are the courses free?",
      answer: "Most of our basic courses are free for underprivileged students. Some specialized courses may have a nominal fee, but we offer scholarships and financial aid to eligible candidates.",
      category: "courses"
    },
    {
      question: "What areas does NEIEA operate in?",
      answer: "NEIEA operates in multiple states across India and has a presence in the United States. Our programs primarily focus on urban slums, rural areas, and underserved communities.",
      category: "general"
    },
    {
      question: "How can I start a local NEIEA chapter?",
      answer: "To start a local chapter, you'll need to submit an application through our website. We'll review your proposal and schedule a meeting to discuss the requirements and support we can provide.",
      category: "volunteering"
    },
    {
      question: "What is the duration of your courses?",
      answer: "Course duration varies from 2 months to 6 months, depending on the subject and level. Each course has a detailed syllabus with specified duration and time commitment requirements.",
      category: "courses"
    },
    {
      question: "How are donations utilized?",
      answer: "Donations are used to fund our educational programs, provide learning materials, maintain facilities, and support underprivileged students. We maintain complete transparency and publish annual reports.",
      category: "donations"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'donations', name: 'Donations' },
    { id: 'volunteering', name: 'Volunteering' },
    { id: 'courses', name: 'Courses' },
    { id: 'general', name: 'General' }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about our programs, donations, and volunteering opportunities"
        backgroundImage="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
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

          <div className="max-w-3xl mx-auto">
            {filteredFAQs.map((faq, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="mb-4"
              >
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 transition-transform ${
                        openItems.includes(index) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: openItems.includes(index) ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-neutral-600">No questions found matching your criteria.</p>
              </div>
            )}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-neutral-600 mb-6">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ;