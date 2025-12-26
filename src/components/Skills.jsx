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
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ],
  "Frontend Frameworks": [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  ],
  "Databases": [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  ],
  "Tools & DevOps": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
  "Cloud & AI/ML": [
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenAI API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" },
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
    <div className="mt-12 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ffd700] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffd700] rounded-full blur-3xl"></div>
      </div>

      <motion.div variants={textVariant()} className={`${styles.padding} min-h-[200px] relative z-10`}>
        <p className={styles.sectionSubText}>My Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Tabs */}
      <div className={`${styles.paddingX} flex justify-center gap-6 mb-16 relative z-10`}>
        <motion.button
          onClick={() => setActiveTab("technical")}
          className={`px-10 py-4 rounded-xl font-bold text-lg transition-all relative overflow-hidden ${
            activeTab === "technical"
              ? "bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black shadow-lg shadow-[#ffd700]/50"
              : "bg-[#1a1a1a] text-white border-2 border-[#ffd700]/30 hover:border-[#ffd700]/60 hover:bg-[#1a1a1a]/80"
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Technical Skills</span>
          {activeTab === "technical" && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#ffed4e]"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
        <motion.button
          onClick={() => setActiveTab("soft")}
          className={`px-10 py-4 rounded-xl font-bold text-lg transition-all relative overflow-hidden ${
            activeTab === "soft"
              ? "bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black shadow-lg shadow-[#ffd700]/50"
              : "bg-[#1a1a1a] text-white border-2 border-[#ffd700]/30 hover:border-[#ffd700]/60 hover:bg-[#1a1a1a]/80"
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Soft Skills</span>
          {activeTab === "soft" && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#ffed4e]"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      </div>

      {/* Content */}
      <div className={`${styles.paddingX} pb-20 relative z-10`}>
        {activeTab === "technical" ? (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className="space-y-16"
          >
            {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
              <motion.div 
                key={category} 
                className="mb-12"
                variants={fadeIn("up", "spring", categoryIndex * 0.1, 0.75)}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#ffd700] to-[#ffed4e] rounded-full"></div>
                  <h3 className="text-[#ffd700] text-3xl md:text-4xl font-bold">{category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn("up", "spring", categoryIndex * 0.1 + index * 0.05, 0.75)}
                      className="relative group"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#ffd700]/30 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-[#ffd700]/70 hover:shadow-2xl hover:shadow-[#ffd700]/30 transition-all cursor-pointer">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <p className="text-white text-sm font-semibold text-center group-hover:text-[#ffd700] transition-colors">{skill.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#ffd700] to-[#ffed4e] rounded-full"></div>
                <h3 className="text-[#ffd700] text-3xl md:text-4xl font-bold">Professional Competencies</h3>
                <div className="w-1 h-8 bg-gradient-to-b from-[#ffd700] to-[#ffed4e] rounded-full"></div>
              </div>
              <p className="text-gray-300 text-lg">The interpersonal skills that complement my technical expertise</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="relative group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#ffd700]/30 rounded-3xl p-8 hover:border-[#ffd700]/70 hover:shadow-2xl hover:shadow-[#ffd700]/30 transition-all">
                    <motion.div 
                      className="text-5xl mb-6"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="text-white text-2xl font-bold mb-3 group-hover:text-[#ffd700] transition-colors">{skill.title}</h4>
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="mt-16 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/10 via-transparent to-[#ffd700]/10 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#ffd700]/40 rounded-3xl p-10 md:p-12 max-w-5xl mx-auto shadow-xl shadow-[#ffd700]/20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="text-[#ffd700] text-2xl md:text-3xl font-bold">Always Learning</h4>
                </div>
                <p className="text-gray-300 text-lg md:text-xl text-center leading-relaxed">
                  Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
                  advanced AI/ML concepts, cloud architecture patterns, and emerging web technologies to stay 
                  at the forefront of software development.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");

