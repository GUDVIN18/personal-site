import React, { useEffect, useState } from 'react';
import { X, Check, Loader2, CheckCircle2 } from 'lucide-react';
import { api } from '../api';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    policyPrivacy: true,
    policyData: true
  });

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      // Reset state on open
      setIsSuccess(false);
      setError(null);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.policyPrivacy || !formData.policyData) {
        setError('Пожалуйста, подтвердите согласие на обработку данных');
        return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
        await api.sendApplication(formData);
        setIsSuccess(true);
        // Очистка формы
        setFormData({
            name: '',
            phone: '',
            email: '',
            policyPrivacy: true,
            policyData: true
        });
        // Закрыть модалку автоматически через 3 секунды
        setTimeout(() => {
            onClose();
        }, 3000);
    } catch (err) {
        setError('Ошибка при отправке. Попробуйте позже.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md"
            onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className={`relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
            >
                <X size={20} />
            </button>

            {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                    <p className="text-slate-400">Мы свяжемся с вами в ближайшее время.</p>
                </div>
            ) : (
                <>
                    <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Обсудить проект</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Оставьте свои контакты, и мы свяжемся с вами для обсуждения деталей вашего проекта.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-4">
                            <div className="group">
                                <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1.5 group-focus-within:text-blue-400 transition-colors">
                                    Ваше имя
                                </label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 transition-all"
                                    placeholder="Иван Иванов"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className="group">
                                <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1.5 group-focus-within:text-blue-400 transition-colors">
                                    Телефон
                                </label>
                                <input 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 transition-all"
                                    placeholder="+7 (999) 000-00-00"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="group">
                                <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1.5 group-focus-within:text-blue-400 transition-colors">
                                    Электронная почта
                                </label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 transition-all"
                                    placeholder="example@mail.ru"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="space-y-3 pt-2">
                            <label className="flex items-start gap-3 cursor-pointer group select-none">
                                <div className="relative flex items-center pt-0.5">
                                    <input 
                                        type="checkbox" 
                                        className="peer h-5 w-5 appearance-none rounded border border-slate-600 bg-slate-800 transition-all checked:border-blue-500 checked:bg-blue-500 disabled:opacity-50" 
                                        checked={formData.policyPrivacy}
                                        onChange={(e) => setFormData({...formData, policyPrivacy: e.target.checked})}
                                        disabled={isSubmitting}
                                    />
                                    <Check size={14} strokeWidth={3} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                                </div>
                                <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-tight">
                                    Согласен с <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">политикой конфиденциальности</a>
                                </span>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer group select-none">
                                <div className="relative flex items-center pt-0.5">
                                    <input 
                                        type="checkbox" 
                                        className="peer h-5 w-5 appearance-none rounded border border-slate-600 bg-slate-800 transition-all checked:border-blue-500 checked:bg-blue-500 disabled:opacity-50" 
                                        checked={formData.policyData}
                                        onChange={(e) => setFormData({...formData, policyData: e.target.checked})}
                                        disabled={isSubmitting}
                                    />
                                    <Check size={14} strokeWidth={3} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                                </div>
                                <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-tight">
                                    Согласен с <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">политикой обработки персональных данных</a>
                                </span>
                            </label>
                        </div>
                        
                        {error && (
                            <div className="text-red-400 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Отправка...
                                </>
                            ) : (
                                'Отправить заявку'
                            )}
                        </button>
                    </form>
                </>
            )}
        </div>
    </div>
  );
};

export default ContactModal;