import React from 'react'
import { motion } from "framer-motion"
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Education from '../components/Home/Education'
import ThankYou from '../components/Home/ThankYou'

const Home:React.FC = () => {
  return (
    <div className='relative'>
      <section className='sticky top-0 h-screen z-10'>
        <Hero/>
      </section>

      <motion.section
        className='relative min-h-screen bg-zinc-900 z-20 rounded-t-[3rem]'
        initial={{y: 120}}
        whileInView={{y:0}}
        transition={{duration:0.8, ease: "easeOut"}}
        viewport={{once:true}}
      >
        <About/>
      </motion.section>

      <motion.section
        className='relative min-h-screen bg-zinc-900 z-20 rounded-t-[3rem]'
        initial={{y: 120}}
        whileInView={{y:0}}
        transition={{duration:0.8, ease: "easeOut"}}
        viewport={{once:true}}
      >
        <Education/>
      </motion.section>

      <motion.section
      className='relative min-h-screen bg-zinc-900 z-20 rounded-t-[3rem]'
      initial={{y: 120}}
      whileInView={{y:0}}
      transition={{duration:0.8, ease: "easeOut"}}
      viewport={{once: true}}
      >
        <ThankYou/>
      </motion.section>
      
    </div>
  )
}

export default Home