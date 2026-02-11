import { Mail, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 pt-16 pb-12 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-yellow-300 to-orange-300 rounded-2xl shadow-xl flex flex-col md:flex-row">
          
          {/* Left Content Section */}
          <div className="flex-1 p-8 md:p-12 z-20">
            <h3 className="font-script text-4xl md:text-5xl text-gray-900 mb-4 transform -rotate-1">
              Tens una idea? Explican's-la!!
            </h3>
            <p className="font-bold text-gray-800 text-sm md:text-lg max-w-md leading-relaxed">
              Es fan adaptacions per al·lèrgies i intoleràncies,
              i pressupostos personalitzats.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="bg-[#1e40af] text-white px-4 py-1 text-xs font-black uppercase tracking-widest rounded">
                Parlem?
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-black text-gray-900">654 84 09 68</span>
                <span className="font-bold text-orange-700 text-sm uppercase">(Anna)</span>
              </div>
            </div>
          </div>

          {/* Right Geometric Section (Matching Header) */}
          <div 
            className="md:w-[35%] bg-gray-100 flex flex-col justify-center items-center p-8 md:p-12 z-10"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="flex flex-col gap-6 w-full">
              <a href="mailto:latecador@gmail.com" className="group flex items-center gap-4 transition-transform hover:scale-105">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 group-hover:border-blue-400 transition-colors">
                  <Mail className="w-6 h-6 text-[#1e40af]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold">Email</span>
                  <span className="font-bold text-gray-800 text-sm md:text-base break-all">latecador@gmail.com</span>
                </div>
              </a>

              <a href="https://instagram.com/latecador3" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 transition-transform hover:scale-105">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 group-hover:border-pink-400 transition-colors">
                  <Instagram className="w-6 h-6 text-[#E4405F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold">Instagram</span>
                  <span className="font-bold text-gray-800 text-sm md:text-base">@latecador3</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} La tecad'or — Càtering & Esdeveniments
        </div>
      </div>
    </footer>
  );
};
