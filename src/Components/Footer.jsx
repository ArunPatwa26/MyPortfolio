import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {


  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Arun Patwa</h2>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">Full Stack Developer</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition">About</a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition">Projects</a>
            <a href="#education" className="text-gray-400 hover:text-blue-400 transition">Education</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a>
          </nav>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2023 Arun Patwa. All rights reserved.</p>
          <p className="mt-2">Designed and built with ❤️ by Arun Patwa</p>
        </div>
      </div>

      {/* Back to Top Button */}
     
    </footer>
  );
}
