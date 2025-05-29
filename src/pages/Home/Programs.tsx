import React from "react";
import ProgramCard from "../../components/UI/ProgramCard";
import AnimatedSection from "../../components/UI/AnimatedSection";
import { Link } from "react-router-dom";
import img1 from "../../images/programms/img2.png";
import img2 from "../../images/programms/img1.jpg";
import img3 from "../../images/programms/img3.jpg";

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Girl's Education",
      description:
        "The Girl’s education is seen to be at the bottom-most pit among all social segments of Indian society. NEIEA empowers girls by promoting gender equality, improving education and health, and preparing them for modern careers and entrepreneurship.",
      fullDescription: `Girl's education means giving girls the same opportunities that are available to boys, empowering them with knowledge and skills. NEIEA attempts to break the cycle of poverty, promote gender equality, and improve education and health. Educated girls can make smart choices, work, and contribute positively to society, leading to overall progress. Issues pertinent to girls like the availability of decent bathrooms in schools, safe travel, hygienic supplies will be pursued. At NEIEA, we go out of the way to enroll girls and teach them all subjects using effective methods and interactive workshops. We prepare girls for modern careers, offer Entrepreneurial training, and give counseling support for higher education. NEIEA aims to empower girls and provide them with a better education for a brighter future.`,
      image: img1,
      link: "/programmes#girls-education",
    },
    {
      title: "Homeless Children",
      description:
        "NEIEA provides education to homeless and orphaned children, promoting social inclusion and breaking the cycle of homelessness by collaborating with Rainbow Foundation and MVF.",
      fullDescription: `NEIEA provides education to homeless and orphaned children. We aim to empower them, restore their dignity, and break the cycle of homelessness by increasing their chances of finding stable employment and improving living conditions. NEIEA intends to promote social inclusion, prospects, and reduce vulnerability to exploitation. NEIEA’s sense of social responsibility drives us to create long-term positive changes in the lives of homeless children, fostering a more inclusive and equitable society.

We work with RAINBOW, a non-profit organization dedicated to providing shelter and education for homeless children. Rainbow Foundation India focuses on reaching and caring for the most marginalized children. It aims to create a movement of compassionate care for the dispossessed, ensuring every child’s rights to a safe home, food, education, and comprehensive care.

We also work with Mamidipudi Venkatarangaiya Foundation (MVF) towards providing education to orphans and to children who come from poor families (below the poverty line). MVF focuses on universalizing education and has mainstreamed over 1 million children from labor to formal education up to class 10. Recognized internationally, it supports teachers through the Teachers Forum for Child Rights and employs Residential Bridge Course Camps for reintegration.`,
      image: img2,
      link: "/programmes#homeless-children",
    },
    {
      title: "Education for Slum Children",
      description:
        "NEIEA empowers slum children through education by collaborating with UMEED GROUP to provide access and promote sustainable community development.",
      fullDescription: `Around 20% of the Indian urban population lives in slums. The high congestion and lack of civic amenities and opportunities make the slum children grow fast, become street-smart and develop talent. If properly utilized, the students can become a great asset to society. NEIEA works to educate people living in slums, helping them overcome poverty and promoting empowerment. We aim to break the cycle of poverty, uphold the children’s basic rights, and contribute to community development. NEIEA is driven by empathy, social justice, and the goal of preventing exploitation. Through education, we are building capacity, promoting sustainable development, and creating a more equitable society for all.

Towards this we work with UMEED GROUP, under the leadership of its illustrious leader Dr Mohsin Raza, that fosters the education of slum children in 17 localities of Aligarh city in U.P.`,
      image: img3,
      link: "/programmes#slum-children",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Key Programs
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Through these targeted initiatives, we address educational
            disparities and create pathways to success for underserved
            communities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              link={program.link}
              delay={index * 0.1}
              // optionally pass fullDescription for detailed view or modal if you extend ProgramCard
              // fullDescription={program.fullDescription}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/programmes" className="btn-primary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
