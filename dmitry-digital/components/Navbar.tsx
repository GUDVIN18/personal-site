import React, { useState, useEffect } from 'react';
import { Terminal, Phone, MessageSquare, Menu, X, Home, Briefcase, Layers, Mail, BrainCircuit } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Smooth scroll logic
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        const yOffset = -80; // Offset for fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 300); // Wait for menu close animation
    } else if (id === 'hero') {
       setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  const menuItems = [
    { id: 'hero', label: 'Главная', icon: Home },
    { id: 'services', label: 'Услуги', icon: BrainCircuit },
    { id: 'projects', label: 'Проекты', icon: Briefcase },
    { id: 'stack', label: 'Стек Технологий', icon: Layers },
    { id: 'contact', label: 'Контакты', icon: Mail },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors group"
            >
              <Menu size={24} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3 font-bold text-xl tracking-tighter group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20 group-hover:rotate-[10deg] transition-all duration-300">
                <Terminal size={20} strokeWidth={2.5} />
              </div>
              <span className="text-white hidden sm:inline">Dmitry<span className="text-blue-400">Digital</span></span>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Phone Number - Visible on Desktop */}
            <a 
              href="tel:+79774224617" 
              className="hidden md:flex items-center gap-2.5 text-slate-300 hover:text-white transition-all font-semibold text-sm group"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={14} />
              </div>
              <span>+7 (977) 422-46-17</span>
            </a>

            {/* CTA Button */}
            <button 
              onClick={onOpenModal}
              className="group relative px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageSquare size={16} className="group-hover:translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Обсудить проект</span>
                <span className="sm:hidden">Обсудить</span>
              </span>
              
              {/* Shimmer / Glow Overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0f1e]/98 backdrop-blur-xl z-[60] transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Decorative background elements inside menu */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 py-6 h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-12 md:mb-0">
             <div className="flex items-center gap-6">
                <button 
                  onClick={toggleMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
                <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
                  <span className="text-white">Dmitry<span className="text-blue-400">Digital</span></span>
                </div>
             </div>

             {/* Phone inside menu header for mobile convenience */}
             <a href="tel:+79774224617" className="md:hidden w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-blue-400">
               <Phone size={18} />
             </a>
          </div>

          {/* Menu Items Container */}
          <div className="flex-grow flex flex-col justify-center">
             <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
                {menuItems.map((item, idx) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 -ml-4"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-400/30 group-hover:bg-blue-400/10 transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <span className="text-3xl md:text-5xl font-bold text-white group-hover:text-blue-200 transition-colors tracking-tight">
                      {item.label}
                    </span>
                  </a>
                ))}
             </div>
          </div>
          
          {/* Menu Footer */}
          <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-slate-500 text-sm gap-4">
            <div>
              © 2026 Dmitry Digital. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://t.me/Dmitriy_prog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
              <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
              <a href="mailto:dmitriy_prog@mail.ru" className="hover:text-white transition-colors">dmitriy_prog@mail.ru</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;