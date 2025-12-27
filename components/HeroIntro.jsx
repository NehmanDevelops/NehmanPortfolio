'use client'

import { motion } from 'framer-motion'
import { AiOutlineGithub } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import { HiOutlineMail, HiOutlineDocumentText, HiArrowDown } from 'react-icons/hi'
import { profilePhoto } from '../src/assets'

export default function HeroIntro() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      {/* Background subtle effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-software-gold/10 via-black to-software-gold/5 opacity-50" />
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-20 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Photo with Gradient Border */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-visible"
            >
              {/* Gold Gradient Border Ring */}
              <div 
                className="absolute inset-0 rounded-full p-1.5"
                style={{
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e, #ffd700, #b8860b)',
                  boxShadow: '0 0 60px rgba(255, 215, 0, 0.4), 0 0 100px rgba(255, 215, 0, 0.2)',
                }}
              >
                <div className="w-full h-full rounded-full bg-black overflow-hidden">
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

              {/* Animated gold gradient rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 237, 78, 0.2), rgba(255, 215, 0, 0.3))',
                }}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4">
              Hi there! <span className="text-software-gold">👋</span>
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-software-gold to-white bg-clip-text text-transparent">
              Nehman Rahimi
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-software-gold font-medium"
          >
            Computer Science Student, AI & Full Stack Developer
          </motion.p>

          {/* Short Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed px-2 sm:px-0"
          >
            Second-Year Computer Science Student at York University | Full-Stack Developer with Sales & Customer Experience
          </motion.p>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center md:justify-start"
          >
            <motion.a
              href="https://github.com/NehmanDevelops" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-software-gold flex items-center justify-center text-software-gold hover:bg-software-gold hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nehman-rahimi-916225258/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-software-gold flex items-center justify-center text-software-gold hover:bg-software-gold hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ImLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="mailto:nehmanmain@gmail.com" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-software-gold flex items-center justify-center text-software-gold hover:bg-software-gold hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <HiOutlineMail className="text-xl" />
            </motion.a>
            <motion.a
              href="/Nehman_Rahimi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border-2 border-software-gold flex items-center justify-center text-software-gold hover:bg-software-gold hover:text-black transition-all duration-300 gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              title="See Resume"
            >
              <span>See Resume</span>
              <HiOutlineDocumentText className="text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-30'
      >
        <motion.a 
          href='#about'
          className='text-software-gold hover:text-yellow-400 transition-colors cursor-pointer'
          whileHover={{ scale: 1.1 }}
        >
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
            <HiArrowDown className='text-2xl sm:text-3xl md:text-4xl' />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  )
}

