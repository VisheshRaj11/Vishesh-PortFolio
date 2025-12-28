import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Radar, RadarChart, PolarGrid, PolarAngleAxis 
} from 'recharts';
import { Activity, GraduationCap, Box, CheckCircle2 } from 'lucide-react';

const EducationDashboard = () => {
  const cgpaData = [
    { period: 'Bijnor Public (XII)', score: 9.2, full: 10, fill: '#10b981' },
    { period: 'LPU (B.Tech)', score: 8.5, full: 10, fill: '#a574dd' }, 
  ];

  const skillData = [
    { subject: 'MERN Stack', A: 95, fullMark: 100 },
    { subject: 'Kotlin/XML', A: 85, fullMark: 100 },
    { subject: 'Docker', A: 65, fullMark: 100 },
    { subject: 'Open Source', A: 80, fullMark: 100 },
    { subject: 'Algorithms', A: 75, fullMark: 100 },
  ];

  return (
    // Added py-8 for vertical breathing room and space-y-8 for section separation
    <div className="w-full font-mono text-slate-300 py-8 space-y-10">
      
      {/* Header: System Health - Balanced padding and margin */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-4">
        <div className="flex items-center gap-3">
          <Activity className="text-emerald-500 animate-pulse" size={20} />
          <h3 className="text-white font-bold uppercase tracking-widest text-sm md:text-base">
            Academic_Analytics_v2.0
          </h3>
        </div>
        <div className="hidden sm:block text-[10px] px-3 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full font-bold">
          STATUS: OPTIMIZED
        </div>
      </div>

      {/* Main Charts Grid - Adjusted gap and padding for better alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Chart 1: Academic Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-8 text-xs font-bold text-slate-500 tracking-widest uppercase">
            <GraduationCap size={16} /> <span>System Performance / CGPA</span>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cgpaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="period" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#475569" fontSize={10} domain={[0, 10]} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '12px' }}
                />
                <Bar dataKey="score" radius={[6, 6, 0, 0]} barSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Chart 2: Technical Deployment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-8 text-xs font-bold text-slate-500 tracking-widest uppercase">
            <Box size={16} /> <span>Skillset Matrix / Architect</span>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={10} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Narrative Overlay - Increased gap and padding for better readability */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors">
          <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] mb-2">Build Environment</p>
          <p className="text-base text-white font-bold">LPU B.Tech Candidate</p>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Optimizing Full Stack and Mobile logic for production-grade releases. 
            Maintaining a <span className="text-white">8.5 CGPA</span> standard.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-4">
          <div className="mt-1">
            <CheckCircle2 className="text-emerald-500" size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-tight">Docker Image Pulling...</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Currently containerizing workflows and exploring Kubernetes orchestration 
              to scale personal architectures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDashboard;