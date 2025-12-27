import React from "react";
import { motion } from "framer-motion";
import { GiWeightLiftingUp, GiFruitBowl, GiTShirt } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const BeyondTheCode = () => {
  return (
    <div className={`w-full bg-black relative z-10 -mt-4 md:-mt-8 ${styles.padding} overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd700] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ffd700] rounded-full blur-3xl"></div>
      </div>

      <motion.div variants={textVariant()} initial="hidden" animate="show" className="mb-8 sm:mb-12 md:mb-16 relative z-10">
        <p className={styles.sectionSubText}>Personal Interests</p>
        <h2 className={styles.sectionHeadText}>Beyond the Code.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className="w-full relative z-10"
      >
        <div className='relative w-full max-w-7xl mx-auto'>
          {/* Hero Image/Visual Element */}
          <motion.div 
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="mb-6 sm:mb-8 md:mb-12 flex justify-center"
          >
            <div className="relative w-full max-w-4xl h-32 sm:h-40 md:h-48 lg:h-64 rounded-3xl overflow-hidden border-2 border-[#ffd700]/30">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/20 via-[#ffd700]/10 to-[#ffd700]/20"></div>
              
              {/* Animated pattern background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(255, 215, 0, 0.1) 10px,
                    rgba(255, 215, 0, 0.1) 20px
                  )`
                }}></div>
              </div>
              
              {/* Content overlay */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center px-8">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block"
                  >
                    <div className="flex items-center gap-4 justify-center mb-4">
                      <GiWeightLiftingUp className="text-[#ffd700] text-4xl md:text-5xl" />
                      <GiFruitBowl className="text-[#ffd700] text-4xl md:text-5xl" />
                      <FaGamepad className="text-[#ffd700] text-4xl md:text-5xl" />
                      <GiTShirt className="text-[#ffd700] text-4xl md:text-5xl" />
                    </div>
                  </motion.div>
                  <p className="text-white text-xl md:text-2xl font-medium">The passions and interests that fuel my creativity and drive</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Interest Cards - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Weightlifting */}
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-[#1a1a1a] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd700] rounded-full blur-3xl"></div>
                </div>
                
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ffd700]/30"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GiWeightLiftingUp className="text-black text-2xl sm:text-3xl md:text-4xl" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-[#ffd700] text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#ffed4e] transition-colors">Weightlifting</h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                    I love weightlifting, regularly hitting the gym, and building strength. The discipline of consistent progress keeps me focused and motivated in everything I do.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Eating Healthy */}
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-[#1a1a1a] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffd700] rounded-full blur-3xl"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ffd700]/30"
                      whileHover={{ scale: 1.15, rotate: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GiFruitBowl className="text-black text-4xl" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-[#ffd700] text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#ffed4e] transition-colors">Eating Healthy</h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                    I enjoy cooking and eating clean, meal prepping to hit my protein goals and stay energized.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video Games */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-[#1a1a1a] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#ffd700] rounded-full blur-3xl"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ffd700]/30"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaGamepad className="text-black text-4xl" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-[#ffd700] text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#ffed4e] transition-colors">Video Games</h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                    Gaming has been a passion since I was a kid. It sparked my curiosity about how things work behind the scenes and played a big role in getting me into programming.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Fashion */}
            <motion.div
              variants={fadeIn("up", "spring", 0.8, 0.75)}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-[#1a1a1a] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ffd700] rounded-full blur-3xl"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ffd700]/30"
                      whileHover={{ scale: 1.15, rotate: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GiTShirt className="text-black text-4xl" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-[#ffd700] text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#ffed4e] transition-colors">Fashion</h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                    I like expressing myself through style, putting together clean, thoughtful outfits. It's a fun creative outlet and a reminder that details matter, on and off the screen.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(BeyondTheCode, "beyond-the-code");

