import React from 'react';
import { TECH_STACK } from '../constants';
import TechCard from './TechCard';

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-32 px-4 relative overflow-hidden bg-[#020617]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Glow accents */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Technology</span>
            </div>
            
            <div className="relative inline-block">
              {/* Corner accent exactly like the reference */}
              <div className="absolute -top-6 -left-8 w-10 h-10 border-t-[3px] border-l-[3px] border-emerald-500"></div>
              
              <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">
                Стек <br/>
                <span className="text-slate-600 italic lowercase block mt-2">наших технологий</span>
              </h2>
            </div>
          </div>
          
          <div className="max-w-md border-l border-slate-800 pl-8 py-2">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Мы используем передовой стек для ML и высоконагруженных систем, гарантируя скорость и масштабируемость.
            </p>
          </div>
        </div>

        {/* 5-column grid layout for desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {TECH_STACK.map((item) => (
            <TechCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;