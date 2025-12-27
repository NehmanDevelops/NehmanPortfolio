import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
        {experience.link && experience.link !== "#" && (
          <a href={experience.link} className="align-center flex justify-center blue-text-gradient mt-3" target="_blank" rel="noopener noreferrer">
            LINK
          </a>
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Filter to show all sales and related experience (excluding highlighted RBC Academy card)
  const allExperiences = experiences.filter(exp => 
    (exp.title.includes("Sales") || exp.title.includes("Safety") || exp.title.includes("Retail") || exp.title.includes("Certification") || exp.title.includes("Food")) && !exp.isHighlighted
  );

  // Show first 4 experiences initially, rest when "View More" is clicked
  const displayedExperiences = showMore ? allExperiences : allExperiences.slice(0, 4);
  const hasMore = allExperiences.length > 4;

  return (
    <>
      <motion.div id="experience" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Professional Background
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Experience
        </h2>
      </motion.div>

      <div className='mt-6 sm:mt-8 md:mt-12 flex flex-col gap-4 sm:gap-5 md:gap-6'>
        <AnimatePresence>
          {displayedExperiences.map((experience, index) => (
            <motion.div
              key={`${experience.company_name}-${experience.title}-${index}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#ffd700]/30 rounded-2xl p-6 md:p-8 hover:border-[#ffd700]/60 hover:shadow-xl hover:shadow-[#ffd700]/20 transition-all overflow-hidden"
            >
              {experience.isHighlighted ? (
                <>
                  <div className="mb-4">
                    <p className='text-gray-300 text-base mb-4'>{experience.date}</p>
                  </div>
                  <ul className='mt-5 space-y-4'>
                    {experience.points.map((point, idx) => (
                      <li key={idx} className='text-white text-lg md:text-xl leading-relaxed flex items-start'>
                        <span className="text-[#ffd700] mr-4 mt-1.5 font-bold text-xl">•</span>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                    <div className="flex-1">
                      <h3 className='text-white text-2xl md:text-3xl font-bold mb-2'>{experience.title}</h3>
                      <p className='text-[#ffd700] text-lg md:text-xl font-semibold mt-1'>{experience.company_name}</p>
                      <p className='text-gray-300 text-base mt-1'>{experience.date}</p>
                    </div>
                  </div>
                  <ul className='mt-5 space-y-4'>
                    {experience.points.map((point, idx) => (
                      <li key={idx} className='text-white text-lg md:text-xl leading-relaxed flex items-start'>
                        <span className="text-[#ffd700] mr-4 mt-1.5 font-bold text-xl">•</span>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#ffd700]/50 transition-all transform hover:scale-105"
            >
              {showMore ? "View Less" : "View More"}
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");