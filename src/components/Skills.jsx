import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import {
  SiExpress, SiJavascript, SiMongodb, SiMysql, SiNextdotjs,
  SiTypescript, SiRedis, SiApachekafka, SiTailwindcss, SiStripe, SiDotnet,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const categories = {
  Frontend: [
    { skill: "React.js", icon: <FaReact />, color: "#61DBFB" },
    { skill: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
    { skill: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { skill: "JavaScript", icon: <SiJavascript />, color: "#F0DB4F" },
    { skill: "Redux", icon: <TbBrandRedux />, color: "#764ABC" },
    { skill: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
    { skill: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
    { skill: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
  ],
  Backend: [
    { skill: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
    { skill: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
    { skill: ".NET / C#", icon: <SiDotnet />, color: "#9B7EF0" },
    { skill: "Kafka", icon: <SiApachekafka />, color: "#FFFFFF" },
    { skill: "Stripe", icon: <SiStripe />, color: "#6772E5" },
  ],
  "Data & DevOps": [
    { skill: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { skill: "MySQL", icon: <SiMysql />, color: "#5e8fb1" },
    { skill: "Redis", icon: <SiRedis />, color: "#D82C20" },
    { skill: "Docker", icon: <FaDocker />, color: "#2496ED" },
  ],
};

const categoryKeys = Object.keys(categories);

const Skills = () => {
  const [active, setActive] = useState("Frontend");
  const skills = categories[active];

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categoryKeys.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              active === cat ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {active === cat && (
              <motion.span
                layoutId="skillTab"
                className="absolute inset-0 bg-accent-gradient rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Skill grid */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="group relative aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-accent/40 transition-colors duration-300 cursor-default overflow-hidden"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}25, transparent 70%)`,
              }}
            />
            <div className="relative">
              {React.cloneElement(skill.icon, { size: 36, color: skill.color })}
            </div>
            <p className="relative text-[12px] sm:text-[13px] text-gray-300 group-hover:text-white text-center font-medium transition">
              {skill.skill}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
