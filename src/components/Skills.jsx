import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import "./Skills.scss";

const technicalSkills = {
  "Programming Languages": [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  ],
  "Databases & Tools": [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ],
};

const softSkills = [
  {
    icon: "💡",
    title: "Problem Solving",
    description: "Analytical thinking and creative solutions",
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    description: "Effective communication and teamwork",
  },
  {
    icon: "👑",
    title: "Leadership",
    description: "Project management and team guidance",
  },
  {
    icon: "💼",
    title: "Sales & Business Development",
    description: "Client relations, deal closing, and revenue growth",
  },
  {
    icon: "💬",
    title: "Communication",
    description: "Clear technical and business communication",
  },
  {
    icon: "🎯",
    title: "Critical Thinking",
    description: "Strategic planning and decision making",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div className="mt-12 bg-black">
      <motion.div variants={textVariant()} className={`${styles.padding} min-h-[200px]`}>
        <p className={styles.sectionSubText}>My Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Tabs */}
      <div className={`${styles.paddingX} flex justify-center gap-4 mb-12`}>
        <motion.button
          onClick={() => setActiveTab("technical")}
          className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all ${
            activeTab === "technical"
              ? "bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black shadow-lg shadow-[#ffd700]/50"
              : "bg-[#1a1a1a] text-white border-2 border-[#ffd700]/30 hover:border-[#ffd700]/60"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Technical Skills
        </motion.button>
        <motion.button
          onClick={() => setActiveTab("soft")}
          className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all ${
            activeTab === "soft"
              ? "bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black shadow-lg shadow-[#ffd700]/50"
              : "bg-[#1a1a1a] text-white border-2 border-[#ffd700]/30 hover:border-[#ffd700]/60"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Soft Skills
        </motion.button>
      </div>

      {/* Content */}
      <div className={`${styles.paddingX} pb-20`}>
        {activeTab === "technical" ? (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className="space-y-12"
          >
            {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
              <div key={category} className="mb-12">
                <h3 className="text-[#ffd700] text-2xl font-bold mb-6">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn("up", "spring", categoryIndex * 0.1 + index * 0.1, 0.75)}
                      className="skill-card bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-xl p-4 flex flex-col items-center justify-center hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all cursor-pointer group"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <p className="text-white text-sm font-medium text-center">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className="space-y-8"
          >
            <h3 className="text-[#ffd700] text-2xl font-bold mb-6 text-center">Professional Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="soft-skill-card bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-xl p-6 hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-white text-xl font-bold mb-2">{skill.title}</h4>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="mt-12 bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-xl p-8 max-w-4xl mx-auto"
            >
              <h4 className="text-[#ffd700] text-xl font-bold mb-4 text-center">Always Learning</h4>
              <p className="text-gray-300 text-center leading-relaxed">
                Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
                advanced AI/ML concepts, cloud architecture patterns, and emerging web technologies to stay 
                at the forefront of software development.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");

