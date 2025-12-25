'use client'

import { motion } from 'framer-motion'

const skillCategories = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
  'Backend': ['Node.js', 'Python', 'Express', 'Django', 'GraphQL'],
  'Database': ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
  'DevOps': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
  'Tools': ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'],
}

export default function DeveloperSkills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold text-software-gold mb-8">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 border border-software-gold/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-software-gold mb-4">
              {category}
            </h3>
            <div className="space-y-2">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="text-software-gold">→</span>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-black/40 border border-software-gold/30 rounded-lg p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-software-gold mb-4">
          Continuous Learning
        </h3>
        <div className="text-gray-300 space-y-2">
          <p>Always learning new technologies and improving my skills</p>
          <p>Committed to staying current with industry best practices</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

