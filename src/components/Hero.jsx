import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {init} from 'ityped';
import React , { useEffect , useRef} from "react";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {HiOutlineMail} from "react-icons/hi";
import { profilePhoto } from "../assets";
import "./Hero.scss";

const Hero = () => {

  const textRef=useRef();
  useEffect(()=>
  {
      init(textRef.current, { showCursor: true, strings: ['Aspiring Software Engineer', "Full-Stack Developer", "Computer Science Student", "Problem Solver", 'Code Architect', "Tech Enthusiast"] })
  },[]);

  return (
    <section className={`relative w-full h-screen mx-auto flex items-start justify-center`}>
      {/* Profile Photo Circle - Left Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute left-8 md:left-16 top-20 md:top-32 z-20"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <div className="absolute inset-0 rounded-full border-4 border-[#ffd700] shadow-lg shadow-[#ffd700]/50"></div>
          <div className="absolute inset-2 rounded-full overflow-hidden bg-[#1a1a1a]">
            <img
              src={typeof profilePhoto === 'string' ? profilePhoto : (profilePhoto?.src || profilePhoto?.default?.src || profilePhoto)}
              alt="Nehman Rahimi"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Profile photo failed to load:', profilePhoto);
                e.target.style.background = '#1a1a1a';
              }}
            />
          </div>
        </div>
      </motion.div>

      <div className={`absolute inset-0 ${styles.paddingX} flex flex-col justify-start items-start z-10 max-w-7xl mx-auto pt-20 md:pt-32 pl-64 md:pl-80 lg:pl-96`}>
        {/* Main Content */}
        <div className="flex flex-col">
          {/* Greeting and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-2"
          >
            <p className="text-xl md:text-2xl text-gray-400 font-medium inline">
              Hi, I'm{' '}
            </p>
            <h1 className={`${styles.heroHeadText} text-white inline`}>
              <span className="bg-gradient-to-r from-white via-[#ffd700] to-white bg-clip-text text-transparent">
                Nehman Rahimi
              </span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span 
                ref={textRef} 
                className="bg-gradient-to-r from-[#ffd700] via-[#ffed4e] to-[#ffd700] bg-clip-text text-transparent"
                style={{ color: '#ffd700' }}
              ></span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mb-6 leading-relaxed"
          >
            Aspiring Software Engineer and Full-Stack Developer with a background in customer-facing roles. 
            Passionate about building innovative solutions and creating exceptional user experiences. 
            Explore my CS projects below to see my technical skills in action.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-4 items-center mb-8"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[#ffd700] flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[#ffd700] flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ImLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="mailto:nehmanmain@gmail.com"
              className="w-12 h-12 rounded-full border-2 border-[#ffd700] flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <HiOutlineMail className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* 3D Scene */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className='absolute bottom-8 right-8 w-10 flex justify-center items-center z-10'
      >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#ffd700] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#ffd700] mb-1'
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;