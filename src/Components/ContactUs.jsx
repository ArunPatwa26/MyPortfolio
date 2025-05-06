import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactInfoItem = ({ icon, title, content, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex items-start group"
    >
      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
        <i className={`${icon} text-blue-600 dark:text-blue-400 text-lg`}></i>
      </div>
      <div>
        <h4 className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1">{content}</p>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ icon, href, color, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 flex items-center justify-center rounded-full ${color} hover:shadow-lg transition-all duration-300`}
    >
      <i className={`${icon} text-white text-lg`}></i>
    </motion.a>
  );
};

export default function ContactUs() {
  const [headingRef, headingInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      content: "Mumbai, Thane"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "arunpatwa2605@gmail.com"
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      content: "+91 9136189052"
    }
  ];

  const socialLinks = [
    {
      icon: "fab fa-github",
      href: "https://github.com/ArunPatwa26",
      color: "bg-gray-800 hover:bg-gray-700"
    },
    {
      icon: "fab fa-linkedin-in",
      href: "https://www.linkedin.com/in/arun-patwa-581136278/",
      color: "bg-blue-600 hover:bg-blue-500"
    },
    {
      icon: "fab fa-twitter",
      href: "https://x.com/ArunP78514",
      color: "bg-black hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
    },
    {
      icon: "fab fa-instagram",
      href: "#",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            I'm always open to new collaborations and interesting conversations.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5 sm:space-y-6 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-900/30"
            >
              <input type="hidden" name="access_key" value="c372e842-bb92-47db-8a5a-9995c28179be" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="John Doe"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-900/30 h-full">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={infoInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 dark:text-white"
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-5 mb-8">
                {contactInfo.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    delay={index}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={infoInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-sm sm:text-base">
                  Follow Me On Social Media
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <SocialLink
                      key={index}
                      icon={link.icon}
                      href={link.href}
                      color={link.color}
                      delay={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}