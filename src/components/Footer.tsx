import { Mail, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10 pb-20 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Parallelogram Banner */}
        <div className="relative">
          {/* Top-left ribbon/fold */}
          <div className="absolute -top-6 -left-4 w-32 h-20 bg-[#134e4a] transform -rotate-12 z-0 hidden sm:block"
            style={{ clipPath: 'polygon(0 20%, 100% 0, 85% 100%, 0 80%)' }}></div>

          <div className="bg-[#fbbf24] py-8 px-6 sm:px-20 transform -skew-x-12 relative z-10 shadow-lg">
            <div className="transform skew-x-12 text-center text-gray-900">
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Tens una idea? Explican's-la!!
              </h3>
              <p className="font-medium text-sm sm:text-base leading-snug">
                Es fan adaptacions per al·lèrgies i intoleràncies,<br className="hidden sm:block" />
                i pressupostos personalitzats.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
                <span className="text-[#134e4a] font-bold text-xl uppercase">Parlem?</span>
                <span className="text-[#134e4a] font-bold text-3xl">654 84 09 68</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Email */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <a href="mailto:latecador@gmail.com" className="flex items-center gap-3 text-[#134e4a] hover:opacity-80 transition-opacity">
            <div className="p-2 border-2 border-blue-600 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-bold text-xl sm:text-2xl">latecador@gmail.com</span>
          </a>

          <a href="https://instagram.com/latecador3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#134e4a] hover:opacity-80 transition-opacity">
            <div className="p-1">
              <Instagram className="w-10 h-10 text-[#E4405F]" />
            </div>
            <span className="font-bold text-xl sm:text-2xl">@latecador3</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
