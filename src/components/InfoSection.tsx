
import React from 'react';
import { Clock, MapPin, Sparkles } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Intro Card */}
        <div className="md:col-span-3 text-center mb-8">
          <h3 className="font-serif text-4xl md:text-5xl mb-6">Artesania en cada comanda</h3>
          <p className="text-brand-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Les comandes s'han de fer amb un <span className="font-bold text-brand-900">mínim de 3 dies d'antelació</span>.
            Cada plat és elaborat amb cura al nostre obrador de l'Ametlla del Vallès.
          </p>
        </div>

        {/* Feature 1: Schedule */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 border border-brand-200 group-hover:bg-gold-400/20 transition-colors">
            <Clock className="w-8 h-8 text-brand-600 group-hover:text-gold-500 transition-colors" strokeWidth={1.5} />
          </div>
          <h4 className="font-serif text-2xl mb-4">Horari de recollides</h4>
          <div className="space-y-1 text-brand-600">
            <p className="font-medium">Dilluns a divendres</p>
            <p>8h a 14h — 16h a 18h</p>
            <p className="pt-2 font-medium">Dissabtes</p>
            <p>9h a 14h</p>
          </div>
        </div>

        {/* Feature 2: Location/Pick up */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 border border-brand-200 group-hover:bg-gold-400/20 transition-colors">
            <MapPin className="w-8 h-8 text-brand-600 group-hover:text-gold-500 transition-colors" strokeWidth={1.5} />
          </div>
          <h4 className="font-serif text-2xl mb-4">Entrega a domicili</h4>
          <p className="text-brand-600 leading-relaxed">
            Pots recollir la comanda al nostre obrador o t'ho portem a qualsevol punt del
            <span className="font-bold"> Vallès Oriental</span> per només <span className="font-bold">0,50€/km</span>.
          </p>
        </div>

        {/* Feature 3: Homemade */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 border border-brand-200 group-hover:bg-gold-400/20 transition-colors">
            <Sparkles className="w-8 h-8 text-brand-600 group-hover:text-gold-500 transition-colors" strokeWidth={1.5} />
          </div>
          <h4 className="font-serif text-2xl mb-4">Producte casolà</h4>
          <p className="text-brand-600 leading-relaxed">
            Fruit de la nostra passió pels fogons i l'amor per la cuina.
            Tot el producte és d'elaboració pròpia.
          </p>
        </div>
      </div>
    </section>
  );
};
