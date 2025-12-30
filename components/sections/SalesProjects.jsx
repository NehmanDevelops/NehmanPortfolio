'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const deals = [
  {
    id: 1,
    client: 'Leading North American Bank',
    value: '$4.2M',
    description: 'Custom digital banking overhaul with Next.js, implementing e-Transfer, Bill Pay, and advanced security features.',
    outcome: 'Successfully delivered pre-production demo; finalized for Q1 deployment.',
    icon: '🏦',
  },
  {
    id: 2,
    client: 'Fortune 500 Tech Company',
    value: '$2.5M',
    description: 'Enterprise software solution - 3-year contract',
    outcome: 'Exceeded quota by 150%',
    icon: '🏆',
  },
  {
    id: 3,
    client: 'Startup Accelerator',
    value: '$850K',
    description: 'SaaS platform licensing for 50+ startups',
    outcome: 'Fastest close in company history',
    icon: '⚡',
  },
  {
    id: 4,
    client: 'Healthcare Network',
    value: '$1.2M',
    description: 'Cloud infrastructure migration project',
    outcome: 'Renewed for 2 additional years',
    icon: '💊',
  },
]

export default function SalesProjects() {
  const [hoveredDeal, setHoveredDeal] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold text-sales-silver mb-8">
        Closed Deals & Success Stories
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {deals.map((deal, index) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredDeal(deal.id)}
            onHoverEnd={() => setHoveredDeal(null)}
            className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6 hover:border-sales-silver transition-all cursor-pointer group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Shimmer effect on hover */}
            {hoveredDeal === deal.id && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-sales-silver/20 to-transparent"
              />
            )}

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-4xl mb-2">{deal.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{deal.client}</h3>
                  <div className="text-2xl font-bold text-sales-silver">{deal.value}</div>
                </div>
              </div>

              <p className="text-white/80 mb-4">{deal.description}</p>

              <div className="flex items-center gap-2 text-sales-silver font-semibold">
                <span>📈</span>
                <span>{deal.outcome}</span>
              </div>

              {hoveredDeal === deal.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-sales-silver/30"
                >
                  <div className="text-white/60 text-sm">
                    Key factors: Relationship building, technical expertise, value demonstration
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-sales-silver/20 to-sales-silver/20 border border-sales-silver/30 rounded-lg p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Total Impact</h3>
            <p className="text-white/80">Combined value of closed deals</p>
          </div>
          <div className="text-4xl font-bold text-sales-silver">$7.65M+</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

