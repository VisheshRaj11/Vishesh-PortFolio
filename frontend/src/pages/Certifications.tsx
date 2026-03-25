import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, ShieldCheck } from 'lucide-react';

const certificateImages = [
  '/c1.png', '/c2.png', '/c3.png', '/c4.png', '/c5.png',
  '/c6.png', '/c7.png', '/c8.png', '/c9.png', '/c10.png'
];

const Certifications = () => {
  const [index, setIndex] = useState(0);

  const nextCert = () => setIndex((prev) => (prev + 1) % certificateImages.length);
  const prevCert = () => setIndex((prev) => (prev - 1 + certificateImages.length) % certificateImages.length);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Dark Platinum Decorative Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center z-10 mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#E5E4E2] via-[#B0B0B0] to-[#4A4A4A]">
          Certifications
        </h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#7F7F7F]" />
          <p className="text-[#7F7F7F] text-xs md:text-sm tracking-[0.4em] uppercase font-semibold">
            Verified Excellence
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#7F7F7F]" />
        </div>
      </motion.div>

      <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] flex items-center justify-center">
        
        {/* Navigation Controls */}
        <div className="absolute bottom-[-80px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-full flex justify-center md:justify-between gap-8 z-50 px-4">
          <button 
            onClick={prevCert} 
            className="p-4 rounded-full bg-[#E5E4E2]/5 border border-[#E5E4E2]/10 hover:bg-[#E5E4E2]/20 hover:scale-110 backdrop-blur-xl transition-all shadow-[0_0_20px_rgba(229,228,226,0.05)]"
          >
            <ChevronLeft size={24} className="text-[#E5E4E2]" />
          </button>
          <button 
            onClick={nextCert} 
            className="p-4 rounded-full bg-[#E5E4E2]/5 border border-[#E5E4E2]/10 hover:bg-[#E5E4E2]/20 hover:scale-110 backdrop-blur-xl transition-all shadow-[0_0_20px_rgba(229,228,226,0.05)]"
          >
            <ChevronRight size={24} className="text-[#E5E4E2]" />
          </button>
        </div>

        {/* The Stacked Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {certificateImages.map((src, i) => {
              const isCenter = i === index;
              const isLeft = i === (index - 1 + certificateImages.length) % certificateImages.length;
              const isRight = i === (index + 1) % certificateImages.length;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.3,
                    scale: isCenter ? 1 : 0.8,
                    x: isCenter ? 0 : isLeft ? -350 : 350,
                    zIndex: isCenter ? 30 : 10,
                    filter: isCenter ? "blur(0px)" : "blur(8px)",
                    rotateY: isCenter ? 0 : isLeft ? 25 : -25,
                  }}
                  exit={{ opacity: 0, scale: 0.5, x: isLeft ? -500 : 500 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="absolute w-[320px] md:w-[600px] h-[220px] md:h-[400px] cursor-pointer group preserve-3d"
                >
                  {/* Platinum Border Frame */}
                  <div className="relative h-full w-full rounded-2xl border border-[#E5E4E2]/20 bg-[#111] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#E5E4E2]/50">
                    
                    {/* Certificate Image */}
                    <img 
                      src={src} 
                      alt="Certification" 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />

                    {/* Interaction Overlay (Appears on Hover) */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="p-5 bg-[#E5E4E2] rounded-full shadow-2xl mb-4"
                      >
                         <ShieldCheck size={32} className="text-black" />
                      </motion.div>
                      <span className="text-[#E5E4E2] font-black text-xs tracking-[0.4em] uppercase underline underline-offset-8 decoration-[#7F7F7F]">
                        Verify Credential
                      </span>
                    </div>

                    {/* Corner Badge */}
                    <div className="absolute top-6 left-6 z-10 p-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                       <Award size={20} className="text-[#B0B0B0]" />
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

export default Certifications;