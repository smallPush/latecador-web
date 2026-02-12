import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl animate-in fade-in slide-in-from-bottom duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilitzem cookies pròpies i de tercers per millorar la teva experiència. En continuar navegant, n'acceptes l'ús segons la nostra política de privadesa i la normativa GDPR.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-2 rounded-lg font-bold transition-colors whitespace-nowrap"
          >
            Acceptar
          </button>
        </div>
      </div>
    </div>
  );
};
