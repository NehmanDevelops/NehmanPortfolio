'use client'

import { motion } from 'framer-motion'

export default function SalesAbout() {
  const stats = [
    { label: 'Deals Closed', value: '150+', icon: '💼' },
    { label: 'Revenue Generated', value: '$5M+', icon: '💰' },
    { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
    { label: 'Years Experience', value: '7+', icon: '📈' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold text-sales-silver mb-6">
          The Sales Professional
        </h2>
        <div className="text-white space-y-4 text-lg">
          <p>
            I don't just sell products—I build relationships, understand needs, and deliver solutions that drive real business value.
          </p>
          <p>
            With a unique blend of technical understanding and sales expertise, I bridge the gap between complex solutions and client needs, 
            turning conversations into contracts and prospects into partners.
          </p>
          <p className="text-sales-silver font-semibold">
            "One mind, two masters: Code by day, closes by night."
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6 text-center"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-sales-silver mb-1">{stat.value}</div>
            <div className="text-white/80 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-sales-silver mb-3">Core Strengths</h3>
          <ul className="text-white space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">✓</span>
              <span>Relationship Building</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">✓</span>
              <span>Technical Sales</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">✓</span>
              <span>Negotiation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">✓</span>
              <span>Client Retention</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-sales-silver mb-3">Approach</h3>
          <ul className="text-white space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">→</span>
              <span>Listen first, sell second</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">→</span>
              <span>Value-driven conversations</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">→</span>
              <span>Long-term partnerships</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sales-silver">→</span>
              <span>Data-backed decisions</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

