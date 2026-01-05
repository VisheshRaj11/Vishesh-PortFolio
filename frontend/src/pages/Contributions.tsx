import React from 'react';
import { motion } from 'framer-motion';
import image from "../assets/image.png"

const Contributions: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden flex flex-col items-center px-6">
      
      {/* 1. VISIBLE GITHUB BACKGROUND LOGO */}
      <div className="absolute top-50 left-50 opacity-20 pointer-events-none z-0">
        <svg height="500" width="500" viewBox="0 0 16 16" fill="#3b82f6" className="blur-[1px]">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </div>

      {/* SECTION HEADER */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Open Source Activity
        </h2>
        <p className="text-blue-500/80 mt-4 text-xs font-mono uppercase tracking-[0.4em]">
          Github Contributions
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col gap-8">
        
        {/* TOP SECTION: TWO COLUMNS FOR STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Streak Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl backdrop-blur-md"
            >
              <h3 className="text-gray-400 text-xs font-mono mb-6 uppercase">Consistency</h3>
              <img 
                src="https://nirzak-streak-stats.vercel.app/?user=VisheshRaj11&theme=tokyonight&hide_border=true&background=00000000" 
                alt="Streak"
                className="w-full h-auto"
              />
            </motion.div>
        </div>
        
        {/* BOTTOM SECTION: FULL WIDTH GRAPH */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="group bg-white/[0.03] border border-white/10 p-6 md:p-10 rounded-[2rem] backdrop-blur-md hover:border-blue-500/30 transition-all duration-500"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Activity Graph
            </h3>
            <span className="text-[10px] font-mono text-gray-500 uppercase">Updated Live</span>
          </div>
          
          <div className="w-full flex justify-center overflow-hidden rounded-2xl bg-black/40 p-2 md:p-6">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=VisheshRaj11&theme=tokyonight&bg_color=00000000&hide_border=true&color=3b82f6"
              alt="GitHub Activity Graph"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contributions;