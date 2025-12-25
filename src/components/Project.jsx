import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import {list} from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { allProjects } from "../constants";
import ProjectList from "./ProjectList";
import "./Project.scss";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
}) => {
  return (
    <motion.div whileInView={{ opacity: 1 , transform : 'none'}} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full'
      >
        {/* Project Name and Links */}
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          <div className='flex gap-2'>
            {source_link && source_link !== "#" && (
              <div
                onClick={() => window.open(source_link, "_blank")}
                className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#ffd700] transition-colors'
              >
                <img
                  src={demo}
                  alt='demo'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
            {source_code_link && source_code_link !== "#" && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#ffd700] transition-colors'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className='content mb-4'>
          <p className='text-secondary text-[14px]' style={{textAlign:'justify'}}>{description}</p>
        </div>

        {/* Tags */}
        <div className='content mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Project = () => {

  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selected === "all") {
      setData(allProjects);
    } else {
      setData(allProjects.filter(project => project.category === selected));
    }
  }, [selected]);

  return (
    <>
      <motion.div whileInView={{ opacity: 1 , transform : 'none'}} variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        <p className={`${styles.sectionSubText} mt-3 max-w-3xl`}>
          Detailed case studies of my coding work. Each project includes live demos, GitHub links, 
          tech stack explanations, and challenges solved. This is the core of my portfolio—where 
          technical skills meet real-world problem solving.
        </p>
      </motion.div>

      <div className='project w-full flex'>
        <motion.div whileInView={{ opacity: 1 , transform : 'none'}}
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px] w-full'
        >
        <ul>
        {list.map((item) => (
          <ProjectList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className='box mt-20 flex flex-wrap justify-center gap-7'>
        {data.length > 0 ? (
          data.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))
        ) : (
          <p className='text-white text-lg mt-10'>No projects in this category yet.</p>
        )}
      </div>

      </motion.div>
      </div>

    </>
  );
};

export default SectionWrapper(Project, "project");