import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import AnimatedSection from '../../components/UI/AnimatedSection';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: "Dr. Ananya Sharma",
      position: "Founder & President",
      bio: "Dr. Sharma has over 25 years of experience in education policy and community development. She founded NEIEA with a vision to bridge educational disparities.",
      image: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Vikram Mehta",
      position: "Executive Director",
      bio: "With a background in non-profit management, Vikram oversees the strategic direction and operational excellence of all NEIEA programs.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Priya Desai",
      position: "Director of Programs",
      bio: "Priya brings innovative approaches to curriculum development and program implementation, focusing on culturally responsive teaching methods.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. Rajesh Kumar",
      position: "Academic Director",
      bio: "A former university professor, Dr. Kumar leads our academic initiatives and teacher training programs with a focus on quality and innovation.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah Johnson",
      position: "Director, NEI USA",
      bio: "Sarah leads our US-based initiatives, focusing on educational support for Native American communities and immigrant youth.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Mohammed Ali",
      position: "Community Engagement Lead",
      bio: "Mohammed works closely with local communities to ensure our programs are culturally sensitive and address specific educational needs.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Meet the dedicated professionals guiding NEIEA's mission and operations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{leader.position}</p>
                <p className="text-neutral-600 mb-4">{leader.bio}</p>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;