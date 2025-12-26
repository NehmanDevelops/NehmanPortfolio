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
}) => (
  <div className='w-full'>
    {/* Education Header */}
    <div className='flex items-center gap-4 mb-8'>
      <div className='w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-lg flex items-center justify-center'>
        <BsMortarboard className='text-black text-2xl md:text-3xl' />
      </div>
      <h3 className='text-white text-3xl md:text-4xl font-bold'>Education</h3>
    </div>

    {/* Main Content */}
    <div className='flex items-start gap-10 md:gap-12'>
      {/* University Logo */}
      <div className='flex-shrink-0'>
        <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg border-2 border-[#ffd700]/30'>
          <img
            src="/yorkicon.png"
            alt={name}
            className='w-full h-full object-contain'
            onError={(e) => {
              console.error('York University logo failed to load');
              e.target.style.background = '#1a1a1a';
            }}
          />
        </div>
      </div>

      {/* Education Details */}
      <div className='flex-1'>
        {/* University Name */}
        <h4 className='text-white text-2xl md:text-3xl font-bold mb-3'>{name}</h4>
        
        {/* Degree */}
        <p className='text-[#ffd700] text-xl md:text-2xl font-semibold mb-2'>{degree}</p>
        
        {/* Stream */}
        {stream && (
          <p className='text-[#ffd700] text-lg md:text-xl font-medium mb-6'>{stream}</p>
        )}

        {/* Tags */}
        <div className='flex flex-wrap gap-3'>
          {location && (
            <div className='bg-black/50 border-2 border-[#ffd700]/30 rounded-xl px-5 py-3 flex items-center gap-2 hover:border-[#ffd700]/60 transition-all'>
              <MdLocationOn className='text-[#ffd700] text-lg' />
              <span className='text-white text-base font-medium'>{location}</span>
            </div>
          )}
          {graduationYear && (
            <div className='bg-black/50 border-2 border-[#ffd700]/30 rounded-xl px-5 py-3 hover:border-[#ffd700]/60 transition-all'>
              <span className='text-white text-base font-medium'>Expected Graduation: {graduationYear}</span>
            </div>
          )}
          {currentYear && (
            <div className='bg-black/50 border-2 border-[#ffd700]/30 rounded-xl px-5 py-3 hover:border-[#ffd700]/60 transition-all'>
              <span className='text-white text-base font-medium'>Current: {currentYear}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <div className={`-mt-16 bg-black relative z-10`}>
      <div
        className={`bg-black rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className={`-mt-20 justify-center pb-10 ${styles.paddingX}`}
      >
        <div className='bg-[#1a1a1a] rounded-3xl p-10 md:p-14 lg:p-16 w-full max-w-6xl mx-auto border-2 border-[#ffd700]/30 hover:border-[#ffd700]/50 transition-all shadow-lg shadow-[#ffd700]/10'>
          {educations.map((education, index) => (
            <EducationCard key={education.name} index={index} {...education} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
