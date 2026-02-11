

export const Header: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-yellow-300 to-orange-300 overflow-hidden">
      {/* Right grey curve - Convex shape approximation */}
      <div className="absolute top-0 right-0 h-full w-1/3 md:w-1/4 bg-gray-200 rounded-l-[100%] flex flex-col justify-center items-center text-center p-4 z-10 shadow-[-10px_0_20px_rgba(0,0,0,0.05)]">
        <p className="font-semibold text-gray-700">Dilluns a divendres</p>
        <p className="font-semibold text-gray-700">10 h a 14h</p>
        <p className="text-2xl font-bold text-black mt-2">654 84 09 68</p>
        <p className="font-semibold text-gray-700">(ANNA)</p>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center pl-10 md:pl-20 w-2/3">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Cutting board icon */}
          <div className="transform -rotate-12 z-10 filter drop-shadow-md">
            <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-16 sm:w-32 sm:h-24">
              <rect x="2" y="2" width="70" height="50" rx="8" fill="#FCD34D" stroke="#B45309" strokeWidth="3" />
              <path d="M72 25H85C87.7614 25 90 27.2386 90 30V35C90 37.7614 87.7614 40 85 40H72V25Z" fill="#FCD34D" stroke="#B45309" strokeWidth="3" />
              <circle cx="82" cy="32.5" r="3.5" fill="none" stroke="#B45309" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
            <h1 className="font-script text-7xl md:text-9xl text-gray-900 relative transform -rotate-2 drop-shadow-sm leading-none">
              La tecad'or
            </h1>
            <h2 className="text-[#1e40af] tracking-[0.2em] font-bold text-xs md:text-lg mt-2 uppercase font-sans drop-shadow-sm">
              CÀTERING & ESDEVENIMENTS
            </h2>
          </div>
        </div>

        <div className="mt-8 text-gray-700 font-bold text-lg">
          latecador@gmail.com
        </div>
      </div>
    </div>
  );
};
