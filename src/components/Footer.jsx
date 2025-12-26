import React from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer text-center py-8 border-t border-[#ffd700]/20">
      <div className="flex justify-center gap-6 mb-6">
        <motion.a
          href="https://github.com/NehmanDevelops"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffd700] hover:text-white transition-colors relative group"
          aria-label="GitHub"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiOutlineGithub className="text-2xl" />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            GitHub
          </span>
        </motion.a>
        <a
          href="https://www.linkedin.com/in/nehman-rahimi-916225258/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffd700] hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <ImLinkedin className="text-2xl" />
        </a>
        <a
          href="mailto:nehmanmain@gmail.com"
          className="text-[#ffd700] hover:text-white transition-colors"
          aria-label="Email"
        >
          <HiOutlineMail className="text-2xl" />
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {currentYear} Nehman Rahimi. All rights reserved.
      </p>
      <p className="text-gray-500 text-xs mt-2">
        Built with React, Next.js, and Three.js
      </p>
    </div>
  );
};

export default Footer;