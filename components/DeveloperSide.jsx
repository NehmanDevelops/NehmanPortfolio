'use client'

import OriginalPortfolio from './OriginalPortfolio'

export default function DeveloperSide({ onSwitch }) {
  // For now, show the original portfolio. Later we can adjust it
  return <OriginalPortfolio onSwitch={onSwitch} />
}
