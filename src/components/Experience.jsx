import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

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
  // Filter to show all sales and related experience (excluding highlighted RBC Academy card)
  const allExperiences = experiences.filter(exp => 
    (exp.title.includes("Sales") || exp.title.includes("Safety") || exp.title.includes("Retail") || exp.title.includes("Certification")) && !exp.isHighlighted
  );

  return (
    <>
      <motion.div id="experience" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Professional Background
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Experience - <span className="bg-[#ffd700] text-black px-4 py-2 rounded-lg text-4xl">RBC ACADEMY</span>
        </h2>
      </motion.div>

      <div className='mt-12 flex flex-col gap-6'>
        {allExperiences.map((experience, index) => (
          <div key={`experience-${index}`} className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-6 hover:border-[#ffd700]/60 transition-all">
            {experience.isHighlighted ? (
              <>
                <div className="mb-4">
                  <p className='text-gray-400 text-sm mb-4'>{experience.date}</p>
                </div>
                <ul className='mt-4 space-y-2'>
                  {experience.points.map((point, idx) => (
                    <li key={idx} className='text-gray-300 text-sm flex items-start'>
                      <span className="text-[#ffd700] mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className='text-white text-xl font-bold'>{experience.title}</h3>
                    <p className='text-[#ffd700] text-base font-semibold mt-1'>{experience.company_name}</p>
                    <p className='text-gray-400 text-sm'>{experience.date}</p>
                  </div>
                </div>
                <ul className='mt-4 space-y-2'>
                  {experience.points.map((point, idx) => (
                    <li key={idx} className='text-gray-300 text-sm flex items-start'>
                      <span className="text-[#ffd700] mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");