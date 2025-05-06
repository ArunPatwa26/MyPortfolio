import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/AboutMe';
import MySkills from './Components/MySkills';
import MyProjects from './Components/MyProjects';
import MyEducation from './Components/MyEducation';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Initialize AOS once
    AOS.init({ duration: 1000, once: true });

    // Scroll listener for "back to top" button
    const handleScroll = () => {
      const btn = document.getElementById("back-to-top");
      if (btn) {
        if (window.scrollY > 300) {
          btn.classList.remove("opacity-0", "invisible");
          btn.classList.add("opacity-100", "visible");
        } else {
          btn.classList.remove("opacity-100", "visible");
          btn.classList.add("opacity-0", "invisible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <MyEducation />
      <ContactUs />
      <Footer />

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7 7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}

export default App;
