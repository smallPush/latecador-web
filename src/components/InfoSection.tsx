
import { Clock } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-12">
      {/* Introduction Text */}
      <p className="text-gray-800 text-lg leading-relaxed">
        Les comandes s'han de fer amb un <span className="font-bold">mínim de 3 dies d'antelació</span>. Es poden venir a
        recollir al nostre obrador a l'AMELLA DEL VALLÉS o us les podem portar, zona del
        Vallés Oriental (cost del transport 0,50€/km).
      </p>

      {/* Schedule Section */}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Clock className="w-16 h-16 text-blue-400" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-[#3b82f6] font-bold text-xl uppercase mb-1">
            HORARI DE RECOLLIDES I ENTREGUES:
          </h3>
          <p className="text-gray-800 text-lg">
            De dilluns a divendres de 8h a 14h i de 16h a 18h
          </p>
          <p className="text-gray-800 text-lg">
            Dissabtes de 9h a 14h
          </p>
        </div>
      </div>

      {/* Homemade Product Section */}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          {/* Starburst Badge CSS */}
          <div className="w-16 h-16 bg-yellow-400 relative flex items-center justify-center"
            style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
          </div>
        </div>
        <div>
          <h3 className="text-gray-700 font-bold text-xl uppercase mb-1">
            PRODUCTE CASOLÀ
          </h3>
          <p className="text-gray-800 text-lg">
            Producte d'elaboració pròpia, fruit de la nostra passió pels fogons
            i l'amor per la cuina.
          </p>
        </div>
      </div>
    </div>
  );
};
