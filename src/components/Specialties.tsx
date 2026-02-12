import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const specialties = [
  {
    title: "Empanades Argentines",
    description: "Autèntiques empanades elaborades amb receptes tradicionals, massa artesana i farciments suculents.",
    image: "/especialitats/empanades.jpeg"
  },
  {
    title: "Alfajores Artesans",
    description: "Dolç tradicional amb dulce de leche de primera qualitat, perfectes per a qualsevol celebració.",
    image: "/especialitats/alfajores.jpeg"
  },
  {
    title: "Croquetes d'Autor",
    description: "Croquetes de proximitat amb combinacions de sabors úniques i una textura increïblement cremosa.",
    image: "/especialitats/croquetes.jpeg"
  }
];

export const Specialties: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === specialties.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? specialties.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="pt-24 pb-20 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl md:text-7xl text-brand-900 mb-6">
            Especialitats <span className="italic text-brand-400">Úniques</span>
          </h1>
          <p className="text-xl text-brand-700 font-light leading-relaxed">
            Empenades argentines, alfajores i croquetes d'autor de primera qualitat. Cada mossegada és una experiència gourmet.
          </p>
        </div>

        {/* Stylish Slider */}
        <div className="relative max-w-5xl mx-auto h-[500px] md:h-[600px] group overflow-hidden rounded-3xl shadow-2xl border border-white/20">
          {specialties.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3 className="font-serif text-3xl md:text-5xl mb-4 transform transition-all duration-700 delay-300 translate-y-0 opacity-100">
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl text-brand-100 max-w-2xl font-light transform transition-all duration-700 delay-500 translate-y-0 opacity-100 italic">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-30 border border-white/20"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-30 border border-white/20"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {specialties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-12 h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-gold-400 w-16' : 'bg-white/40'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-100 flex-1 max-w-xs text-center transform hover:-translate-y-2 transition-transform duration-300">
            <span className="block text-gold-500 font-bold mb-2 uppercase tracking-widest text-xs">Artesania</span>
            <span className="font-serif text-2xl italic">Feta a mà</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-100 flex-1 max-w-xs text-center transform hover:-translate-y-2 transition-transform duration-300">
            <span className="block text-gold-500 font-bold mb-2 uppercase tracking-widest text-xs">Qualitat</span>
            <span className="font-serif text-2xl italic">Ingredients Gourmet</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-100 flex-1 max-w-xs text-center transform hover:-translate-y-2 transition-transform duration-300">
            <span className="block text-gold-500 font-bold mb-2 uppercase tracking-widest text-xs">Origen</span>
            <span className="font-serif text-2xl italic">Tradició Argentina</span>
          </div>
        </div>
      </div>
    </div>
  );
};
