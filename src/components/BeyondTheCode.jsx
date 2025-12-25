import React from "react";
import { motion } from "framer-motion";
import { GiWeightLiftingUp, GiFruitBowl, GiTShirt } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const BeyondTheCode = () => {
  return (
    <div className={`w-full bg-black relative z-10 ${styles.padding}`}>
      <motion.div variants={textVariant()} initial="hidden" animate="show" className="mb-8">
        <p className={styles.sectionSubText}>Personal Interests</p>
        <h2 className={styles.sectionHeadText}>Beyond the Code.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        <div className='bg-[#1a1a1a] rounded-3xl p-10 md:p-12 w-full max-w-6xl mx-auto border-2 border-[#ffd700]/30'>
          <motion.div variants={textVariant()} className="mb-10 text-center">
            <p className="text-gray-400 text-base md:text-lg">The passions and interests that fuel my creativity and drive</p>
          </motion.div>
          
          {/* Interest Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Weightlifting */}
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-6 md:p-8 text-center hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all cursor-pointer group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/10 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#ffd700]/30 group-hover:to-[#ffd700]/20 transition-all">
                  <GiWeightLiftingUp className="text-[#ffd700] text-3xl" />
                </div>
              </div>
              <h4 className="text-[#ffd700] text-xl font-bold mb-3">Weightlifting</h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">I love going to the gym and hitting PRs</p>
            </motion.div>

            {/* Eating Healthy */}
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-6 md:p-8 text-center hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all cursor-pointer group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/10 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#ffd700]/30 group-hover:to-[#ffd700]/20 transition-all">
                  <GiFruitBowl className="text-[#ffd700] text-3xl" />
                </div>
              </div>
              <h4 className="text-[#ffd700] text-xl font-bold mb-3">Eating Healthy</h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">I eat healthy, cook my own meals, and consistently hit my protein goals</p>
            </motion.div>

            {/* Video Games */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-6 md:p-8 text-center hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all cursor-pointer group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/10 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#ffd700]/30 group-hover:to-[#ffd700]/20 transition-all">
                  <FaGamepad className="text-[#ffd700] text-3xl" />
                </div>
              </div>
              <h4 className="text-[#ffd700] text-xl font-bold mb-3">Video Games</h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">I loved games growing up, which motivated me to learn how to code and pursue computer science</p>
            </motion.div>

            {/* Fashion and Dressing Up */}
            <motion.div
              variants={fadeIn("up", "spring", 0.8, 0.75)}
              className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-6 md:p-8 text-center hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all cursor-pointer group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/10 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#ffd700]/30 group-hover:to-[#ffd700]/20 transition-all">
                  <GiTShirt className="text-[#ffd700] text-3xl" />
                </div>
              </div>
              <h4 className="text-[#ffd700] text-xl font-bold mb-3">Fashion and Dressing Up</h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">I enjoy expressing myself through fashion and putting together stylish outfits</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(BeyondTheCode, "beyond-the-code");

