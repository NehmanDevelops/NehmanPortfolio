import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer text-center py-8 border-t border-[#ffd700]/20">
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffd700] hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <AiOutlineGithub className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com"
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