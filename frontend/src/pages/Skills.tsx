import React, { useState } from 'react';
import skills from "../data/skillsData"; 
import { motion } from "framer-motion"

interface SkillItem {
  name: string;
  icon: string;
  category: string;
}

interface SkillCategory {
  [key: string]: SkillItem[];
}

interface SkillButton {
  name: string,
  key: string,
  hovercss: string
}

const Skills: React.FC = () => {
  const skillButtons: SkillButton[] = [
    { name: "Lang & Frontend", key: "Languages_Frontend", hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105" },
    { name: "Backend & Database", key: "Backend_Database", hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105" },
    { name: "Deployment & Tools", key: "Deployment_Tools", hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105" },
    { name: "DevOps & Infrastructure", key: "DevOps_Infrastructure", hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105" },
    { name: "Ai Automation & Tools", key: "AI_Automation_Tools", hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105" },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Fixed opacity from 20 to 1
      transition={{ duration: 0.6 }}
      className="p-4 md:p-8 lg:p-12 bg-[#0d1117] text-white overflow-hidden"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-300">Skills Section</h2>
      
      {/* Category Navigation: Scrollable on mobile, centered on desktop */}
      <div className='w-full mb-10 overflow-x-auto no-scrollbar'>
        <ul className="flex md:flex-wrap items-center justify-start md:justify-center min-w-max md:min-w-0 gap-2 p-2 backdrop-blur-sm rounded-xl">
          {skillButtons.map((skillButton, idx) => (
            <li 
              key={idx} 
              onClick={() => setActiveCategory(activeCategory === skillButton.key ? null : skillButton.key)}
              className={`
                text-[10px] md:text-sm px-3 py-2 rounded-lg bg-white/10 cursor-pointer 
                transition-all duration-300 whitespace-nowrap border border-transparent
                ${activeCategory === skillButton.key ? "bg-white/30 border-white/50" : ""}
                ${skillButton.hovercss}
              `}
            >
              {skillButton.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-6xl mx-auto">
        {skills.map((categoryObj: SkillCategory, idx: number) => {
          const categoryName = Object.keys(categoryObj)[0];
          const items = categoryObj[categoryName];
          const isActive = activeCategory === categoryName;
          const isBlurred = activeCategory && activeCategory !== categoryName;

          return (
            <div key={idx} className={`
              mb-12 relative transition-all duration-500
              ${isActive ? "z-20 scale-[1.02] md:scale-105" : ""}
              ${isBlurred ? "blur-sm opacity-40 scale-95" : ""}
            `}>
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-blue-400 border-b border-gray-700 pb-2 inline-block">
                {categoryName.replace(/_/g, ' ')}
              </h3>

              {/* Grid System: 3 columns on small phones, 4 on tablets, 6+ on desktop */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 border border-gray-700/50 p-4 md:p-6 rounded-xl">
                {items.map((skill: SkillItem, sIdx: number) => (
                  <motion.div 
                    key={sIdx} 
                    className="flex flex-col items-center group cursor-pointer"
                    whileHover={{ rotateY: 15, rotateX: -10, scale: 1.1, z: 50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    style={{ perspective: 1000 }}
                  >
                    <div className="p-3 md:p-4 rounded-lg bg-[#161b22] group-hover:bg-[#1f2937] transition-colors border border-gray-800 shadow-xl">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain" 
                      />
                    </div>
                    <span className="mt-2 text-[10px] md:text-xs text-center text-gray-400 group-hover:text-white transition-colors line-clamp-1">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;