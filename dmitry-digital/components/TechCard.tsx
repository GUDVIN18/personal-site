import React from 'react';
import { TechItem } from '../types';

interface TechCardProps {
  item: TechItem;
}

const TechCard: React.FC<TechCardProps> = ({ item }) => {
  return (
    <div className="group relative w-full aspect-square perspective-1000 cursor-pointer">
      <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl backface-hidden group-hover:border-blue-500/30 transition-all duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
            <img 
              src={item.logo} 
              alt={item.name} 
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
              loading="lazy"
            />
          </div>
          <h3 className="text-xs md:text-sm font-bold text-slate-400 tracking-[0.2em] uppercase text-center group-hover:text-white transition-colors">
            {item.name}
          </h3>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
        </div>

        {/* Back Side - Information layer with premium blue theme */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 backdrop-blur-lg border border-blue-400/30 rounded-2xl backface-hidden rotate-y-180 p-5 text-center">
          <div className="mb-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-black">
              {item.category}
            </span>
          </div>
          <p className="text-[11px] md:text-[13px] font-medium text-white leading-tight">
            {item.description}
          </p>
          <div className="mt-4 w-6 h-1 bg-white/40 rounded-full"></div>
        </div>
        
      </div>
    </div>
  );
};

export default TechCard;