'use client'

import dynamic from 'next/dynamic'
import HeroIntro from './HeroIntro'

// Dynamically import components to avoid SSR issues with Three.js
const Navbar = dynamic(() => import('../src/components/Navbar'), { ssr: false })
const Content = dynamic(() => import('../src/components/Content'), { ssr: false })
const About = dynamic(() => import('../src/components/About'), { ssr: false })
const Education = dynamic(() => import('../src/components/Education'), { ssr: false })
const BeyondTheCode = dynamic(() => import('../src/components/BeyondTheCode'), { ssr: false })
const Project = dynamic(() => import('../src/components/ProjectEnhanced'), { ssr: false })
const SalesExperience = dynamic(() => import('../src/components/SalesExperience'), { ssr: false })
const Skills = dynamic(() => import('../src/components/Skills'), { ssr: false })
const Experience = dynamic(() => import('../src/components/Experience'), { ssr: false })
const Tech = dynamic(() => import('../src/components/Tech'), { ssr: false })
const Contact = dynamic(() => import('../src/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('../src/components/Footer'), { ssr: false })
const StarsCanvas = dynamic(() => import('../src/components/canvas/Stars'), { ssr: false })

export default function OriginalPortfolio() {
  return (
    <div className='relative z-0 bg-primary'>
      {/* Hero Intro Section - First thing that appears */}
      <HeroIntro />
      
      {/* Rest of the portfolio */}
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
      </div>
      <About />
      <Education />
      <BeyondTheCode />
      <Skills />
      <Project />
      <Experience />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}
