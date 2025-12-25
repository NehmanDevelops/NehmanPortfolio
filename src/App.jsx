import { BrowserRouter } from "react-router-dom";

import {Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer, About, Skills, SalesExperience, BeyondTheCode } from "./components";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        {/* About Me Section */}
        <About />
        {/* Beyond the Code Section */}
        <BeyondTheCode />
        {/* Education Section */}
        <Education />
        <Project />
        <SalesExperience />
        <Skills />
        <Experience />
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
