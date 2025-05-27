import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Cta: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Join Us in Making a Difference
            </motion.h2>
            <motion.p 
              className="text-primary-50 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Your support can transform lives through education. Whether through donations, volunteering, or spreading awareness, every contribution matters.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/donate" className="btn bg-white text-primary-600 hover:bg-primary-50 border-transparent">
                <Heart className="w-5 h-5 mr-2" />
                <span>Donate Now</span>
              </Link>
              <Link to="/change" className="btn border-white text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" />
                <span>Become a Volunteer</span>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Quick Donation</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="input"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="amount" className="label">Donation Amount</label>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {['₹500', '₹1000', '₹2500', '₹5000'].map((amount, index) => (
                    <button
                      key={index}
                      type="button"
                      className="px-4 py-2 border border-primary-200 rounded-md text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  id="amount"
                  placeholder="Custom amount"
                  className="input"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-accent w-full"
              >
                Donate Now
              </button>
              <p className="text-center text-sm text-neutral-500 mt-4">
                Secure payment processing. Tax receipts will be emailed.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;