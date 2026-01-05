import React, { useState } from 'react';
import skills from "../data/skillsData"; // Make sure the path is correct
import {motion} from "framer-motion"

// Types for better IntelliSense
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
  key:string,
  hovercss: string
}

const Skills: React.FC = () => {
const skillButtons: SkillButton[] = [
  {
    name: "Lang & Frontend",
    key: "Languages_Frontend",
    hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105",
  },
  {
    name: "Backend & Database",
    key: "Backend_Database",
    hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105",
  },
  {
    name: "Deployment & Tools",
    key: "Deployment_Tools",
    hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105",
  },
  {
    name: "DevOps & Infrastructure",
    key: "DevOps_Infrastructure",
    hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105",
  },
  {
    name: "Ai Automation & Tools",
    key: "AI_Automation_Tools",
    hovercss: "hover:bg-white/20 hover:text-gray-300 hover:scale-105",
  },
];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <motion.section 
    initial={{opacity:0, y:20}}
    whileInView={{opacity:20, y:0}}
    transition={{duration:0.6}}
    className="p-8 bg-[#0d1117] text-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-300">Skills Section</h2>
      <div className='w-full'>
       <ul className="flex flex-wrap items-center justify-center w-full gap-2 p-4 backdrop-blur-sm rounded-xl mb-5">
          {skillButtons.map((skillButton, idx) => {
            return (
              <li 
                key={idx} 
                onClick={() => {
                  setActiveCategory(activeCategory === skillButton.key ? null : skillButton.key );
                }}
                className={`
                  text-xs px-3 py-1.5 rounded-lg bg-white/10 cursor-pointer 
                  transition-all duration-300 whitespace-nowrap border border-transparent
                  
                  md:text-sm md:px-4 md:py-2
                
                  lg:text-base
                  
                  ${skillButton.hovercss}
                `}
              >
                {skillButton.name}
              </li>
            );
          })}
      </ul>
      </div>
      <div className="max-w-6xl mx-auto">
        {skills.map((categoryObj: SkillCategory, idx: number) => {
          // 1. Get the key string (e.g., "Languages_Frontend")
          const categoryName = Object.keys(categoryObj)[0];
          // 2. Access the array using that key
          const items = categoryObj[categoryName];

          const isActive = activeCategory === categoryName;
          const isBlurred = activeCategory && activeCategory != categoryName;

          return (
            <div key={idx}  className={`
              mb-12 relative transition-all duration-500
              ${isActive ? "z-20 scale-105" : ""}
              ${isBlurred ? "blur-sm opacity-40 scale-95" : ""}
            `}>
              {/* Clean up the title: replace underscores with spaces and & */}
              <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-gray-700 pb-2 inline-block">
                {categoryName.replace(/_/g, ' & ')}
              </h3>

              <div className="flex flex-wrap gap-6 border border-gray-500 p-2 rounded-xl max-w-3xl">
                {items.map((skill: SkillItem, sIdx: number) => (
                  // Inside your items.map function:
<motion.div 
  key={sIdx} 
  className="flex flex-col items-center group cursor-pointer"
  // FRAMER MOTION PROPS
  whileHover={{ 
    rotateY: 15,    // Rotates on the Y axis
    rotateX: -10,   // Rotates on the X axis
    scale: 1.1,     // Grows slightly
    z: 50           // Pulls it toward the screen (requires perspective on parent)
  }}
  transition={{ 
    type: "spring", 
    stiffness: 300, 
    damping: 10 
  }}
  style={{ perspective: 1000 }} // Gives it 3D depth
>
  <div className="p-2 rounded-lg bg-[#161b22] group-hover:bg-[#1f2937] transition-colors border border-gray-800 shadow-xl">
    <img 
      src={skill.icon} 
      alt={skill.name} 
      className="w-12 h-12 object-contain" 
    />
  </div>
  <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
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