import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronLeftCircle,
  ChevronRight,
  ChevronRightCircle,
} from "lucide-react";
import banner1 from "../../images/home/banner1.jpg";
import banner2 from "../../images/home/banner2.jpg";
import banner3 from "../../images/home/banner3.jpg";
import banner4 from "../../images/home/banner4.jpg";

const slides = [
  {
    image: banner1,
    title: "Empowering Communities Through Education",
    description:
      "NEIEA is dedicated to providing quality education to underprivileged communities, fostering development, and creating opportunities for a better future.",
  },
  {
    image: banner2,
    title: "Transforming Lives with Knowledge",
    description:
      "Our mission is to uplift marginalized sections of society by providing access to modern, holistic education.",
  },
  {
    image: banner3,
    title: "Be the Change Maker",
    description:
      "Join us in our journey to make education a powerful tool for social transformation.",
  },
  {
    image: banner4,
    title: "Be the Change Maker",
    description:
      "Join us in our journey to make education a powerful tool for social transformation.",
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute hidden md:block right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white hover:text-blue-400"
      onClick={onClick}
    >
      <ChevronRightCircle size={38} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white hover:text-blue-400"
      onClick={onClick}
    >
      <ChevronLeftCircle size={38} />
    </div>
  );
};

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="relative h-[80vh] md:h-[80vh] flex flex-col md:flex-row items-center bg-neutral-50 bg-opacity-10 bg-blend-multiply pt-16 md:px-16"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-900/40"></div>

            <div className="relative z-10 w-full md:w-auto md:mt-0 mt-auto p-4 md:p-0">
              <div className="max-w-xl mx-auto px-4">
                <motion.h1
                  className="text-white mb-6 text-2xl sm:text-3xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-neutral-200 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link to="/donate" className="btn-accent">
                    <span>Donate Now</span>
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
