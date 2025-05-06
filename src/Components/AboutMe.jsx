import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import myResume from "../assets/myResume.pdf";

export default function AboutMe() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const personalInfo = [
    { icon: faUser, label: "Name", value: "Arun Patwa" },
    { icon: faEnvelope, label: "Email", value: "arunpatwa2605@gmail.com" },
    { icon: faMapMarkerAlt, label: "From", value: "Mumbai, Thane" },
    { icon: faPhone, label: "Phone", value: "9136189052" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
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
            About <span className="text-blue-500 dark:text-blue-400">Me</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=80"
                  alt="Arun Patwa"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <div className="flex items-center">
                  <div className="mr-2">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <span className="font-medium">Web Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="lg:w-3/5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 dark:text-white"
              variants={fadeInUp}
            >
              Who am I?
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base sm:text-lg"
              variants={fadeInUp}
            >
              A passionate{" "}
              <span className="text-blue-500 dark:text-blue-400 font-medium">
                Web Developer
              </span>{" "}
              with a knack for creating visually appealing and user-friendly web
              applications. I specialize in crafting responsive designs, clean
              code architecture, and seamless user experiences.
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base sm:text-lg"
              variants={fadeInUp}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities. I believe in continuous learning and staying updated
              with the latest industry trends to deliver cutting-edge solutions.
            </motion.p>

            {/* Personal Info Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={staggerContainer}
            >
              {personalInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4 text-blue-500 dark:text-blue-400">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 dark:text-gray-300">
                      {item.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a
                href={myResume}
                download
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
