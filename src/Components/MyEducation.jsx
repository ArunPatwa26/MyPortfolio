import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationItem = ({ title, institution, period, description, tags, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:border-l-0 last:pb-0 group"
    >
      <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-full -left-2 top-0 ring-4 ring-blue-100 dark:ring-blue-900 group-hover:scale-125 transition-transform duration-300"></div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
            <h4 className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">{institution}</h4>
          </div>
          <span className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full whitespace-nowrap">
            {period}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function MyEducation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const educationData = [
    {
      title: "Bachelor of Science in Information Technology",
      institution: "Mumbai University",
      period: "2022 - 2025",
      description: "Specialized in modern web technologies, databases, and software development methodologies. Completed coursework in advanced programming, data structures, and web application development.",
      tags: ["Web Development", "Database Systems", "Software Engineering", "Cloud Computing"]
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      period: "2020 - 2022",
      description: "Focused on computer science fundamentals, mathematics, and physics. Developed strong problem-solving skills and logical thinking abilities.",
      tags: ["Computer Science", "Mathematics", "Physics", "Problem Solving"]
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board",
      period: "2020",
      description: "Developed foundational knowledge in science and mathematics. First exposure to computer programming and basic IT concepts.",
      tags: ["Science", "Mathematics", "Basic IT", "Fundamentals"]
    }
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-500">Education</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 h-full w-0.5 bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-800 dark:to-transparent"></div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <EducationItem
                  key={index}
                  title={item.title}
                  institution={item.institution}
                  period={item.period}
                  description={item.description}
                  tags={item.tags}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}