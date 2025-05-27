import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Working from './pages/Working/Working';
import Courses from './pages/Courses/Courses';
import Programmes from './pages/Programmes/Programmes';
import Change from './pages/Change/Change';
import USA from './pages/USA/USA';
import Donate from './pages/Donate/Donate';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Gallery from './pages/Gallery/Gallery';
import Testimonials from './pages/Testimonials/Testimonials';
import Careers from './pages/Careers/Careers';
import Impact from './pages/Impact/Impact';
import Events from './pages/Events/Events';
import FAQ from './pages/FAQ/FAQ';
import Resources from './pages/Resources/Resources';
import Reports from './pages/Reports/Reports';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import VolunteerDashboard from './pages/Dashboard/VolunteerDashboard';
import Media from './pages/Media/Media';
import Privacy from './pages/Legal/Privacy';
import Terms from './pages/Legal/Terms';
import NotFound from './pages/NotFound/NotFound';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="working" element={<Working />} />
          <Route path="courses" element={<Courses />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="change" element={<Change />} />
          <Route path="usa" element={<USA />} />
   
       
          
       
         
          
          <Route path="impact" element={<Impact />} />
          <Route path="events" element={<Events />} />
          <Route path="faq" element={<FAQ />} />
         
          
          
   
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

export default App;