import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHtml5, faCss3Alt, faJs, faReact, 
    faNodeJs, faGitAlt
  } from "@fortawesome/free-brands-svg-icons"; // For brand icons
  
  import { 
    faDatabase, faServer, faPalette, faRocket, faMobileAlt 
  } from "@fortawesome/free-solid-svg-icons"; // For solid icons
  

export default function MySkills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { icon: faHtml5, title: "HTML5", level: 95, color: "text-orange-500", bgColor: "bg-orange-100" },
    { icon: faCss3Alt, title: "CSS3", level: 90, color: "text-blue-500", bgColor: "bg-blue-100" },
    { icon: faJs, title: "JavaScript", level: 85, color: "text-yellow-500", bgColor: "bg-yellow-100" },
    { icon: faReact, title: "React", level: 88, color: "text-cyan-500", bgColor: "bg-cyan-100" },
    { icon: faNodeJs, title: "Node.js", level: 80, color: "text-green-500", bgColor: "bg-green-100" },
    { icon: faDatabase, title: "MongoDB", level: 75, color: "text-emerald-500", bgColor: "bg-emerald-100" },
    { icon: faServer, title: "Express", level: 78, color: "text-gray-500", bgColor: "bg-gray-100" },
    { icon: faGitAlt, title: "Git", level: 85, color: "text-red-500", bgColor: "bg-red-100" },
    { icon: faMobileAlt, title: "Responsive", level: 92, color: "text-pink-500", bgColor: "bg-pink-100" },
    { icon: faPalette, title: "UI/UX", level: 82, color: "text-purple-500", bgColor: "bg-purple-100" },
    { icon: faRocket, title: "REST APIs", level: 83, color: "text-indigo-500", bgColor: "bg-indigo-100" },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-blue-500 dark:text-blue-400">Skills</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies I've mastered to craft exceptional digital experiences
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${skill.bgColor}`} />
              
              <div className="p-6">
                <div className={`text-4xl mb-4 ${skill.color}`}>
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {skill.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {skill.level}% proficiency
                </p>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className={`h-2.5 rounded-full ${skill.bgColor}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="mb-6 opacity-90">
              I dedicate at least 10 hours weekly to expanding my skill set through courses, 
              personal projects, and open-source contributions. Currently exploring advanced 
              React patterns and cloud architecture.
            </p>
            <motion.button
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Learning Path
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}