import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React from "react";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {HiOutlineMail} from "react-icons/hi";
import {HiArrowDown} from "react-icons/hi";
import { profilePhoto } from "../assets";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-start justify-center`}>
      {/* GitHub Link - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-30"
      >
        <motion.a
          href="https://github.com/NehmanDevelops"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#ffd700] to-[#ffed4e] flex items-center justify-center text-black shadow-lg shadow-[#ffd700]/50 hover:shadow-[#ffd700]/80 transition-all"
          whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)' }}
          whileTap={{ scale: 0.95 }}
          aria-label="GitHub Profile"
        >
          <AiOutlineGithub className="text-lg sm:text-xl md:text-2xl" />
        </motion.a>
      </motion.div>

      {/* Profile Photo Circle - Left Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 top-20 md:top-32 z-20"
      >
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80">
          <div className="absolute inset-0 rounded-full border-4 border-[#ffd700] shadow-lg shadow-[#ffd700]/50"></div>
          <div className="absolute inset-2 rounded-full overflow-hidden bg-[#1a1a1a]">
            <img
              src={typeof profilePhoto === 'string' ? profilePhoto : (profilePhoto?.src || profilePhoto?.default?.src || profilePhoto)}
              alt="Nehman Rahimi"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Profile photo failed to load:', profilePhoto);
                e.target.style.background = '#1a1a1a';
              }}
            />
          </div>
        </div>
      </motion.div>

      <div className={`absolute inset-0 ${styles.paddingX} flex flex-col justify-start items-center md:items-start z-10 max-w-7xl mx-auto pt-48 sm:pt-56 md:pt-32 md:pl-64 lg:pl-80 xl:pl-96`}>
        {/* Main Content */}
        <div className="flex flex-col">
          {/* Greeting and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-2"
          >
            <p className="text-xl md:text-2xl text-gray-400 font-medium inline">
              Hi, I'm{' '}
            </p>
            <h1 className={`${styles.heroHeadText} text-white inline`}>
              <span className="bg-gradient-to-r from-white via-[#ffd700] to-white bg-clip-text text-transparent">
                Nehman Rahimi
              </span>
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center md:text-left">
              <span className="bg-gradient-to-r from-[#ffd700] via-[#ffed4e] to-[#ffd700] bg-clip-text text-transparent">
                Second-Year Computer Science Student at York University | Full-Stack Developer with Sales & Customer Experience
              </span>
            </h2>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center md:justify-start mb-6 w-full"
          >
            <motion.a
              href="/Nehman_Rahimi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#ffd700]/50 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-[#ffd700] text-[#ffd700] font-bold rounded-xl hover:bg-[#ffd700] hover:text-black transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-3 sm:gap-4 items-center justify-center md:justify-start mb-8 w-full"
          >
            <motion.a
              href="https://github.com/NehmanDevelops"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#ffd700] flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <AiOutlineGithub className="text-lg sm:text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nehman-rahimi-916225258/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#ffd700] flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <ImLinkedin className="text-lg sm:text-xl" />
            </motion.a>
            <motion.a
              href="mailto:nehmanmain@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#ffd700] flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <HiOutlineMail className="text-lg sm:text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* 3D Scene */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-10'
      >
        <motion.a 
          href='#about'
          className='flex flex-col items-center gap-2 text-[#ffd700] hover:text-[#ffed4e] transition-colors cursor-pointer'
          whileHover={{ scale: 1.05 }}
        >
          <p className='text-xs sm:text-sm md:text-base font-medium whitespace-nowrap px-2 text-center'>
            Scroll down to see rest of portfolio
          </p>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <HiArrowDown className='text-2xl md:text-3xl' />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;