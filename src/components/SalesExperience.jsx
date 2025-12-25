import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const salesExperiences = [
  {
    title: "Sales Associate",
    company: "GUESS?, Inc.",
    location: "Vaughan, ON",
    date: "Sept 2024 – Present",
    points: [
      "Hit 120%+ of daily targets; averaged $1.5k+ sales per shift.",
      "Lifted conversion by 15% via cross-sell, upsell, and loyalty sign-ups.",
      "30+ units/shift with accurate POS, cash handling, and policy compliance.",
    ],
  },
  {
    title: "Retail Event Associate",
    company: "WWE — Money in the Bank Event",
    location: "Toronto, ON",
    date: "July 2024",
    points: [
      "Supported sales for 500+ attendees; contributed to $10k+ one-day revenue.",
      "Raised average transaction value by 20% with tailored recommendations.",
      "Kept checkouts moving during peak traffic; resolved escalations quickly and professionally.",
    ],
  },
  {
    title: "Sales Associate",
    company: "Urban Planet",
    location: "Toronto, ON",
    date: "June 2023 – Feb 2024",
    points: [
      "Maintained $65+ average basket; exceeded add-on KPIs.",
      "Resolved 50+ requests/shift (exchanges, refunds, billing) with accuracy and compliance.",
      "Ranked top 10% weekly sales; merchandising support improved conversion at peak.",
    ],
  },
  {
    title: "Safety Assistant",
    company: "Rinx Ontario (The Bubble)",
    location: "Toronto, ON",
    date: "July 2022 – Oct 2022",
    points: [
      "Supervised 30+ children/day; enforced safety; high parent satisfaction.",
      "Resolved concerns with 95% success and provided appropriate solutions.",
      "Led recreational/educational activities to boost engagement and safety.",
    ],
  },
];

const SalesExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-2xl p-6 hover:border-[#ffd700]/60 hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-white text-xl font-bold mb-1">{experience.title}</h3>
          <p className="text-[#ffd700] text-lg font-semibold">{experience.company}</p>
          <p className="text-gray-400 text-sm">{experience.location}</p>
        </div>
        <p className="text-[#ffd700] text-sm font-medium mt-2 md:mt-0">{experience.date}</p>
      </div>
      <ul className="mt-4 space-y-2">
        {experience.points.map((point, idx) => (
          <li key={idx} className="text-gray-300 text-sm flex items-start">
            <span className="text-[#ffd700] mr-2">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SalesExperience = () => {
  return (
    <div className="mt-12 bg-black">
      <motion.div variants={textVariant()} className={`${styles.padding} min-h-[100px]`}>
        <p className={styles.sectionSubText}>Customer-Facing Experience</p>
        <h2 className={styles.sectionHeadText}>Sales Experience.</h2>
        <p className={`${styles.sectionSubText} mt-3 max-w-3xl`}>
          Prior to transitioning to tech, I worked in customer-facing sales roles where I developed 
          strong communication, problem-solving, and user-centered thinking skills—all directly 
          applicable to software development and stakeholder management.
        </p>
      </motion.div>

      <div className={`${styles.paddingX} pb-20`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {salesExperiences.map((experience, index) => (
            <SalesExperienceCard
              key={`sales-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SalesExperience, "sales-experience");

