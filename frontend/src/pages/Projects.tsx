import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "CareerParto", 
    description: "AI-driven resume analysis and personalized career roadmap guidance.", 
    tags: ["React", "Node.js", "AI"],
    github: "https://github.com/VisheshRaj11/Analyzer",
    link: "https://careerparto.netlify.app",
    image: project1
  },
  { 
    id: 2, 
    title: "Codify", 
    description: "Advanced code reviewer and summarizer for developers.", 
    tags: ["React.js", "Node.js", "AI"],
    github: "https://github.com/VisheshRaj11/AI_Code_Reviewer",
    link: "https://codify11.netlify.app",
    image: project2
  },
  { 
    id: 3, 
    title: "BlogPost", 
    description: "A sleek, minimalist platform for daily blogging and content sharing.", 
    tags: ["React.js", "Appwrite", "Tailwind"],
    github: "https://github.com/VisheshRaj11/BlogApp",
    link: "https://blogapp30.netlify.app",
    image: project3
  },
];

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-12 md:py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center z-10 mb-12 md:mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Featured Projects
        </h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm md:text-base">
          A collection of tools and platforms built with modern web technologies.
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl h-[450px] md:h-[550px] flex items-center justify-center">
        {/* Navigation Buttons - Hidden on tiny screens, moved for better UX */}
        <div className="absolute -bottom-16 md:top-1/2 md:-bottom-0 md:-translate-y-1/2 w-full flex justify-center md:justify-between gap-10 z-50 px-4 pointer-events-none">
          <button 
            onClick={prevProject} 
            className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-xl transition-all pointer-events-auto shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextProject} 
            className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-xl transition-all pointer-events-auto shadow-xl"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => {
              const isCenter = i === index;
              const isLeft = i === (index - 1 + projects.length) % projects.length;
              const isRight = i === (index + 1) % projects.length;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.8,
                    x: isCenter ? 0 : isLeft ? (window.innerWidth < 768 ? -280 : -400) : (window.innerWidth < 768 ? 280 : 400),
                    zIndex: isCenter ? 30 : 10,
                    filter: isCenter ? "blur(0px)" : "blur(4px)",
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="absolute w-[300px] md:w-[500px] h-[400px] md:h-[450px] cursor-pointer group"
                >
                  {/* Card Body */}
                  <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-[#0f0f0f] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/30">
                    
                    {/* Project Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                      />
                      {/* Smooth Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                    </div>
                    
                    {/* Card Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                    {/* Content Section */}
                    <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-end">
                      <div className="transform transition-all duration-500 group-hover:translate-y-[-10px]">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md border border-white/5 px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">{project.title}</h3>
                        
                        {/* Expandable Hover Details */}
                        <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                          <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex gap-6 border-t border-white/10 pt-5">
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-2 text-[11px] font-bold tracking-widest hover:text-blue-400 transition-colors"
                            >
                              <Github size={18} /> GITHUB
                            </a>
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-2 text-[11px] font-bold tracking-widest hover:text-purple-400 transition-colors"
                            >
                              <ExternalLink size={18} /> LIVE DEMO
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;