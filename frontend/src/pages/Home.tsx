import React from 'react'
import { motion } from "framer-motion"
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Education from '../components/Home/Education'
import ThankYou from '../components/Home/ThankYou'

const Home: React.FC = () => {
  return (
    <div className='relative w-full overflow-x-hidden'>
      {/* Changed h-screen to min-h-screen on mobile to prevent content cutoff.
          Kept sticky for tablet/desktop (md:).
      */}
      <section className='relative md:sticky md:top-0 h-auto md:h-screen z-10'>
        <Hero />
      </section>

      {/* Adjusted rounded corners: smaller for mobile (1.5rem), larger for desktop.
          Removed hard 'y: 120' on mobile if it causes overlap issues, 
          but kept it as it's a nice entrance effect.
      */}
      <motion.section
        className='relative min-h-screen bg-zinc-900 z-20 rounded-t-[1.5rem] md:rounded-t-[3rem] -mt-10 md:mt-0'
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <About />
      </motion.section>

      <motion.section
        className='relative min-h-screen bg-zinc-900 z-20 rounded-t-[1.5rem] md:rounded-t-[3rem] -mt-10 md:mt-0'
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <Education />
      </motion.section>

      <motion.section
        className='relative min-h-screen bg-zinc-900 z-20 rounded-t-[1.5rem] md:rounded-t-[3rem] -mt-10 md:mt-0'
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ThankYou />
      </motion.section>
    </div>
  )
}

export default Home