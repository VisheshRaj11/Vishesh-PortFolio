import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Radio, Heart, Terminal, Coffee, Code2 } from 'lucide-react';
import { Button } from '../ui/button'; // Assuming you have this from previous steps
import { useNavigate } from 'react-router-dom';

const quotes = [
  {
    text: "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
    icon: <Code2 size={18} />
  },
  {
    text: "Real developers ship.",
    author: "Anonymous",
    icon: <Terminal size={18} />
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    icon: <Coffee size={18} />
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    icon: <Heart size={18} />
  }
];

const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState(0);

  // Rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-24 px-6 w-full bg-[#020617] overflow-hidden flex justify-center items-center min-h-[600px]">
      
      {/* 🔹 Background Atmosphere: Subtle scanlines and glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(16, 185, 129, 0.1) 50%)', backgroundSize: '100% 4px' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl w-full"
      >
        {/* 🔹 The Holographic Terminal Container */}
        <div className="bg-slate-900/60 border border-emerald-500/20 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/5 relative group">
          
          {/* Terminal Header Bar */}
          <div className="bg-slate-950/50 border-b border-slate-800 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Radio className="text-emerald-500 animate-pulse" size={16} />
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Transmission End // Status: Online</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50 animate-pulse" />
            </div>
          </div>

          <div className="p-8 md:p-12 text-center space-y-8 relative">
            {/* Subtle ambient light effect inside card */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-50 pointer-events-none" />

            {/* Main Icon & Heading */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-6 shadow-lg shadow-emerald-500/10"
              >
                <Heart className="text-emerald-400" size={32} />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Thank You for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Visiting.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Whether you're here to hire, collaborate, or just exploring the digital space, I genuinely appreciate the time you've spent traversing my work.
              </p>
            </div>

            {/* 🔹 The Rotating Quotes Section */}
            <div className="relative z-10 h-32 flex items-center justify-center">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentQuote}
                  variants={quoteVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="max-w-lg"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-emerald-500/50 mb-3">
                      {quotes[currentQuote].icon}
                    </div>
                    <p className="text-xl text-slate-300 font-medium italic mb-3">
                      "{quotes[currentQuote].text}"
                    </p>
                    <footer className="text-sm text-emerald-500 font-mono uppercase tracking-widest before:content-['—_']">
                      {quotes[currentQuote].author}
                    </footer>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Final CTA */}
             <div className="relative z-10 pt-6 border-t border-slate-800/50">
                <Button 
                  onClick={() => navigate('/contact')}
                  className="group bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <Power className="mr-2 text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />
                  Connect
                </Button>
                 <p className="text-xs text-slate-500 mt-6 font-mono">
                  © {new Date().getFullYear()} Vishesh. MERN • Kotlin • Docker.
                 </p>
             </div>

          </div>
           {/* Bottom scanning line animation */}
           <motion.div 
             animate={{ top: ["0%", "100%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-30 pointer-events-none" 
           />
        </div>
      </motion.div>
    </section>
  );
};

export default ThankYou;