import React from "react";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import "./About.scss";

const About = () => {
  return (
    <div className={`pt-24 md:pt-32 bg-black relative z-10`}>
      <div className={`${styles.paddingX} relative z-20 mb-6 md:mb-8`}>
        <motion.div variants={textVariant()} initial="hidden" animate="show" className="text-center md:text-left">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className={`justify-center pb-6 sm:pb-8 md:pb-12 ${styles.paddingX} relative z-10`}
      >
          <div className='about-card bg-[#1a1a1a] rounded-3xl p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16 w-full max-w-6xl mx-auto border-2 border-[#ffd700]/30 hover:border-[#ffd700]/50 transition-all shadow-lg shadow-[#ffd700]/10'>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start'>
            {/* Photo Section - Centered on mobile, left on desktop */}
            <div className='flex-shrink-0 flex justify-center lg:justify-start'>
              <motion.div 
                className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-visible'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gold Gradient Border Ring with glow */}
                <div 
                  className="absolute inset-0 rounded-full p-2"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700, #ffed4e, #ffd700, #b8860b)',
                    boxShadow: '0 0 60px rgba(255, 215, 0, 0.6), 0 0 100px rgba(255, 215, 0, 0.4)',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    <img
                      src="/photo2.png"
                      alt="Nehman Rahimi"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Profile photo failed to load');
                        e.target.style.background = '#1a1a1a';
                        e.target.style.display = 'flex';
                        e.target.style.alignItems = 'center';
                        e.target.style.justifyContent = 'center';
                        e.target.innerHTML = '<span style="font-size: 4rem; color: #666;">📸</span>';
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className='flex-1 w-full space-y-4 sm:space-y-6 md:space-y-8'>
              {/* Badges */}
              <div className='flex flex-wrap gap-3 sm:gap-4'>
                {/* Location Badge */}
                <motion.div 
                  className='bg-[#1a1a1a] border-2 border-[#ffd700]/50 rounded-xl px-4 py-2 sm:px-6 sm:py-4 hover:border-[#ffd700] transition-all cursor-default'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1'>
                    <MdLocationOn className='text-[#ffd700] text-base sm:text-xl' />
                    <p className='text-[#ffd700] font-bold text-base sm:text-lg'>Toronto</p>
                  </div>
                  <p className='text-gray-400 text-xs sm:text-sm'>Ontario, Canada</p>
                </motion.div>

                {/* Role Badge */}
                <motion.div 
                  className='bg-[#1a1a1a] border-2 border-[#ffd700]/50 rounded-xl px-4 py-2 sm:px-6 sm:py-4 hover:border-[#ffd700] transition-all cursor-default'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className='text-[#ffd700] font-bold text-base sm:text-lg mb-0.5 sm:mb-1'>Full-Stack</p>
                  <p className='text-gray-400 text-xs sm:text-sm'>Developer</p>
                </motion.div>

                {/* Hackathon Winner Badge */}
                <motion.div 
                  className='bg-[#1a1a1a] border-2 border-[#ffd700]/50 rounded-xl px-4 py-2 sm:px-6 sm:py-4 hover:border-[#ffd700] transition-all cursor-default'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className='text-[#ffd700] font-bold text-base sm:text-lg mb-0.5 sm:mb-1'>1x</p>
                  <p className='text-gray-400 text-xs sm:text-sm'>Hackathon Winner</p>
                </motion.div>
              </div>

              {/* Description - Enhanced formatting */}
              <div className='space-y-4 sm:space-y-5 md:space-y-6'>
                <p className='text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed break-words'>
                  Aspiring full-stack developer based in Toronto, currently in my second year of studying Computer Science. 
                  Passionate about learning, experimenting with new technologies, and creating applications that make an impact.
                </p>
                
                <p className='text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed break-words'>
                  Before transitioning to tech, I worked in sales at GUESS? and Urban Planet, where I exceeded targets by understanding 
                  customer needs and solving problems quickly. These skills now translate to creating intuitive user experiences and 
                  debugging complex issues.
                </p>

                {/* Quick Stats for Recruiters */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4'>
                  <div className='bg-[#0a0a0a] border border-[#ffd700]/30 rounded-lg p-2 sm:p-3 md:p-4 text-center'>
                    <p className='text-[#ffd700] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>5+</p>
                    <p className='text-gray-400 text-xs sm:text-sm mt-1'>Projects</p>
                  </div>
                  <div className='bg-[#0a0a0a] border border-[#ffd700]/30 rounded-lg p-2 sm:p-3 md:p-4 text-center'>
                    <p className='text-[#ffd700] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>15+</p>
                    <p className='text-gray-400 text-xs sm:text-sm mt-1'>Technologies</p>
                  </div>
                  <div className='bg-[#0a0a0a] border border-[#ffd700]/30 rounded-lg p-2 sm:p-3 md:p-4 text-center'>
                    <p className='text-[#ffd700] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>2nd</p>
                    <p className='text-gray-400 text-xs sm:text-sm mt-1'>Year CS</p>
                  </div>
                  <div className='bg-[#0a0a0a] border border-[#ffd700]/30 rounded-lg p-2 sm:p-3 md:p-4 text-center'>
                    <p className='text-[#ffd700] text-sm sm:text-base md:text-lg lg:text-xl font-bold break-words'>Open to</p>
                    <p className='text-gray-400 text-xs sm:text-sm mt-1 break-words'>Internships 2026</p>
                  </div>
                </div>

                <p className='text-[#ffd700] text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed italic break-words'>
                  Excited to bring my problem-solving mindset and rapid learning ability to a development team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");


