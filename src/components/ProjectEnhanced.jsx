import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
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
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full"
    >
      <div className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-8 hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Image or Video */}
          {image && (
            <div className={`${name === "NehmanBot" ? "lg:w-1/4" : "lg:w-1/3"} flex-shrink-0`}>
              <div className={`relative w-full ${name === "NehmanBot" ? "h-48" : "h-64"} rounded-xl overflow-hidden border-2 border-[#ffd700]/20 bg-[#0a0a0a]`}>
                {isVideo || (typeof image === 'string' && (image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.mov'))) || (image?.src && typeof image.src === 'string' && (image.src.endsWith('.mp4') || image.src.endsWith('.webm') || image.src.endsWith('.mov'))) ? (
                  <video
                    src={typeof image === 'string' ? image : (image?.src || image?.default?.src || image)}
                    className={`w-full h-full ${name === "NehmanBot" ? "object-contain" : "object-cover"}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ display: 'block' }}
                    onError={(e) => {
                      console.error('Video failed to load for', name, ':', image, typeof image);
                      e.target.style.background = '#ffd700';
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                    }}
                  />
                ) : (
                  <img
                    src={typeof image === 'string' ? image : (image?.src || image?.default?.src || image)}
                    alt={name}
                    className={`w-full h-full ${name === "NehmanBot" ? "object-contain" : "object-cover"}`}
                    style={{ display: 'block' }}
                    onError={(e) => {
                      console.error('Image failed to load for', name, ':', image, typeof image);
                      console.error('Trying to use:', typeof image === 'string' ? image : (image?.src || image?.default?.src || image));
                      e.target.style.background = '#ffd700';
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully for', name);
                    }}
                  />
                )}
              </div>
            </div>
          )}

          {/* Right: Content */}
          <div className="flex-1">
            {/* Hackathon Winner Badge */}
            {isHackathonWinner && (
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] rounded-full shadow-lg shadow-[#ffd700]/50 animate-pulse">
                  <span className="text-2xl">🏆</span>
                  <span className="text-black font-bold text-sm md:text-base">1ST PLACE HACKATHON WINNER</span>
                </div>
              </div>
            )}
            
            {/* Title and Links */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-white font-bold text-2xl lg:text-3xl">{name}</h3>
              <div className="flex gap-3">
                {source_link && source_link !== "#" && source_link.trim() !== "" && (
                  <motion.a
                    href={source_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#ffd700]/20 border-2 border-[#ffd700] flex justify-center items-center cursor-pointer hover:bg-[#ffd700] transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Live Demo"
                  >
                    <HiOutlineExternalLink className="w-5 h-5 text-[#ffd700] group-hover:text-black transition-colors" />
                  </motion.a>
                )}
                {source_code_link && source_code_link !== "#" && source_code_link.trim() !== "" && (
                  <motion.a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#ffd700]/20 border-2 border-[#ffd700] flex justify-center items-center cursor-pointer hover:bg-[#ffd700] transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="GitHub"
                  >
                    <AiOutlineGithub className="w-5 h-5 text-[#ffd700] group-hover:text-black transition-colors" />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base lg:text-lg mb-6 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${tag.color} bg-[#ffd700]/10 border border-[#ffd700]/30`}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Team Members */}
            {teamMembers && teamMembers.length > 0 && (
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">
                  <span className="text-[#ffd700] font-semibold">Team:</span> {teamMembers.join(", ")}
                </p>
              </div>
            )}

            {/* Key Features - Only show for projects that need it */}
            {name === "PinPoint" && (
              <div className="space-y-2">
                <h4 className="text-[#ffd700] font-semibold text-lg mb-2">Key Features:</h4>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>Cheap Grocery Finder - Scans stores within 500km for lowest prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>Price Matcher with QR code generation for proof at checkout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>GrocyBot AI assistant for food-related questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>DAPR dynamic recipe system that adapts to local price changes</span>
                  </li>
                </ul>
              </div>
            )}
            
            {/* Key Features for PricePatrol */}
            {name === "PricePatrol" && (
              <div className="space-y-2 mt-4">
                <h4 className="text-[#ffd700] font-semibold text-lg mb-2">Key Features:</h4>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>Interactive map showing local grocery stores with color-coded price indicators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>User accounts and personalized favorite items tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>Google Maps integration for directions to stores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>Displays cheapest and most expensive prices with savings calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffd700] mr-2">•</span>
                    <span>Saves user-visited stores for personalized recommendations</span>
                  </li>
                </ul>
              </div>
            )}
            
            {/* Key Features for NehmanBot */}
            {name === "NehmanBot" && (
              <div className="space-y-2 mt-4">
                <h4 className="text-[#ffd700] font-semibold text-lg mb-2">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-[#ffd700] font-medium text-sm mb-2">🛠 Moderation</h5>
                    <ul className="space-y-1 text-gray-400 text-xs">
                      <li>• Kick, ban, purge, timeout, and mute commands</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[#ffd700] font-medium text-sm mb-2">📊 Statistics</h5>
                    <ul className="space-y-1 text-gray-400 text-xs">
                      <li>• Member count and active member tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[#ffd700] font-medium text-sm mb-2">🎵 Music</h5>
                    <ul className="space-y-1 text-gray-400 text-xs">
                      <li>• YouTube music playback with play/pause/resume/stop</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[#ffd700] font-medium text-sm mb-2">🎮 Games & Fun</h5>
                    <ul className="space-y-1 text-gray-400 text-xs">
                      <li>• Tic-Tac-Toe, dice rolling, poll creation</li>
                      <li>• AI poem generation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#ffd700]/20">
                  <p className="text-gray-400 text-xs">
                    <span className="text-[#ffd700] font-semibold">Hosting:</span> Runs 24/7 on Heroku cloud platform
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
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
    { id: "coming-soon", title: "Coming Soon", icon: BsFilter },
  ];

  const filteredProjects = useMemo(() => {
    if (selected === "all") {
      // Show every project (including backend/frontend/fullstack); keep order from constants
      return allProjects;
    }

    if (selected === "coming-soon") {
      return allProjects.filter((p) => p.category === "coming-soon");
    }

    return allProjects.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <div className="w-full py-20">
      <motion.div variants={textVariant()} className="mb-12">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
        <p className={`${styles.sectionSubText} mt-4 max-w-4xl text-gray-400`}>
          Here are my featured projects showcasing full-stack development skills, problem-solving abilities, 
          and attention to user experience. Each project includes live demos, GitHub repositories, and 
          detailed documentation of the tech stack and challenges overcome.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap gap-4 justify-center">
        {filterOptions.map((option) => {
          const Icon = option.icon;
          const isActive = selected === option.id;
          return (
            <motion.button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
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
        <div className="space-y-8">
          <motion.div variants={textVariant()} className="mb-8">
            <h3 className="text-[#ffd700] text-3xl font-bold mb-4">Coming Soon:</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`coming-soon-${index}`}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-6 hover:border-[#ffd700]/60 transition-all opacity-60"
              >
                <h4 className="text-white font-bold text-xl mb-2">{project.name}</h4>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.name}-${tag.name}`}
                      className={`px-3 py-1 rounded text-xs ${tag.color} bg-[#ffd700]/10 border border-[#ffd700]/30`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(ProjectEnhanced, "project");

