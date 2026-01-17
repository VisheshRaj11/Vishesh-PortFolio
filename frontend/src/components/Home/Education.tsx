import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Radar, RadarChart, PolarGrid, PolarAngleAxis 
} from 'recharts';
import { Activity, GraduationCap, Box, CheckCircle2 } from 'lucide-react';

const EducationDashboard = () => {
  const cgpaData = [
    { period: 'Bijnor (XII)', score: 9.2, full: 10, fill: '#10b981' }, // Shortened for mobile fit
    { period: 'LPU (B.Tech)', score: 8.5, full: 10, fill: '#a574dd' }, 
  ];

  const skillData = [
    { subject: 'MERN', A: 95, fullMark: 100 },
    { subject: 'Kotlin', A: 85, fullMark: 100 },
    { subject: 'Docker', A: 65, fullMark: 100 },
    { subject: 'OSS', A: 80, fullMark: 100 },
    { subject: 'Algo', A: 75, fullMark: 100 },
  ];

  return (
    // Responsive padding: px-4 for mobile, px-0 (or more) for desktop
    <div className="w-full font-mono text-slate-300 py-6 md:py-8 px-4 md:px-0 space-y-8 md:space-y-10">
      
      {/* Header: Fixed for narrow screens */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-6 gap-4">
        <div className="flex items-center gap-3">
          <Activity className="text-emerald-500 animate-pulse shrink-0 ml-2" size={20} />
          <h3 className="text-white font-bold uppercase tracking-widest text-sm md:text-base break-all sm:break-normal">
            Academic_Analytics_v2.0
          </h3>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        
        {/* Chart 1: Academic Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800 p-5 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-6 md:mb-8 text-[10px] md:text-xs font-bold text-slate-500 tracking-widest uppercase">
            <GraduationCap size={16} /> <span>System Performance / CGPA</span>
          </div>
          {/* Responsive Height: Shorter on mobile to keep page flow */}
          <div className="h-[240px] md:h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cgpaData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="period" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#475569" fontSize={10} domain={[0, 10]} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '12px' }}
                />
                <Bar dataKey="score" radius={[6, 6, 0, 0]} barSize={40} />
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
          className="bg-slate-900/40 border border-slate-800 p-5 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-6 md:mb-8 text-[10px] md:text-xs font-bold text-slate-500 tracking-widest uppercase">
            <Box size={16} /> <span>Skillset Matrix / Architect</span>
          </div>
          <div className="h-[240px] md:h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {/* cx 50% ensures it stays centered on narrow screens */}
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={9} />
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

      {/* Narrative Cards: Column on mobile, Row on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-5 md:p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors">
          <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] mb-2">Build Environment</p>
          <p className="text-base text-white font-bold">LPU B.Tech Candidate</p>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Optimizing Full Stack and Mobile logic. 
            Maintaining a <span className="text-white">8.5 CGPA</span> standard.
          </p>
        </div>

        <div className="p-5 md:p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-4">
          <div className="mt-1 shrink-0">
            <CheckCircle2 className="text-emerald-500" size={20} md:size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-tight">Docker Image Pulling...</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Currently containerizing workflows and exploring Kubernetes orchestration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDashboard;