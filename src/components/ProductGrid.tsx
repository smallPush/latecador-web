

interface ProductItem {
  name: string;
  price?: string;
}

interface Product {
  title: string;
  items: ProductItem[];
  extraInfo?: string; // For the pizza price
  imagePlaceholderColor: string;
  image?: string;
}

const products: Product[] = [
  {
    title: 'CROQUETES',
    imagePlaceholderColor: 'bg-orange-100',
    image: '/images/croquetas.png',
    items: [
      { name: 'Rostit de la iaia', price: '1,30€/unitat' },
      { name: 'Kimchie', price: '1,50€/unitat' },
      { name: 'Gamba', price: '1,62€/unitat' },
    ],
  },
  {
    title: 'EMPANADES ARGENTINES',
    imagePlaceholderColor: 'bg-yellow-100',
    image: '/images/empanadas.png',
    items: [
      { name: 'Carn', price: '3€/unitat' },
      { name: 'Tonyina', price: '2,75€/unitat' },
    ],
  },
  {
    title: 'PIZZES',
    imagePlaceholderColor: 'bg-red-100',
    image: '/images/pizzas.png',
    items: [
      { name: 'Verdures' },
      { name: 'Pernil dolç' },
      { name: 'Tonyina' },
    ],
    extraInfo: '19,50€ (12-14 persones)',
  },
  {
    title: 'TRUITES',
    imagePlaceholderColor: 'bg-yellow-200',
    image: '/images/truites.png',
    items: [
      { name: 'Patata i ceba', price: '16€/unitat' },
    ],
  },
  {
    title: 'ENTREPANS',
    imagePlaceholderColor: 'bg-yellow-300',
    image: '/images/entrepans.png',
    items: [
      { name: 'Minis', price: '1,20€/unitat' },
      { name: 'Minis gourmet', price: '1,80€/unitat' },
      { name: 'Mitjans', price: '2,40€/unitat' },
      { name: 'Mitjans gourmet', price: '2,80€/unitat' },
    ],
  },
  {
    title: 'BARQUETES (montaditos)',
    imagePlaceholderColor: 'bg-red-200',
    image: '/images/barquetes.png',
    items: [
      { name: 'Butifarra del Perol' },
      { name: 'Butifarra negra' },
      { name: 'Verdures escalivades' },
      { name: 'Tonyina i gambes' },
      { name: 'Pernil ibèric' },
    ],
    extraInfo: '1,20€/unitat\nsafata de 16 unitats 18€ (per unes 5 persones)',
  },
  {
    title: 'SAFATES (per 10 persones)',
    imagePlaceholderColor: 'bg-orange-200',
    image: '/images/safates.png',
    items: [
      { name: 'Embotits mixta', price: '65€/safata' },
      { name: 'Embotits amb ibèrics', price: '69€/safata' },
      { name: 'Formatges', price: '65€/safata' },
    ],
  },
  {
    title: 'CANAPÈS',
    imagePlaceholderColor: 'bg-pink-100',
    image: '/images/canapes.png',
    items: [
      { name: 'Safata gran (32 unitats)', price: '38€/safata' },
      { name: 'Safata petita (16 unitats)', price: '20€/safata' },
    ],
    extraInfo: 'A consultar les diferents varietats',
  },
  {
    title: 'SAFATA SALADA VARIADA',
    imagePlaceholderColor: 'bg-orange-300',
    image: '/images/safata_salada.png',
    items: [
      { name: 'Safata gran (25 unitats aprox.)', price: '25€/safata' },
      { name: 'Safata petita (16 unitats aprox.)', price: '16€/safata' },
    ],
  },
  {
    title: 'ALFAJORES',
    imagePlaceholderColor: 'bg-yellow-50',
    image: '/images/alfajores.png',
    items: [
      { name: 'Per unitats', price: '1,20€/unitat' },
      { name: 'Caixa de 6 unitats', price: '6,50€/caixa' },
      { name: 'Caixa de 12 unitats', price: '12,50€/caixa' },
    ],
  },
  {
    title: 'SAFATA DE DOLÇOS',
    imagePlaceholderColor: 'bg-yellow-100',
    image: '/images/safata_dolcos.png',
    items: [
      { name: 'Safata gran (25 unitats aprox.)', price: '18€/safata' },
      { name: 'Safata petita (16 unitats aprox.)', price: '12,50€/safata' },
    ],
  },
  {
    title: 'PASTA FROLA',
    imagePlaceholderColor: 'bg-orange-100',
    image: '/images/pasta_frola.png',
    items: [],
    extraInfo: 'Dolç típic argentí de codony\n21,50€/unitat',
  },
  {
    title: 'PASTISSOS',
    imagePlaceholderColor: 'bg-yellow-50',
    image: '/images/pastissos.png',
    items: [
      { name: 'A consultar varietats i preus' },
    ],
  },
  {
    title: 'COQUES\n(per a 8/10 persones)',
    imagePlaceholderColor: 'bg-orange-50',
    image: '/images/coques.png',
    items: [
      { name: 'Sense gluten', price: '28€/unitat' },
      { name: 'Pa de pessic', price: '20€/unitat' },
      { name: 'Vidre', price: '20€/unitat' },
    ],
  },
  {
    title: 'PIONONO DE DULCE DE LECHE',
    imagePlaceholderColor: 'bg-yellow-200',
    image: '/images/pionono.png',
    items: [],
    extraInfo: 'Dolç típic argentí Estil braç de gintano\n16€/unitat',
  },
];

export const ProductGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Top Line */}
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>

            {/* Image Area with Badge */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-6 group">
              {/* Placeholder Image or Real Image */}
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full ${product.imagePlaceholderColor} flex items-center justify-center text-gray-500`}>
                  <span className="text-lg font-semibold">{product.title} Image</span>
                </div>
              )}

              {/* Star Badge */}
              <div className="absolute top-0 left-0 -mt-2 -ml-2 w-12 h-12 bg-yellow-400 z-10"
                style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-gray-700 font-bold text-xl uppercase mb-4 text-center whitespace-pre-line">
              {product.title.replace(' ', '\n')}
            </h3>

            {/* Items List */}
            <ul className="text-center space-y-2 mb-4">
              {product.items.map((item, idx) => (
                <li key={idx} className="text-gray-800">
                  <span className="font-medium">• {item.name}</span>
                  {item.price && (
                    <div className="text-blue-400 font-bold text-sm">{item.price}</div>
                  )}
                </li>
              ))}
            </ul>

            {/* Extra Info (Pizza Price) */}
            {product.extraInfo && (
              <div className="text-blue-400 font-bold text-lg mt-2">
                {product.extraInfo}
              </div>
            )}

            {/* Bottom Line */}
            <div className="w-full h-1 bg-yellow-400 mt-auto pt-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
