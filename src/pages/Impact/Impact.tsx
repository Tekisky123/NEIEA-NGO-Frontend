import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/UI/PageHeader';
import AnimatedSection from '../../components/UI/AnimatedSection';
import { Star, Award, BookOpen } from 'lucide-react';

interface ImpactStory {
  name: string;
  image: string;
  program: string;
  background: string;
  challenges: string;
  currentStatus: string;
  quote: string;
}

const Impact: React.FC = () => {
  const stories: ImpactStory[] = [
    {
      name: "Meera Patel",
      image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      program: "Girls Education Program",
      background: "From a small village in Gujarat, Meera faced significant barriers to education.",
      challenges: "Financial constraints and societal pressure to drop out after primary school.",
      currentStatus: "Currently pursuing Computer Science at a leading university.",
      quote: "NEIEA didn't just provide education; they gave me wings to fly."
    },
    {
      name: "Rahul Kumar",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      program: "Digital Literacy Program",
      background: "From Delhi's urban slums, Rahul had limited access to technology.",
      challenges: "No computer at home and supporting family through part-time work.",
      currentStatus: "Working as a junior web developer at a tech startup.",
      quote: "The digital skills I learned opened doors I never knew existed."
    },
    {
      name: "Zara Ahmed",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      program: "Bridge Course Program",
      background: "A dropout who lost two years of education due to family circumstances.",
      challenges: "Catching up with peers and rebuilding confidence in learning.",
      currentStatus: "Successfully completed high school, now pursuing teaching degree.",
      quote: "NEIEA believed in me when I had stopped believing in myself."
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
        title="Impact Stories" 
        subtitle="Real stories of transformation and empowerment through education"
        backgroundImage="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Change</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Every story represents a life transformed through education and determination.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm font-medium text-primary-600">{story.program}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{story.name}</h3>
                  <blockquote className="italic text-neutral-600 mb-4">
                    "{story.quote}"
                  </blockquote>
                  <div className="space-y-3 text-neutral-600">
                    <p><strong>Background:</strong> {story.background}</p>
                    <p><strong>Challenges:</strong> {story.challenges}</p>
                    <p><strong>Current Status:</strong> {story.currentStatus}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Story</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Are you a NEIEA alumnus with a story to share? Your journey can inspire others and showcase the transformative power of education.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="label">Full Name</label>
                  <input type="text" id="name" className="input" required />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email Address</label>
                  <input type="email" id="email" className="input" required />
                </div>
                <div>
                  <label htmlFor="program" className="label">Program Attended</label>
                  <select id="program" className="input" required>
                    <option value="">Select a program</option>
                    <option value="girls-education">Girls Education Program</option>
                    <option value="digital-literacy">Digital Literacy Program</option>
                    <option value="bridge-course">Bridge Course Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="story" className="label">Your Story</label>
                  <textarea
                    id="story"
                    rows={6}
                    className="input"
                    placeholder="Share your journey, challenges, and achievements..."
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="photo" className="label">Upload Your Photo (Optional)</label>
                  <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    className="input"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Submit Your Story
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-primary-500 mr-3" />
                  <h3 className="text-xl font-semibold">Why Share Your Story?</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                    <span>Inspire others to pursue education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                    <span>Show the impact of NEIEA's programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                    <span>Connect with fellow alumni</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary-500 mr-3" />
                  <h3 className="text-xl font-semibold">Story Guidelines</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                    <span>Be authentic and personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                    <span>Include specific examples of impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 mr-2"></span>
                    <span>Share both challenges and triumphs</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Impact;