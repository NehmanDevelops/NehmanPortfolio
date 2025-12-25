'use client'

import { motion } from 'framer-motion'

const skillCategories = {
  'Sales Methodologies': ['SPIN Selling', 'Challenger Sale', 'Solution Selling', 'MEDDIC'],
  'Tools & Platforms': ['Salesforce', 'HubSpot', 'LinkedIn Sales', 'Zoom', 'Slack'],
  'Communication': ['Presentation', 'Negotiation', 'Public Speaking', 'Written Communication'],
  'Analytics': ['Sales Forecasting', 'Pipeline Management', 'CRM Analytics', 'ROI Analysis'],
  'Industry Knowledge': ['SaaS', 'Enterprise Software', 'Cloud Services', 'Cybersecurity'],
}

export default function SalesSkills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold text-sales-silver mb-8">
        Sales Expertise & Capabilities
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-sales-silver mb-4">
              {category}
            </h3>
            <div className="space-y-2">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-white"
                >
                  <span className="text-sales-silver">→</span>
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
        className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-sales-silver mb-4">
          Certifications & Training
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="flex items-center gap-2">
            <span className="text-sales-silver">✓</span>
            <span>Salesforce Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sales-silver">✓</span>
            <span>SPIN Selling Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sales-silver">✓</span>
            <span>Advanced Negotiation Training</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sales-silver">✓</span>
            <span>Technical Sales Specialist</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

