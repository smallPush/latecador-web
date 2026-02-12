import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Qui som', href: '#about' },
    { label: 'El nostre Menú', href: '#menu' },
    { label: 'Contacte', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${isScrolled ? 'bg-brand-900/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-white group">
            La teca <span className="italic text-brand-300 group-hover:text-gold-400 transition-colors">d'or</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white hover:text-gold-400 text-xs font-black uppercase tracking-[0.2em] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[110] bg-brand-900 transition-all duration-500 flex flex-col items-center justify-center gap-12 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 text-white p-2"
        >
          <X size={32} />
        </button>

        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-white hover:text-gold-400 text-4xl font-serif italic transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <header className="relative w-full h-[85vh] flex items-center overflow-hidden bg-brand-900">
        {/* Immersive Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 to-brand-900 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
            alt="Catering background"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col md:flex-row justify-between items-center gap-12 mt-12">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gold-400 bg-gold-400/10 text-gold-400 text-sm font-bold tracking-widest uppercase animate-in fade-in slide-in-from-left duration-1000">
              Producte d'elaboració pròpia
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              La teca <span className="italic text-brand-300">d'or</span>
            </h1>

            <h2 className="font-sans text-xl md:text-2xl text-brand-100 tracking-[0.4em] uppercase font-light animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              Càtering & Esdeveniments
            </h2>

            <div className="mt-12 flex flex-wrap gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <div className="flex flex-col">
                <span className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-1">Passió per la cuina</span>
                <span className="text-white font-serif text-3xl italic">Artesana</span>
              </div>
              <div className="h-10 w-px bg-white/20 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-1">Contacte</span>
                <a href="tel:+34654840968" className="text-white font-bold text-3xl hover:text-gold-400 transition-colors">654 84 09 68</a>
              </div>
            </div>
          </div>

          {/* Floating Badge / Logo */}
          <div className="hidden lg:flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-in zoom-in duration-1000">
            <svg width="120" height="84" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-18 text-gold-400 mb-4">
              <rect x="2" y="2" width="70" height="50" rx="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="3" />
              <path d="M72 25H85C87.7614 25 90 27.2386 90 30V35C90 37.7614 87.7614 40 85 40H72V25Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="3" />
              <circle cx="82" cy="32.5" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="text-white/80 font-script text-2xl">L'Ametlla del Vallès</p>
          </div>
        </div>

        {/* Decorative Bottom Wave/Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-16 fill-brand-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.83,103.11,114.49,107.82,172.46,99.31c51.72-7.59,98.71-25.75,148.93-42.87Z"></path>
          </svg>
        </div>
      </header>
    </>
  );
};
