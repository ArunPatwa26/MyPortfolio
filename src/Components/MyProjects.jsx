import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import project1 from "../assets/Screenshot 2025-04-19 221701.png";
import project2 from "../assets/Screenshot 2025-04-19 221236.png";
import project3 from "../assets/Screenshot 2025-04-19 221755.png";
import project4 from "../assets/Screenshot 2025-04-21 141916.png";
import project5 from "../assets/Screenshot 2025-05-06 171152.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform Decora",
    description: "A full-featured online store with cart, checkout, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "https://home-decora.vercel.app/",
    codeLink: "#",
    image: project1
  },
  {
    id: 2,
    title: "Doctor Appointment System",
    description: "A system for booking doctor appointments with patient management.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demoLink: "https://d-appointments.vercel.app/",
    codeLink: "#",
    image: project3
  },
  {
    id: 3,
    title: "Jarvis Landing Page",
    description: "A modern landing page for AI assistant with responsive design.",
    tags: ["HTML5", "CSS", "JavaScript"],
    demoLink: "https://jarvis-landing-page.netlify.app/",
    codeLink: "#",
    image: project2
  },
  {
    id: 4,
    title: "Ambulance Booking System",
    description: "Emergency ambulance booking platform with real-time tracking.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demoLink: "https://ambulance-frontend-85xb.vercel.app/",
    codeLink: "#",
    image: project4
  },
  {
    id: 5,
    title: "EliteCuts Hair Salon",
    description: "Booking platform for hair salon with service selection and scheduling.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    demoLink: "https://elitecuts-landing-page.netlify.app/",
    codeLink: "#",
    image: project5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function MyProjects() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section 
        id="projects" 
        className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              My Work
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 mx-auto">
              Here are some of my recent projects. Each one was built with attention to detail and user experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      >
                        Live Demo
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href={project.codeLink} 
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                      >
                        View Code
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg transition-colors"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              View All Projects
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}