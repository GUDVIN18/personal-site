import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenModal: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenModal }) => {
  return (
    <section id="services" className="py-24 px-4 md:px-12 relative overflow-hidden bg-[#020617]">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto">
        {/* Header Layout from Screenshot */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-emerald-500"></span>
              <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[10px]">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Решения, которые <br/>
              <span className="text-slate-500 italic lowercase block md:mt-2">меняют правила игры</span>
            </h2>
          </div>
          
          <div className="max-w-md md:mt-12">
            <div className="border-l border-slate-800 pl-8 py-2">
              <p className="text-slate-400 text-lg leading-relaxed">
                Мы объединяем глубокую экспертизу в ML и веб-технологиях для создания масштабируемых систем.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col h-[600px] bg-slate-900/30 backdrop-blur-sm rounded-[48px] border border-white/5 overflow-hidden transition-all duration-500 hover:border-emerald-500/20 shadow-2xl cursor-pointer"
              onClick={onOpenModal}
            >
              {/* Image Section */}
              <div className="relative h-[65%] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                
                {/* Floating Icon in Square (as seen in screenshot) */}
                <div className="absolute top-10 left-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 flex items-center justify-center text-emerald-400 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <service.icon size={24} />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="px-10 pb-10 flex flex-col flex-grow relative z-10 -mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto">
                    <button 
                        className="group/btn flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold uppercase tracking-widest text-xs mb-6"
                    >
                        <span>Обсудить проект</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Subtle border at bottom like in screenshot */}
                    <div className="pt-6 border-t border-white/5 w-full">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 group-hover:text-emerald-500/50 transition-colors">
                            Dmitry Digital / 2026
                        </div>
                    </div>
                </div>
              </div>

              {/* Inner Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;