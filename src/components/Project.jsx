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
  problemItSolves,
  category,
}) => {
  return (
    <motion.div whileInView={{ opacity: 1 , transform : 'none'}} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full ${category === "coming-soon" ? "opacity-70" : ""}`}
      >
        {/* Project Image/Icon for Coming Soon */}
        {category === "coming-soon" && image && (
          <div className='mb-4 flex justify-center items-center h-32 bg-[#0a0a0a] rounded-xl overflow-hidden'>
            <img
              src={typeof image === 'string' ? image : (image?.src || image?.default?.src || image)}
              alt={name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}
        
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

        {/* Problem it solves */}
        {problemItSolves && (
          <div className='content mb-4'>
            <p className='text-white font-semibold text-[15px] mb-2'>Problem it solves:</p>
            <p className='text-secondary text-[14px]' style={{textAlign:'justify'}}>{problemItSolves}</p>
          </div>
        )}

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
    let filtered = [];
    
    if (selected === "all") {
      // Show all projects EXCEPT coming-soon - SIMPLE AND EXPLICIT
      filtered = allProjects.filter(project => {
        return project && project.name && project.category !== "coming-soon";
      });
    } else if (selected === "coming-soon") {
      // Show ONLY coming-soon projects - SIMPLE AND EXPLICIT
      filtered = allProjects.filter(project => {
        return project && project.name && project.category === "coming-soon";
      });
    } else {
      // Show projects matching the selected category
      filtered = allProjects.filter(project => {
        return project && project.category === selected;
      });
    }
    
    setData(filtered);
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
          data
            .filter(project => {
              // Final safety check at render time
              if (selected === "all" && project.category === "coming-soon") {
                return false;
              }
              if (selected === "coming-soon" && project.category !== "coming-soon") {
                return false;
              }
              return true;
            })
            .map((project, index) => (
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

      {/* CTA Section for Recruiters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-[#ffd700]/10 to-[#ffed4e]/10 border-2 border-[#ffd700]/30 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
            Open to New Opportunities
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6">
            Looking for a motivated developer to join your team? Let's discuss how I can contribute to your projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#ffd700]/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/Nehman_Rahimi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#ffd700] text-[#ffd700] font-bold rounded-xl hover:bg-[#ffd700] hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </div>
        </div>
      </motion.div>

      </motion.div>
      </div>

    </>
  );
};

export default SectionWrapper(Project, "project");