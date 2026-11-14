import { MessageCircle } from 'lucide-react';

const whatsappNumber = '34659733053';

const offers = [
  {
    title: 'Alfajores artesans',
    image: '/images/alfajores-promo-7.jpeg',
    message: 'Hola! Voldria demanar els alfajores de la foto de 7 €.'
  },
  {
    title: 'Pack de vi dolç i alfajores',
    image: '/images/alfajores-promo-25.jpeg',
    message: 'Hola! Voldria demanar el pack de vi dolç i alfajores de 25 €.'
  },
  {
    title: 'Alfajores per regalar',
    image: '/images/alfajores-promo-18.jpeg',
    message: 'Hola! Voldria demanar la caixa d’alfajores de la foto de 18 €.'
  }
];

export const AlfajoresPromo = () => (
  <section aria-labelledby="alfajores-title" className="bg-brand-900 py-20 md:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
        <div className="max-w-2xl">
          <span className="text-gold-400 text-xs font-black uppercase tracking-[0.2em]">El nostre dolç argentí</span>
          <h2 id="alfajores-title" className="font-serif text-5xl md:text-6xl text-white mt-4 mb-5">
            Alfajores <span className="italic text-brand-300">per compartir</span>
          </h2>
          <p className="text-brand-100 text-lg leading-relaxed">
            Un detall dolç per a qualsevol ocasió. Descobreix les nostres presentacions i el pack amb vi dolç.
          </p>
        </div>
        <p className="text-gold-300 font-semibold text-lg">Es poden demanar per WhatsApp</p>
      </div>

      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-5 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {offers.map((offer) => (
          <article key={offer.image} className="min-w-[78%] sm:min-w-[44%] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col">
            <img src={offer.image} alt={offer.title} loading="lazy" className="block w-full h-auto" />
            <div className="p-5 md:p-6 flex flex-col gap-4 flex-grow">
              <h3 className="font-serif text-2xl text-brand-900">{offer.title}</h3>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(offer.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-auto bg-brand-900 hover:bg-gold-400 text-white hover:text-brand-900 font-bold px-5 py-3 rounded-full transition-colors"
                aria-label={`Demanar ${offer.title} per WhatsApp`}
              >
                <MessageCircle size={19} aria-hidden="true" />
                Demanar per WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
