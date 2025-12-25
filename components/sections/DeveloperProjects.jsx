'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    name: 'AI Chatbot',
    description: 'Intelligent chatbot using NLP and machine learning',
    tech: ['Python', 'TensorFlow', 'React', 'WebSocket'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture with microservices',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    github: '#',
    demo: '#',
  },
]

export default function DeveloperProjects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold text-software-gold mb-8">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="bg-black/40 border border-software-gold/30 rounded-lg p-6 hover:border-software-gold transition-colors cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-software-gold/20 text-software-gold text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="text-software-gold hover:text-white text-sm transition-colors"
              >
                → GitHub
              </a>
              <a
                href={project.demo}
                className="text-software-gold hover:text-white text-sm transition-colors"
              >
                → Demo
              </a>
            </div>

            {hoveredProject === project.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 pt-4 border-t border-software-gold/30"
              >
                <div className="text-software-gold text-xs animate-pulse">
                  Ready to deploy
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

