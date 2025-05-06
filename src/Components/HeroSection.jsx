import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../assets/WhatsApp Image 2024-12-31 at 13.34.03_e9669e2a.jpg';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarBackground() {
  const ref = useRef();
  const [sphere] = React.useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingCubes() {
  const group = useRef();
  
  useFrame((state, delta) => {
    group.current.rotation.y += delta / 4;
    group.current.rotation.x += delta / 8;
  });

  return (
    <group ref={group}>
      <mesh position={[1, 0, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-1, 1, -1]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, -1, -3]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export default function HeroSection() {
  // Animation variants
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 md:pt-20 relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <React.Suspense fallback={null}>
            <StarBackground />
            <FloatingCubes />
          </React.Suspense>
        </Canvas>
      </div>
      
      {/* Gradient overlay to make text readable */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-gray-900/90 dark:to-gray-800/90"></div>
        
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Arun Patwa</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Full Stack <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Web Developer</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              I build exceptional digital experiences with modern web technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="relative overflow-hidden group border-2 border-blue-500 text-blue-500 dark:text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              className="mt-8 flex justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              {[
                { icon: faGithub, url: 'https://github.com/ArunPatwa26' },
                { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/arun-patwa-581136278/' },
                { icon: faTwitter, url: 'https://x.com/ArunP78514' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 text-xl bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <motion.div 
              className="relative"
              animate={floatingAnimation}
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full">
                    <FontAwesomeIcon icon={faCode} className="text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">Currently working on</div>
                    <div className="text-blue-500 dark:text-blue-400 font-bold text-sm">MERN Stack Projects</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-blue-400/10 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-indigo-400/10 blur-xl"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}