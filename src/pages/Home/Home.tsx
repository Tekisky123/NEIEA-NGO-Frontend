import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Stats from './Stats';
import Features from './Courses';
import Programs from './Programs';
import Testimonials from './Testimonials';
import Cta from './Cta';
import BlogPreview from './BlogPreview';
import NotificationMarquee from './NotificationMarquee';
import NEIEAIntro from './NEIEAIntro';
import AboutUs from './AboutUs';
import VisionMission from './VisionMission';
import ImpactReport from './ImpactReport';
import MeetOurTeam from './MeetOurTeam';
import ClientMarquee from './ClientMarquee';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      {/* <Features /> */}
      <NotificationMarquee />
      <NEIEAIntro/>
      <AboutUs/>
      <VisionMission/>
      <ImpactReport/>
      <Stats />
      <MeetOurTeam />
      <ClientMarquee />
      <Testimonials />
    </motion.div>
  );
};

export default Home;