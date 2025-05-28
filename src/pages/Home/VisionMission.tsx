import React from 'react';
import { Link } from 'react-router-dom';

const VisionMission: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vision */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">Our Vision</h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6">
            To envision a society where all youth and citizens are able to obtain good quality education and use this to transform society ensuring human welfare, sustainability, and progress.
          </p>
          <Link
            to="/vision"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition"
          >
            Read More &rarr;
          </Link>
        </div>

        {/* Mission */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">Our Mission</h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6">
            To provide good quality and innovative education to all segments of society with high consideration given to providing free education to the poor.
          </p>
          <Link
            to="/mission"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
