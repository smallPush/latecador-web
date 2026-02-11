export const Header: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-yellow-300 to-orange-300 overflow-hidden">
      {/* Right angled section - Sharp geometric design */}
      <div 
        className="absolute top-0 right-0 h-full w-[45%] md:w-[35%] lg:w-[30%] bg-gray-100 z-10 shadow-2xl flex flex-col justify-center items-center text-center p-4 md:p-8"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="mb-2">
            <p className="text-[0.65rem] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Horari</p>
            <p className="font-bold text-gray-800 text-xs md:text-sm">Dilluns a divendres</p>
            <p className="font-bold text-gray-800 text-xs md:text-sm">10h — 14h</p>
          </div>
          
          <div className="h-px w-12 bg-orange-400 mx-auto my-1 md:my-2"></div>
          
          <div>
            <p className="text-[0.65rem] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Contacte</p>
            <p className="text-xl md:text-3xl font-black text-gray-900 mt-1">654 84 09 68</p>
            <p className="font-bold text-orange-600 text-xs md:text-sm uppercase">(Anna)</p>
          </div>

          <p className="text-gray-600 font-bold text-[0.6rem] md:text-xs mt-3 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
            latecador@gmail.com
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-20 w-[55%] md:w-[65%]">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* Logo icon */}
          <div className="transform -rotate-12 z-10 filter drop-shadow-xl">
            <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-14 sm:w-32 sm:h-24">
              <rect x="2" y="2" width="70" height="50" rx="8" fill="#FCD34D" stroke="#B45309" strokeWidth="3" />
              <path d="M72 25H85C87.7614 25 90 27.2386 90 30V35C90 37.7614 87.7614 40 85 40H72V25Z" fill="#FCD34D" stroke="#B45309" strokeWidth="3" />
              <circle cx="82" cy="32.5" r="3.5" fill="none" stroke="#B45309" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
            <h1 className="font-script text-5xl sm:text-7xl md:text-9xl text-gray-900 relative transform -rotate-2 drop-shadow-md leading-none">
              La tecad'or
            </h1>
            <h2 className="text-[#1e40af] tracking-[0.3em] font-black text-[0.6rem] sm:text-xs md:text-xl mt-4 uppercase font-sans">
              CÀTERING & ESDEVENIMENTS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
