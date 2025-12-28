import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ChevronRight} from "lucide-react";



const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 relative">
        
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

        <aside className="hidden sm:block w-64 border-r border-gray-800">
          <Header open={open} setOpen={setOpen}/>
        </aside>

        <div className="flex-1 flex flex-col">
          
          <div className="h-14 md:h-16 border-b border-gray-700 flex justify-center items-center z-50">
            <img
              src="/vr.png"
              alt="logo"
              className="w-10 md:w-16 object-contain opacity-800"
            />
          </div>

          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>

      <footer className="border-t border-gray-800">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
