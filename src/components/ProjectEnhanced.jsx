import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { allProjects } from "../constants";
import { BsFolder, BsFilter } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./Project.scss";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
  isHackathonWinner,
  teamMembers,
  isVideo,
  category,
  problemItSolves,
  mediaObjectPosition,
  mediaHeightClass,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full bg-gradient-to-br from-[#1f1f1f] to-[#1a1a1a] border-2 border-[#ffd700]/40 rounded-3xl overflow-hidden hover:border-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/40 transition-all group flex flex-col">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Image/Video Section */}
        {image && (
          <div className={`relative w-full ${mediaHeightClass || "h-64"} overflow-hidden bg-[#0a0a0a]`}>
            {isVideo || (typeof image === 'string' && (image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.mov'))) || (image?.src && typeof image.src === 'string' && (image.src.endsWith('.mp4') || image.src.endsWith('.webm') || image.src.endsWith('.mov'))) ? (
              <video
                src={typeof image === 'string' ? image : (image?.src || image?.default?.src || image)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={mediaObjectPosition ? { objectPosition: mediaObjectPosition } : undefined}
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  e.target.style.background = '#1a1a1a';
                }}
              />
            ) : (
              <img
                src={typeof image === 'string' ? image : (image?.src || image?.default?.src || image)}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={mediaObjectPosition ? { objectPosition: mediaObjectPosition } : undefined}
                onError={(e) => {
                  e.target.style.background = '#1a1a1a';
                }}
              />
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            {category && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 bg-[#ffd700] text-black text-xs font-bold rounded-full uppercase">
                  {category === "fullstack" ? "Full Stack" : category === "coming-soon" ? "Coming Soon" : category}
                </span>
              </div>
            )}
            
            {/* Hackathon Winner Badge */}
            {isHackathonWinner && (
              <div className="absolute top-4 left-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] rounded-full shadow-lg shadow-[#ffd700]/50"
                >
                  <span className="text-xl">🏆</span>
                  <span className="text-black font-bold text-xs">HACKATHON WINNER</span>
                </motion.div>
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="relative z-10 flex flex-col flex-1 p-6 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a]">
          {/* Title */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-white font-bold text-xl lg:text-2xl group-hover:text-[#ffd700] transition-colors flex-1 pr-2">
              {name}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              {source_link && source_link !== "#" && source_link.trim() !== "" && (
                <motion.a
                  href={source_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#ffd700]/20 border border-[#ffd700] flex justify-center items-center cursor-pointer hover:bg-[#ffd700] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Live Demo"
                >
                  <HiOutlineExternalLink className="w-4 h-4 text-[#ffd700] group-hover:text-black transition-colors" />
                </motion.a>
              )}
              {source_code_link && source_code_link !== "#" && source_code_link.trim() !== "" && (
                <motion.a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#ffd700]/20 border border-[#ffd700] flex justify-center items-center cursor-pointer hover:bg-[#ffd700] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="GitHub"
                >
                  <AiOutlineGithub className="w-4 h-4 text-[#ffd700] group-hover:text-black transition-colors" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-white transition-colors flex-1">
            {description}
          </p>

          {/* Problem it solves */}
          {problemItSolves && (
            <div className="mb-4 pb-4 border-b border-[#ffd700]/20">
              <p className="text-[#ffd700] font-semibold text-sm mb-2">Problem it solves:</p>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                {problemItSolves}
              </p>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#ffd700]/30 border-2 border-[#ffd700]/60 hover:border-[#ffd700] hover:bg-[#ffd700]/40 transition-all shadow-sm shadow-[#ffd700]/20"
              >
                {tag.name}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 bg-[#2a2a2a] border-2 border-gray-600">
                +{tags.length - 4} more
              </span>
            )}
          </div>

          {/* Team Members */}
          {teamMembers && teamMembers.length > 0 && (
            <div className="mt-auto pt-3 border-t border-[#ffd700]/20">
              <p className="text-gray-400 text-xs">
                <span className="text-[#ffd700] font-semibold">Team:</span> {teamMembers.join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Coming Soon Project Card Component
const ComingSoonCard = ({ project, index }) => {
  return (
    <motion.div
      key={`coming-soon-${project.name}-${index}`}
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#ffd700]/40 rounded-2xl p-6 hover:border-[#ffd700]/80 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all"
      whileHover={{ y: -5 }}
    >
      {project.image && (
        <div className="mb-4 flex justify-center items-center h-32 bg-[#0a0a0a] rounded-xl overflow-hidden">
          <img
            src={typeof project.image === 'string' ? project.image : (project.image?.src || project.image?.default?.src || project.image)}
            alt={project.name}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-[#ffd700] rounded-full animate-pulse"></div>
        <span className="text-[#ffd700] text-xs font-semibold uppercase">WIP</span>
      </div>
      <h4 className="text-white font-bold text-xl mb-2">{project.name}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={`${project.name}-${tag.name}`}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#ffd700]/30 border-2 border-[#ffd700]/60 hover:border-[#ffd700] hover:bg-[#ffd700]/40 transition-all shadow-sm shadow-[#ffd700]/20"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const ProjectEnhanced = () => {
  const [selected, setSelected] = useState("all");

  const filterOptions = [
    { id: "all", title: "All", icon: BsFolder },
    { id: "fullstack", title: "Full Stack", icon: BsFilter },
    { id: "frontend", title: "Frontend", icon: BsFilter },
    { id: "backend", title: "Backend", icon: BsFilter },
    { id: "coming-soon", title: "WIP/Coming Soon", icon: BsFilter },
  ];

  // Get all coming-soon projects
  const comingSoonProjects = useMemo(() => {
    return allProjects.filter((project) => {
      return project && 
             project.name && 
             project.category === "coming-soon";
    });
  }, []);

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    if (selected === "all") {
      // Exclude coming-soon from "All" view
      return allProjects.filter((project) => {
        return project && 
               project.name && 
               project.category !== "coming-soon";
      });
    }

    if (selected === "coming-soon") {
      // Return coming-soon projects
      return comingSoonProjects;
    }

    // Return projects matching the selected category
    return allProjects.filter((project) => {
      return project && 
             project.name && 
             project.category === selected;
    });
  }, [selected, comingSoonProjects]);

  return (
    <div className="w-full py-8 sm:py-12 md:py-20">
      <motion.div variants={textVariant()} className="mb-6 sm:mb-8 md:mb-12">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
        <p className={`${styles.sectionSubText} mt-4 max-w-4xl text-gray-400 text-base`}>
          A collection of my work demonstrating technical expertise and creative problem-solving.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="mb-6 sm:mb-8 md:mb-12 flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
        {filterOptions.map((option) => {
          const Icon = option.icon;
          const isActive = selected === option.id;
          return (
            <motion.button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                isActive
                  ? "bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black shadow-lg shadow-[#ffd700]/50"
                  : "bg-[#1a1a1a] text-white border border-[#ffd700]/30 hover:border-[#ffd700]/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-lg" />
              <span>{option.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {selected === "coming-soon" ? (
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          <motion.div variants={textVariant()}>
            <h3 className="text-[#ffd700] text-2xl sm:text-3xl font-bold mb-2">WIP / Coming Soon</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8">Projects currently in development</p>
          </motion.div>
          {comingSoonProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {comingSoonProjects.map((project, index) => (
                <ComingSoonCard 
                  key={`coming-soon-project-${project.name}-${index}`}
                  project={project} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects in development at the moment.</p>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              if (!project || !project.name) return null;
              return (
                <ProjectCard
                  key={`project-${project.name}-${index}-${selected}`}
                  index={index}
                  {...project}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl">No projects found in this category.</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(ProjectEnhanced, "project");

