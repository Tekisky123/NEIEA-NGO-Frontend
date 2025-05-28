import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  'https://neiea.org/wp-content/uploads/2023/08/Rainbow-Homes.png',
  'https://neiea.org/wp-content/uploads/2023/08/MVF.png',
  'https://neiea.org/wp-content/uploads/2024/07/BESCO.png',
];

const ClientMarquee: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary-700 mb-6">Our Amazing Clients</h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ['0%', '-100%'] }}
            
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 50, // Slow scroll
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Client ${idx + 1}`}
                className="h-full object-contain  transition duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
