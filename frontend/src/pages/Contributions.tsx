import React from 'react';
import { motion } from 'framer-motion';

const Contributions: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden flex flex-col items-center px-6">
      
      {/* 1. VISIBLE GITHUB BACKGROUND LOGO */}
      <div className="absolute top-50 left-50 opacity-10 pointer-events-none z-0">
        <svg height="500" width="500" viewBox="0 0 16 16" fill="#3b82f6" className="blur-[2px]">
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
        <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-8 bg-blue-500/50"></span>
            <p className="text-blue-500/80 text-xs font-mono uppercase tracking-[0.4em]">
            Github Contributions
            </p>
            <span className="h-px w-8 bg-blue-500/50"></span>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col gap-8">
        
        {/* TOP SECTION: STATS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Streak Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white/[0.03] border border-white/10 p-6 rounded-3xl backdrop-blur-md flex flex-col justify-center"
            >
              <h3 className="text-gray-400 text-xs font-mono mb-6 uppercase tracking-widest">Commit Consistency</h3>
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=VisheshRaj11&theme=tokyonight&hide_border=true&background=00000000" 
                alt="Streak"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Language Card (New Component) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl backdrop-blur-md"
            >
              <h3 className="text-gray-400 text-xs font-mono mb-6 uppercase tracking-widest">Top Languages</h3>
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=VisheshRaj11&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000" 
                alt="Top Langs"
                className="w-full h-auto"
              />
            </motion.div>
        </div>
        
        {/* MIDDLE SECTION: ACTIVITY GRAPH */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="bg-[#0d1117] border border-white/10 p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400 font-medium">Jan — Dec 2025</span>
            <div className="flex items-center gap-2 text-[10px] text-gray-500">
                <span>Less</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-[#161b22]"></div>
                    <div className="w-3 h-3 rounded-sm bg-[#0e4429]"></div>
                    <div className="w-3 h-3 rounded-sm bg-[#006d32]"></div>
                    <div className="w-3 h-3 rounded-sm bg-[#26a641]"></div>
                    <div className="w-3 h-3 rounded-sm bg-[#39d353]"></div>
                </div>
                <span>More</span>
            </div>
          </div>

          {/* This uses the most authentic GitHub-style SVG generator for React portfolios */}
          <div className="overflow-x-auto pb-2 custom-scrollbar">
             <img 
               src="https://ghchart.rshah.org/3b82f6/VisheshRaj11" 
               alt="Vishesh's Github Contribution Chart" 
               className="min-w-[800px] w-full"
             />
          </div>
        </motion.div>

        {/* BOTTOM SECTION: EXTRA AUTHENTIC UI BITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Profile Summary Card */}
             <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 p-6 rounded-3xl flex items-center justify-between"
            >
                <div>
                    <p className="text-white font-bold text-lg">VisheshRaj11</p>
                    <p className="text-gray-400 text-sm italic">"Building the future of the web"</p>
                </div>
                <div className="text-right">
                    <p className="text-blue-400 font-mono text-xs">OSS CONTRIBUTOR</p>
                    <div className="flex gap-2 mt-2 justify-end">
                        <div className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-300 border border-white/10">v2.0.4</div>
                        <div className="px-2 py-1 bg-green-500/20 rounded text-[10px] text-green-400 border border-green-500/20">Active</div>
                    </div>
                </div>
            </motion.div>

            {/* Trophy Section */}
           
        </div>

      </div>
    </section>
  );
};

export default Contributions;