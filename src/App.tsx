import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Working from "./pages/Working/Working";
import Courses from "./pages/Courses/Courses";
import Programmes from "./pages/Programmes/Programmes";
import Change from "./pages/Change/Change";
import USA from "./pages/USA/USA";
import Impact from "./pages/Impact/Impact";
import Events from "./pages/Events/Events";
import FAQ from "./pages/FAQ/FAQ";
import NotFound from "./pages/NotFound/NotFound";
import { LanguageProvider } from "./context/LanguageContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminLogin from "./pages/Admin/AdminLogin";
import { Toaster } from "sonner";
import AdminDashboard from "./pages/Admin/AdminDashboard";

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
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        theme="light"
        richColors
        toastOptions={{
          classNames: {
            toast: "!font-sans !text-base !rounded-lg !border !shadow-lg",
            title: "!font-medium",
            description: "!text-sm",
          },
          unstyled: false,
        }}
        visibleToasts={4}
        duration={3000}
      />
      {/* <FloatingSocialIcons /> */}
    </LanguageProvider>
  );
}

export default App;
