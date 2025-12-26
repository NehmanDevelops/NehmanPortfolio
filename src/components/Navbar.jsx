import React, { useEffect, useState } from "react";

import { styles } from "../styles";
import { logo} from "../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w mx-auto'>
        <div></div>

        <div className='sm:flex gap-6 items-center'>
          <a
            href='/#about'
            className={`text-[15px] font-medium cursor-pointer transition-colors ${
              active === "about" ? "text-[#ffd700]" : "text-gray-400"
            } hover:text-[#ffd700]`}
            onClick={() => setActive("about")}
          >
            About
          </a>
          <a
            href='/#education'
            className={`text-[15px] font-medium cursor-pointer transition-colors ${
              active === "education" ? "text-[#ffd700]" : "text-gray-400"
            } hover:text-[#ffd700]`}
            onClick={() => setActive("education")}
          >
            Education
          </a>
          <a
            href='/#project'
            className={`text-[15px] font-medium cursor-pointer transition-colors ${
              active === "project" ? "text-[#ffd700]" : "text-gray-400"
            } hover:text-[#ffd700]`}
            onClick={() => setActive("project")}
          >
            Projects
          </a>
          <a
            href='/#skills'
            className={`text-[15px] font-medium cursor-pointer transition-colors ${
              active === "skills" ? "text-[#ffd700]" : "text-gray-400"
            } hover:text-[#ffd700]`}
            onClick={() => setActive("skills")}
          >
            Skills
          </a>
          <a
            href='/#contact'
            className={`text-[15px] font-medium cursor-pointer transition-colors ${
              active === "contact" ? "text-[#ffd700]" : "text-gray-400"
            } hover:text-[#ffd700]`}
            onClick={() => setActive("contact")}
          >
            Contact
          </a>
          <a
            href="/Nehman_Rahimi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[15px] font-medium cursor-pointer transition-colors ${
              active === "resume" ? "text-[#ffd700]" : "text-gray-400"
            } hover:text-[#ffd700]`}
            onClick={() => setActive("resume")}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar