import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Loader2, FolderOpen } from 'lucide-react';
import { ProjectItem } from '../types';
import { api } from '../api';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await api.getProjects();
        // Используем ТОЛЬКО данные из API.
        // Если API вернул null/undefined, ставим пустой массив.
        setProjects(data || []);
      } catch (error) {
        console.error('Failed to load projects from API:', error);
        // При ошибке список пуст, никаких статических данных
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const nextProject = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-[#020617] flex justify-center items-center min-h-[500px]">
        <Loader2 className="animate-spin text-emerald-500" size={48} />
      </section>
    );
  }

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative overflow-hidden bg-[#020617]">
      {/* Background patterns and glows matching TechStack */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Styled like Tech Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Portfolio</span>
            </div>
            
            <div className="relative inline-block">
              {/* Corner accent exactly like the Tech Stack */}
              <div className="absolute -top-6 -left-8 w-10 h-10 border-t-[3px] border-l-[3px] border-emerald-500"></div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">
                Наши <br/>
                <span className="text-slate-600 italic lowercase block mt-2">проекты</span>
              </h2>
            </div>
          </div>
          
          <div className="max-w-md border-l border-slate-800 pl-8 py-2 hidden md:block">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Реализуем идеи в надежные цифровые продукты, которые двигают прогресс.
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
           <div className="flex flex-col items-center justify-center py-20 bg-slate-900/30 border border-white/5 rounded-3xl backdrop-blur-sm text-center px-4">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-500 mb-4">
                 <FolderOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">Проекты не найдены</h3>
              <p className="text-slate-500 max-w-md">
                 Сейчас список проектов пуст или сервер недоступен. Добавьте проекты через API, чтобы они появились здесь.
              </p>
           </div>
        ) : (
           <>
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <div 
                key={idx}
                className="group relative flex flex-col bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:bg-slate-900/60 p-8 h-full"
                >
                {/* Pattern inside like in screenshot */}
                <div className="absolute inset-0 striped-bg opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
                
                {/* Project Icon/Visual */}
                <div className="mb-10 w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                    <img src={project.image} alt="" className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-emerald-400 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                {/* Tags & Action */}
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-sm text-[10px] font-black uppercase tracking-widest text-emerald-400">
                        {tag}
                        </span>
                    ))}
                    </div>
                    
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all">
                        <ArrowUpRight size={18} />
                        </a>
                    )}
                    {!project.link && (
                        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all">
                        <ArrowUpRight size={18} />
                        </button>
                    )}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
            ))}
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden relative px-1">
                <div className="relative flex items-center justify-center">
                    
                    {/* Left Button */}
                    <button 
                        onClick={prevProject}
                        className="absolute left-0 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>
                    
                    {/* Card Container */}
                    <div className="w-full px-4">
                        <div className="group relative flex flex-col bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-8 min-h-[420px] shadow-2xl transition-all duration-300">
                            <div className="absolute inset-0 striped-bg opacity-15 pointer-events-none"></div>
                            
                            {/* Centered Logo */}
                            <div className="mb-8 w-20 h-20 mx-auto rounded-full bg-slate-800/80 flex items-center justify-center border border-white/10 shadow-lg ring-1 ring-white/5 overflow-hidden">
                            <img src={currentProject.image} alt="" className="w-full h-full object-contain" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase text-center">
                            {currentProject.title}
                            </h3>
                            
                            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow text-center font-medium">
                            {currentProject.description}
                            </p>

                            {/* Footer */}
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                                {currentProject.tags[0]}
                            </div>
                            
                            <button className="text-xs font-bold text-white uppercase tracking-widest hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400 pb-0.5">
                                Смотреть проект
                            </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Button */}
                    <button 
                        onClick={nextProject}
                        className="absolute right-0 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all"
                        aria-label="Next project"
                    >
                        <ChevronRight size={24} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                            ? 'bg-emerald-500 w-8' 
                            : 'bg-slate-700 w-2 hover:bg-slate-600'
                        }`}
                        aria-label={`Go to project ${idx + 1}`}
                    />
                    ))}
                </div>
            </div>
           </>
        )}
      </div>
    </section>
  );
};

export default Projects;