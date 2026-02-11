import React from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { addToCart, getItemQuantity, updateQuantity } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            {/* Top Line */}
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>

            {/* Image Area with Badge */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-6 group">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full ${product.imagePlaceholderColor} flex items-center justify-center text-gray-500`}>
                  <span className="text-lg font-semibold">{product.title} Image</span>
                </div>
              )}

              {/* Star Badge */}
              <div
                className="absolute top-0 left-0 -mt-2 -ml-2 w-12 h-12 bg-yellow-400 z-10"
                style={{
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}
              ></div>
            </div>

            {/* Title */}
            <h3 className="text-gray-700 font-bold text-xl uppercase mb-4 text-center whitespace-pre-line">
              {product.title.replace(' ', '\n')}
            </h3>

            {/* Items List */}
            <ul className="text-center space-y-4 mb-4 w-full px-4">
              {product.items.map((item) => {
                const quantity = getItemQuantity(item.id);
                return (
                  <li key={item.id} className="text-gray-800 flex flex-col items-center">
                    <span className="font-medium">• {item.name}</span>
                    {item.price > 0 && (
                      <div className="text-blue-400 font-bold text-sm mb-1">
                        {item.price.toFixed(2)}€
                        {item.unit && `/${item.unit}`}
                      </div>
                    )}

                    {/* Quantity Controls */}
                    {item.price > 0 ? (
                      <div className="flex items-center justify-center mt-1 space-x-2">
                         {quantity > 0 ? (
                           <div className="flex items-center border border-gray-300 rounded-full bg-white overflow-hidden shadow-sm">
                             <button
                               onClick={() => updateQuantity(item.id, quantity - 1)}
                               className="p-1 px-3 hover:bg-gray-100 text-gray-600 transition-colors"
                             >
                               <Minus size={14} />
                             </button>
                             <span className="px-2 font-bold text-gray-800 min-w-[1.5rem] text-center">{quantity}</span>
                             <button
                               onClick={() => addToCart(item.id)}
                               className="p-1 px-3 hover:bg-gray-100 text-gray-600 transition-colors"
                             >
                               <Plus size={14} />
                             </button>
                           </div>
                         ) : (
                           <button
                             onClick={() => addToCart(item.id)}
                             className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs font-bold py-1 px-4 rounded-full shadow-sm transition-colors"
                           >
                             Afegir
                           </button>
                         )}
                      </div>
                    ) : (
                       <span className="text-xs text-gray-500 italic">Consultar</span>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Extra Info */}
            {product.extraInfo && (
              <div className="text-blue-400 font-bold text-sm mt-2 text-center whitespace-pre-line">
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
