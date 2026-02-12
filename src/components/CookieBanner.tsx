import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000); // Slight delay for better UX
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    import('../utils/analytics').then(({ initGA }) => {
      initGA();
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-brand-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-300">Privadesa i Menú</p>
          </div>

          <p className="text-brand-100 text-sm leading-relaxed">
            Utilitzem cookies per millorar la vostra experiència i oferir un servei personalitzat. En continuar navegant, n'accepteu l'ús segons la nostra normativa GDPR.
          </p>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handleAccept}
              className="flex-1 bg-gold-400 hover:bg-white text-brand-900 px-6 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest"
            >
              Acceptar tot
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-brand-400 hover:text-white text-[10px] uppercase font-bold tracking-widest px-2"
            >
              Ignorar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
