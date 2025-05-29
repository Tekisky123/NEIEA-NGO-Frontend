import React from "react";

const NEIEAIntro: React.FC = () => {
  return (
    <div className="bg-neutral-50">
      <section className=" py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary-700 mb-6 text-center">
          Welcome to NEIEA, The New Equitable and Innovative Educational
          Association
        </h1>
        <div className="space-y-6 text-neutral-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          <p>
            NEIEA is an initiative that employs cutting-edge technological
            tools, incorporates the best pedagogy and teaching practices, and
            utilizes ethical, transparent, and democratic processes to expand
            education to new frontiers, making it more equitable and accessible
            for learners worldwide.
          </p>
          <p>
            NEIEA is led by a group of educationists and dedicated supporters
            who are passionate about bringing a “Renaissance” to the field of
            education. They believe that by using these innovative methods, they
            can make education more relevant to the needs of today’s learners
            and ensure that all learners, regardless of their background or
            circumstances, can reach their full potential.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NEIEAIntro;
