import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from "axios";
import { toast } from 'react-toastify';

interface Response {
   data:{
     success:boolean,
     message:string
   }
}

const Contact: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const sendData = {
      email:formData.get('email'),
      mobile:formData.get('mobile'),
      message:formData.get('message')
    }
    setLoader(true);
    try {
      const response: Response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`,sendData);
      if(response.data.success) {
        toast.success(response.data.message);
        return
      }
    } catch (error) {
       console.error("Contact submit error:", error);
       toast.error("Failed to send message");
    } finally {
      form.reset();
      setLoader(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden bg-black text-white">
      
      {/* Dull/Professional Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/contactbg.jpg')] bg-cover bg-center bg-no-repeat opacity-40"
      />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            Let's build <br /> 
            <span className="text-gray-500">something great.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-md leading-relaxed">
            I'm currently available for freelance work and full-time positions. 
            If you have a project in mind or just want to chat, feel free to reach out.
          </p>
          
          {/* Subtle social proof or email shortcut */}
          <div className="mt-10 flex flex-col gap-4 text-sm text-gray-500">
             <p className="flex items-center gap-2">
               <span className="w-8 h-[1px] bg-gray-700"></span> 
               Based in [Your Location]
             </p>
             <p className="flex items-center gap-2">
               <span className="w-8 h-[1px] bg-gray-700"></span> 
               Response time: ~24 hours
             </p>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-lg bg-[#111]/80 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Email Address</label>
              <input 
                name='email'
                type="email" 
                placeholder="you@example.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Phone Number</label>
              <input
               name='mobile' 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Message</label>
              <textarea
              name='message'
                typeof='text'
                rows={4}
                placeholder="How can I help you?"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-white text-black font-bold py-4 rounded-xl mt-4 hover:bg-gray-200 transition-all shadow-lg shadow-white/5"
            >
              {loader ? "Sending .." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;