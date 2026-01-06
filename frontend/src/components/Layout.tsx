import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    // 1. Set h-screen and overflow-hidden to prevent the whole page from scrolling
    <div className="h-screen overflow-hidden flex flex-col">
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
        {open ? <ChevronLeft size={20}/> : <ChevronRight size={20}/>}
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
    </div>
  );
};

export default Layout;