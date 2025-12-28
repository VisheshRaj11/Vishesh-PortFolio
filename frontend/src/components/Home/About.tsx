import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, Container, Globe, Smartphone, Coffee, Award } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'personality.env', icon: <Coffee size={14} /> },
    { id: 'stack', label: 'stack.config', icon: <Cpu size={14} /> },
    { id: 'impact', label: 'contributions.log', icon: <Award size={14} /> },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#020617] py-20 px-4 md:px-10 lg:px-20 text-slate-300 font-sans">
      
      {/* Background visual: Subtle Docker-blue pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-2 italic">{"// Exploring the layers"}</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            About <span className="text-slate-500">_</span>Me
          </h1>
        </div>

        {/* The Terminal Container */}
        <div className="w-full bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[550px]">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-[#080D1A] border-b md:border-b-0 md:border-r border-slate-800 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                  : 'hover:bg-slate-800 text-slate-500'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
            
            <div className="mt-auto hidden md:block p-4 border-t border-slate-800/50">
              <div className="flex items-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Status: Exploring Docker
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 md:p-10 font-mono overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'bio' && (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <p className="text-emerald-500">vishesh@portfolio:~$ <span className="text-white">cat intro.txt</span></p>
                  <p className="text-lg leading-relaxed text-slate-400">
                    I am a <span className="text-white">Full Stack Architect</span> who lives at the intersection of 
                    Web and Mobile. My journey isn't just about writing code; it's about 
                    participating in the <span className="text-emerald-400">Hackathon</span> grind and giving back to 
                    <span className="text-emerald-400"> Open Source</span>.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2 uppercase text-xs tracking-widest text-emerald-500">
                        <Globe size={14} /> Web Layer
                      </h4>
                      <p className="text-xs text-slate-500 leading-normal">MERN Stack, Real-time apps, and 3D UI experiences.</p>
                    </div>
                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2 uppercase text-xs tracking-widest text-cyan-400">
                        <Smartphone size={14} /> Mobile Layer
                      </h4>
                      <p className="text-xs text-slate-500 leading-normal">Native Android engineering with Kotlin & XML layouts.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'stack' && (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <p className="text-emerald-500">vishesh@portfolio:~$ <span className="text-white">docker images</span></p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400 uppercase tracking-widest">MERN Stack</span>
                        <span className="text-emerald-400">95%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} className="h-full bg-emerald-500" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400 uppercase tracking-widest">Kotlin/XML</span>
                        <span className="text-cyan-400">85%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} className="h-full bg-cyan-400" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                      <div className="flex items-center gap-2 text-blue-500 uppercase tracking-[0.2em] text-xs">
                        <Container size={16} /> Containerization (Docker)
                      </div>
                      <p className="text-xs text-slate-500 italic">"Pulling images, orchestrating services, and containerizing my future."</p>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: [-200, 400] }} 
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="w-1/4 h-full bg-blue-500" 
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'impact' && (
                <motion.div
                  key="impact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                   <p className="text-emerald-500">vishesh@portfolio:~$ <span className="text-white">git log --contributions</span></p>
                   <div className="border-l-2 border-slate-800 ml-2 pl-6 space-y-6 mt-6">
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        <h4 className="text-white font-bold text-sm">Hackathon Participant</h4>
                        <p className="text-xs text-slate-500 mt-1">Turning high-pressure ideas into functional MVPs within 48 hours.</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-slate-700" />
                        <h4 className="text-white font-bold text-sm">Open Source Contributor</h4>
                        <p className="text-xs text-slate-500 mt-1">Improving the ecosystem by submitting PRs and building public-first tools.</p>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;