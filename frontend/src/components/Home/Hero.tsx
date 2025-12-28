import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { ArrowUpRight} from 'lucide-react'
import myImage from '../../assets/myImage.jpg'

const Hero = () => {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center py-20 lg:py-0">
      
      {/* 🔹 Dynamic Background Glows (Scales with screen) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] md:blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-blue-500/10 blur-[100px] md:blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* 🔹 Left/Top Content: Order-2 on mobile, Order-1 on Desktop */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs md:text-sm font-medium">
              <Sparkles size={14} className="animate-pulse" />
              <span>Available for 2026 Opportunities</span>
            </motion.div> */}

            <div className="space-y-4">
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Vishesh</span>
              </motion.h1>

              <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-300">
                Full Stack <span className="text-emerald-500 italic">Developer</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed">
                I love turning ideas into visuals that inspire, engage, and leave a lasting mark.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto h-14 px-10 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
              >
                Let's Talk
                <ArrowUpRight className="ml-2" size={20} />
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto h-14 px-10 text-lg font-semibold border-slate-800 bg-slate-900/50 text-white hover:bg-slate-800 hover:text-white rounded-xl"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* 🔹 Right/Bottom Image: Order-1 on mobile, Order-2 on Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5 order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none"
          >
            <div className="relative group mx-auto">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/40 to-blue-500/40 rounded-2xl blur-xl opacity-50" />
              
              {/* Image Container */}
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={myImage}
                  alt="Vishesh Portfolio"
                  className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40 lg:opacity-60" />
              </div>

              {/* Floating Badge (Hidden on very small screens, visible from sm up) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden sm:block absolute -bottom-4 -right-4 lg:-bottom-6 lg:-left-6 p-4 md:p-5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl"
              >
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">MERN</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Expertise</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 🔹 Bottom Section Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero