import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-sm font-medium animate-fade-in-up">
        <Sparkles size={16} />
        <span>Инновации в каждой строке кода</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300">
        Искусственный Интеллект <br /> и Веб-Сервисы
      </h1>
      
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
        Студия <span className="text-blue-400 font-semibold">Dmitry Digital</span>. 
        Мы создаем умные решения для бизнеса: от чат-ботов и ML-моделей до высоконагруженных веб-платформ.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onOpenModal}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
        >
          Обсудить проект
        </button>
        <a 
          href="#stack"
          className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 text-white rounded-xl font-semibold transition-all backdrop-blur-sm"
        >
          Стек технологий
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce text-slate-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;