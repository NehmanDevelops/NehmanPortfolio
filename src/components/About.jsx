import React from "react";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import "./About.scss";

const About = () => {
  return (
    <div className={`mt-8 bg-black relative z-10`}>
      <div
        className={`bg-black rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className={`-mt-20 justify-center pb-8 ${styles.paddingX}`}
      >
        <div className='about-card bg-[#1a1a1a] rounded-3xl p-10 md:p-12 w-full max-w-6xl mx-auto border-2 border-[#ffd700]/30'>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 items-start'>
            {/* Photo Section - Larger */}
            <div className='flex-shrink-0 flex justify-center lg:justify-start'>
              <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-visible'>
                {/* Gold Gradient Border Ring with glow */}
                <div 
                  className="absolute inset-0 rounded-full p-2"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700, #ffed4e, #ffd700, #b8860b)',
                    boxShadow: '0 0 60px rgba(255, 215, 0, 0.6), 0 0 100px rgba(255, 215, 0, 0.4)',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    {/* Photo - Add your photo to public/about-photo.jpg or update src below */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-8xl text-gray-600">📸</span>
                    </div>
                    {/* 
                    <img
                      src="/about-photo.jpg"
                      alt="Nehman Rahimi"
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className='flex-1 w-full'>
              {/* Badges */}
              <div className='flex flex-wrap gap-4 mb-8'>
                {/* Location Badge */}
                <div className='bg-[#1a1a1a] border-2 border-[#ffd700]/50 rounded-xl px-6 py-4 hover:border-[#ffd700] transition-all'>
                  <div className='flex items-center gap-2 mb-1'>
                    <MdLocationOn className='text-[#ffd700] text-xl' />
                    <p className='text-[#ffd700] font-bold text-lg'>Toronto</p>
                  </div>
                  <p className='text-gray-400 text-sm'>Ontario, Canada</p>
                </div>

                {/* Role Badge */}
                <div className='bg-[#1a1a1a] border-2 border-[#ffd700]/50 rounded-xl px-6 py-4 hover:border-[#ffd700] transition-all'>
                  <p className='text-[#ffd700] font-bold text-lg mb-1'>Full-Stack</p>
                  <p className='text-gray-400 text-sm'>Developer</p>
                </div>
              </div>

              {/* Description - Concise */}
              <div className='space-y-5'>
                <p className='text-gray-200 text-lg md:text-xl leading-relaxed'>
                  Aspiring full-stack developer based in Toronto, currently in my second year of studying Computer Science. 
                  Passionate about learning, experimenting with new technologies, and creating applications that make an impact.
                </p>
                
                <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                  Before transitioning to tech, I worked in sales at GUESS? and Urban Planet, where I exceeded targets by understanding 
                  customer needs and solving problems quickly. These skills now translate to creating intuitive user experiences and 
                  debugging complex issues.
                </p>

                <p className='text-[#ffd700] text-base md:text-lg font-medium leading-relaxed'>
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


