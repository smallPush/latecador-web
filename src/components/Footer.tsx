import { Mail, Instagram, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-brand-900 pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content Section */}
          <div className="flex flex-col">
            <h3 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
              Tens una idea? <br />
              <span className="italic text-brand-300">Explica'ns-la.</span>
            </h3>
            <p className="text-brand-200 text-lg md:text-xl max-w-md leading-relaxed mb-12">
              Es fan adaptacions per al·lèrgies i intoleràncies,
              i pressupostos personalitzats segons les teves necessitats.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/latecador3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-400 hover:text-brand-900 transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:latecador@gmail.com"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-400 hover:text-brand-900 transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="bg-brand-800/50 backdrop-blur-xl border border-white/5 p-10 md:p-16 rounded-[3rem] shadow-2xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Phone size={120} />
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-gold-400 text-brand-900 text-[0.65rem] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                Parlem?
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-brand-300 text-sm uppercase tracking-widest font-bold">Contacte directe</p>
                <a href="tel:+34654840968" className="text-4xl md:text-5xl font-serif text-white hover:text-gold-400 transition-colors">
                  654 84 09 68
                </a>
                <p className="font-script text-2xl text-brand-200 mt-2">Atenció personalitzada per l'Anna</p>
              </div>

              <div className="h-px w-full bg-white/10 my-10"></div>

              <div className="flex flex-col gap-1">
                <p className="text-brand-300 text-xs uppercase tracking-widest font-bold">Correu electrònic</p>
                <p className="text-white font-medium text-lg">latecador@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl text-white">
            La teca <span className="italic text-brand-300">d'or</span>
          </div>
          <div className="text-brand-400 text-xs font-bold uppercase tracking-[0.3em] text-center md:text-right">
            &copy; {new Date().getFullYear()} — L'Ametlla del Vallès
          </div>
        </div>
      </div>

      {/* Decorative Gradient Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
};
