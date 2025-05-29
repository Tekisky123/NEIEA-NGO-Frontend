import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../images/about/img2.jpg";

const ImpactReport: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Content Left */}
        <div>
          <h2 className="text-4xl font-extrabold text-primary-700 mb-6">
            NEIEA's Impact Report 2022-24
          </h2>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
            Education for All
          </h3>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6 whitespace-pre-line">
            NEIEA is committed to revolutionizing education through innovative
            approaches and extensive collaborations. Since April 2022, NEIEA has
            introduced 13 free online courses and partnered with various
            institutions to benefit thousands of learners. Additionally, NEIEA
            is recognized for its credibility and transparency, having obtained
            the 80G certification for tax-exempt donations and a Darpan ID to
            ensure compliance and accountability in it. NEIEA uses a modern
            pedagogy called Discourse Oriented Pedagogy (DOP) to nurture
            critical thinking.
            {"\n\n"}
            This is unlike the widely used Rote-memorization pedagogy applied in
            most schools that stress on learning through memorization.
          </p>
          <Link
            to="/impact-report"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Click Here To Know More
          </Link>
        </div>

        {/* Image Right */}
        <div className="flex justify-center ">
          <img
            src={img2}
            alt="NEIEA Impact Report"
            className="w-full max-w-lg rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactReport;
