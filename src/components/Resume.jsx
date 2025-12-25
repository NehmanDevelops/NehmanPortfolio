import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="mt-12 bg-black">
      <motion.div variants={textVariant()} className={`${styles.padding} min-h-[200px]`}>
        <p className={styles.sectionSubText}>Want to know more?</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className={`${styles.paddingX} pb-20 flex justify-center items-center`}
      >
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black px-12 py-6 rounded-xl font-bold text-xl shadow-lg shadow-[#ffd700]/50 hover:shadow-[#ffd700]/70 transition-all flex items-center gap-3"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255, 215, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span>📄</span>
          <span>SEE more on my resume</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");

