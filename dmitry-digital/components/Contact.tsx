import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

interface ContactProps {
  onOpenModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenModal }) => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 p-8 md:p-16 shadow-2xl text-center">
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Давайте создадим что-то великое
          </h2>
          
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Есть идея проекта? Нужна консультация по AI или Web-разработке? 
            Мы всегда на связи и готовы обсудить детали.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
            
            {/* Phone Number Section */}
            <div className="flex flex-col items-center group cursor-pointer min-w-[200px]">
              <a href="tel:+79774224617" className="flex flex-col items-center w-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:text-white group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 shadow-lg">
                  <Phone size={32} />
                </div>
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Телефон</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                  +7 (977) 422-46-17
                </span>
              </a>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

            {/* Telegram Section */}
            <div className="flex flex-col items-center group cursor-pointer min-w-[200px]">
              <a href="https://t.me/Dmitriy_prog" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:text-white group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 shadow-lg">
                  <Send size={30} className="ml-[-2px] mt-[2px]" /> {/* Visual adjustment for Send icon to look centered */}
                </div>
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Telegram</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  @Dmitriy_prog
                </span>
              </a>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

            {/* Email Section */}
             <div className="flex flex-col items-center group cursor-pointer min-w-[200px]">
               <a href="mailto:dmitriy_prog@mail.ru" className="flex flex-col items-center w-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:text-white group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 shadow-lg">
                  <Mail size={32} />
                </div>
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Email</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  dmitriy_prog@mail.ru
                </span>
              </a>
            </div>

          </div>

          {/* Main CTA Button */}
          <div className="flex justify-center">
            <button 
              onClick={onOpenModal}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
            >
              <span className="relative z-10">Обсудить проект</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </button>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm px-4">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <MapPin size={16} />
             <span>Москва, Россия</span>
          </div>
          
          <div className="flex gap-6">
             <a href="https://t.me/Dmitriy_prog" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Telegram</a>
             <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
             <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
          
          <div className="mt-4 md:mt-0">
             © 2026 Dmitry Digital
          </div>
        </div>

      </div>

      {/* Inline style for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;