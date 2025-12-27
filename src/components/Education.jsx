import React from "react";
import { motion } from "framer-motion";
import { BsMortarboard } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { GiWeightLiftingUp, GiFruitBowl } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import "./Education.scss";

const EducationCard = ({
  index,
  name,
  degree,
  stream,
  location,
  graduationYear,
  currentYear,
  image,
  certificateImage,
}) => {
  const isRBC = name === "RBC Academy";
  
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className={`w-full group ${isRBC ? 'max-w-2xl ml-auto' : ''}`}
    >
      <div className={`bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl ${isRBC ? 'p-4 md:p-5' : 'p-6 md:p-8'} border-2 border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#ffd700]/20 relative overflow-hidden`}>
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className={`relative z-10 flex ${isRBC ? 'flex-row items-center' : 'flex-col md:flex-row items-start'} gap-4 md:gap-6`}>
          {/* University Logo or Certificate */}
          <div className='flex-shrink-0'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`${isRBC ? 'w-32 h-32 md:w-36 md:h-36' : certificateImage ? 'w-full max-w-xs md:max-w-sm lg:max-w-md' : 'w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44'} bg-white rounded-2xl flex items-center justify-center ${isRBC ? 'p-2' : 'p-3 md:p-4'} shadow-xl border-4 border-[#ffd700] group-hover:border-[#ffed4e] transition-all`}>
              {certificateImage ? (
                <img
                  src={certificateImage}
                  alt={`${name} Certificate`}
                  className='w-full h-full object-contain rounded-lg'
                  onError={(e) => {
                    console.error(`${name} certificate failed to load`);
                    e.target.style.background = '#1a1a1a';
                  }}
                />
              ) : (
                <img
                  src={typeof image === 'string' ? image : (image?.src || image?.default?.src || image || "/yorkicon.png")}
                  alt={name}
                  className='w-full h-full object-contain'
                  onError={(e) => {
                    console.error(`${name} logo failed to load`);
                    e.target.style.background = '#1a1a1a';
                  }}
                />
              )}
            </motion.div>
          </div>

          {/* Education Details */}
          <div className={`${isRBC ? 'flex-1' : 'flex-1 w-full'}`}>
            {/* University Name */}
            <h4 className={`text-white ${isRBC ? 'text-sm sm:text-base md:text-lg' : certificateImage ? 'text-base sm:text-lg md:text-xl' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'} font-bold mb-2 group-hover:text-[#ffd700] transition-colors break-words`}>
              {name}
            </h4>
            
            {/* Degree */}
            <p className={`text-[#ffd700] ${isRBC ? 'text-xs sm:text-sm' : certificateImage ? 'text-xs sm:text-sm md:text-base' : 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'} font-semibold mb-1 break-words`}>
              {degree}
            </p>
            
            {/* Stream */}
            {stream && (
              <p className='text-[#ffd700]/80 text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-3 sm:mb-4 break-words'>
                {stream}
              </p>
            )}

            {/* Tags */}
            <div className={`flex flex-wrap gap-2 ${isRBC ? 'mt-2' : 'mt-4'} md:gap-3`}>
              {location && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-r from-black/60 to-black/40 border-2 border-[#ffd700]/30 rounded-lg ${isRBC ? 'px-3 py-1.5' : 'px-4 py-2'} flex items-center gap-2 hover:border-[#ffd700] hover:bg-[#ffd700]/10 transition-all cursor-default`}>
                  <MdLocationOn className={`text-[#ffd700] ${isRBC ? 'text-sm' : 'text-base md:text-lg'} flex-shrink-0`} />
                  <span className={`text-white ${isRBC ? 'text-xs' : 'text-xs sm:text-sm md:text-base'} font-medium break-words`}>{location}</span>
                </motion.div>
              )}
              {graduationYear && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-r from-black/60 to-black/40 border-2 border-[#ffd700]/30 rounded-lg ${isRBC ? 'px-3 py-1.5' : 'px-4 py-2'} hover:border-[#ffd700] hover:bg-[#ffd700]/10 transition-all cursor-default`}>
                  <span className={`text-white ${isRBC ? 'text-xs' : 'text-xs sm:text-sm md:text-base'} font-medium break-words`}>
                    {currentYear ? 'Expected Graduation' : 'Graduated'}: <span className='text-[#ffd700]'>{graduationYear}</span>
                  </span>
                </motion.div>
              )}
              {currentYear && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-r from-black/60 to-black/40 border-2 border-[#ffd700]/30 rounded-lg ${isRBC ? 'px-3 py-1.5' : 'px-4 py-2'} hover:border-[#ffd700] hover:bg-[#ffd700]/10 transition-all cursor-default`}>
                  <span className={`text-white ${isRBC ? 'text-xs' : 'text-xs sm:text-sm md:text-base'} font-medium break-words`}>
                    Current: <span className='text-[#ffd700]'>{currentYear}</span>
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className={`-mt-16 bg-black relative z-10`}>
      <div
        className={`bg-black md:rounded-2xl ${styles.padding} min-h-[100px] md:min-h-[200px]`}
      >
        <motion.div variants={textVariant()} initial="hidden" animate="show" className="text-center md:text-left">
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className={`-mt-12 md:-mt-20 justify-center pb-6 sm:pb-8 md:pb-10 ${styles.paddingX}`}
      >
        <div className='w-full max-w-6xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8'>
          {educations.map((education, index) => (
            <EducationCard key={`${education.name}-${index}`} index={index} {...education} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
