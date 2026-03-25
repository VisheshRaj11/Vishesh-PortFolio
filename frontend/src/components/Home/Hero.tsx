import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import myImage from '../../assets/myImage.png'

const Hero = () => {
  const navigate = useNavigate()
  const [showVideo, setShowVideo] = useState(true)

  // Timer to hide the background GIF after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false)
    }, 8000) 
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 } // Slightly delayed to wait for GIF
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#050505] py-20 lg:py-0">
      
      {/* 🔹 Background GIF Overlay */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }} // Keeping it subtle so text remains readable
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <img 
              src='/heroVideo.gif' 
              alt="background" 
              className="w-full h-full object-cover brightness-10"
            />
            {/* Dark vignette to blend the GIF edges */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Dynamic Background Glows (Appear after GIF fades) */}
      <div className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 py-6 lg:px-20 ${!showVideo && 'bg-[radial-gradient(#e5e7eb1a_2px,transparent_1px)] [background-size:20px_20px]'}`}>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#E5E4E2] via-[#B0B0B0] to-[#7F7F7F]">Vishesh</span>
              </motion.h1>

              <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-300">
                Full Stack <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#E5E4E2] to-[#4A4A4A] italic">Developer</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed">
                I love turning ideas into visuals that inspire, engage, and leave a lasting mark.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto h-14 px-10 text-lg font-bold bg-[#E5E4E2] text-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5"
              >
                Let's Talk
                <ArrowUpRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto h-14 px-10 text-lg font-semibold border border-[#E5E4E2]/20 text-white hover:bg-white/5 rounded-xl transition-all"
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 🔹 Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileInView={{animationDuration:1}}
            className="col-span-12 lg:col-span-5 order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none"
          >
            {!showVideo && <div className="relative group mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#E5E4E2]/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {(<img src={myImage} alt="Vishesh" className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />)}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              </div>
            </div>}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20" />
    </section>
  )
}

export default Hero