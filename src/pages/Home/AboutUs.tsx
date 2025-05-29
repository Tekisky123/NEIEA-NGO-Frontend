import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/about/img1.jpg";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16 px-5 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <img
            src={img1}
            alt="About NEIEA"
            className="w-full h-[55vh] object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">About Us</h2>
          <h3 className="text-xl font-semibold text-primary-600 mb-4">NEIEA</h3>
          <p className="text-neutral-700 mb-6 leading-relaxed text-base md:text-lg">
            NEIEA (The New Equitable and Innovative Educational Association) is
            a non-profit NGO led by educationists and supporters committed to
            advancing educational goals with innovative pedagogy, inclusive
            culture, and cutting-edge technology. As a knowledge sharing
            platform, we collaborate with Educational Institutions, Colleges,
            and Skills Development Centers. Join us in bringing transformative
            changes to education, making it equitable and innovative for
            everyone!
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md shadow-md hover:bg-primary-700 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
