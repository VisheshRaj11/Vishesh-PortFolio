import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {motion} from "framer-motion";

const name = "Vishesh Raj";


const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    },4000);

    return () => clearTimeout(timer);
  },[])

  return (
    // 1. Set h-screen and overflow-hidden to prevent the whole page from scrolling
    <div className="h-screen overflow-hidden flex flex-col">
      {splash ? 
       <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Main Text Animation */}
        <motion.h1
          className="flex overflow-hidden text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-gray-200"
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.8,
                ease: [0.6, 0.01, 0.05, 0.95],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Decorative Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
          className="h-[2px] w-24 bg-blue-500 mt-4 origin-left"
        />

        {/* Subtitle / Role (Optional) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-4 text-sm uppercase tracking-[0.5em] text-gray-400 italic"
        >
          Full Stack Developer
        </motion.p>
      </div>
    </motion.div>
        :
        <div className="flex flex-1 relative overflow-hidden">
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className="
            fixed left-0 top-1/3 -translate-y-1/2 z-50
            w-8 h-20 bg-white/10 text-white
            flex items-center justify-center
            rounded-r-md
            sm:hidden border
          "
        >
          <ChevronRight size={20} />
        </button>

        {/* Mobile Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 h-full w-64
            bg-zinc-900 border-r border-gray-600 rounded-md
            transform transition-transform duration-300 ease-in-out
            z-40
            sm:hidden
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Header open={open} setOpen={setOpen}/>
        </aside>

        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 sm:hidden"
          />
        )}

        {/* 2. Desktop Sidebar - Added h-full and overflow-y-auto */}
        <aside className="hidden sm:block w-64 border-r border-gray-800 h-full overflow-y-auto bg-zinc-900">
          <Header open={open} setOpen={setOpen}/>
        </aside>

        {/* 3. Main Content Wrapper - Ensure it takes full height and hides overflow */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          
          {/* Top Fixed Logo Bar */}
          <div className="h-14 md:h-16 border-b border-gray-700 flex justify-center items-center z-20 bg-zinc-950/50 backdrop-blur-md">
            <img
              src="/vr.png"
              alt="logo"
              className="w-10 md:w-16 object-contain opacity-80"
            />
          </div>

          {/* 4. ONLY THIS SECTION SCROLLS */}
          <main className="flex-1 overflow-y-auto bg-black">
            <Outlet />
          </main>
        </div>
      </div>
      }
    </div>
  );
};

export default Layout;