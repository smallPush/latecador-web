import React from 'react';
import { Users, Heart, Star, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-900/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 text-gold-500 text-xs font-black uppercase tracking-widest mb-6">
              <Heart size={14} className="fill-current" />
              <span>Passió per la cuina</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-brand-900 mb-8 leading-tight">
              La Teca <span className="italic text-brand-400">d'Or</span> som nosaltres
            </h2>

            <div className="space-y-6 text-brand-800 text-lg leading-relaxed">
              <p>
                Som una empresa de càtering que neix de la passió per la cuina artesana. Som un equip de
                <span className="font-bold text-brand-900"> 4 dones emprenedores</span>, treballadores i enèrgiques. El nostre compromís amb el client i amb la feina ben feta és ferm.
              </p>

              <p>
                Oferim servei de càtering fins a <span className="font-bold text-brand-900">150 comensals</span>, per les vostres ocasions especials en les quals vulgueu fer un menjar sense necessitat d’entaular-se. T’escoltem i t’ajudem a realitzar la teva idea.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-brand-100 flex items-center justify-center text-gold-500 shadow-sm">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Especialitats Úniques</h4>
                  <p className="text-brand-600">Empenades argentines, alfajores i croquetes d'autor de primera qualitat.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-brand-100 flex items-center justify-center text-gold-500 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Servei Integral</h4>
                  <p className="text-brand-600">Repartim per tot el Vallès Oriental o pots recollir-ho al nostre obrador.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Box Right */}
          <div className="order-1 lg:order-2 bg-brand-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Users size={180} />
            </div>

            <h3 className="font-serif text-3xl text-white mb-8 border-b border-white/10 pb-6">Què ens diferencia?</h3>

            <ul className="space-y-6">
              {[
                { title: "Especialitats Argentines", desc: "Casolanes: empanades, alfajores, pionono de dulce de leche, pastafrola (pastís de codony)." },
                { title: "Croquetes Artesanals", desc: "De rostit, de kimchi (toc picant) i de gamba de primera qualitat." },
                { title: "Canapès Personalitzats", desc: "Ens adaptem al teu gust: safates de dolços, varietats salades i entrepans." },
                { title: "Embotits i Formatges", desc: "Safates acuradament seleccionades en format gran i petit." },
                { title: "Inclusivitat", desc: "Realitzem adaptacions per a al·lèrgies i intoleràncies." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center text-brand-900 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1 group-hover:text-gold-400 transition-colors uppercase tracking-widest text-[0.7rem]">{item.title}</h5>
                    <p className="text-brand-200 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-script text-2xl text-gold-300 text-center">T'ho preparem llest per servir!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
