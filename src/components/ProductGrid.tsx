import React, { useState } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart, getItemQuantity, updateQuantity } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = product.images || (product.image ? [product.image] : []);
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col group">
      {/* Image Area with Badge */}
      <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 mb-8 bg-brand-100">
        {images.length > 0 ? (
          <>
            <img
              src={images[currentImageIndex]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/40'
                        }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className={`w-full h-full ${product.imagePlaceholderColor} flex items-center justify-center text-brand-400 opacity-50`}>
            <ShoppingBag size={48} strokeWidth={1} />
          </div>
        )}

        {/* Sophisticated Star Badge */}
        {product.featured && (
          <div className="absolute top-6 left-6 bg-gold-400 text-brand-900 px-3 py-1 rounded-full text-[0.65rem] font-black uppercase tracking-widest shadow-lg z-10">
            Recomanat
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-brand-900/0 transition-colors duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-2">
        <h3 className="font-serif text-3xl text-brand-900 mb-6 leading-tight group-hover:text-gold-500 transition-colors">
          {product.title}
        </h3>

        {/* Items List */}
        <div className="space-y-6 mb-8 flex-grow">
          {product.items.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div key={item.id} className="flex items-start justify-between gap-4 border-b border-brand-100 pb-4 last:border-0 last:pb-0">
                <div className="flex flex-col">
                  <span className="text-brand-800 font-medium">{item.name}</span>
                  {item.price > 0 && (
                    <span className="text-brand-500 text-sm font-semibold mt-0.5">
                      {item.price.toFixed(2)}€
                      {item.unit && <span className="text-brand-400 font-normal"> / {item.unit}</span>}
                    </span>
                  )}
                </div>

                {/* Quantity Controls */}
                <div className="flex-shrink-0 pt-1">
                  {item.price > 0 ? (
                    quantity > 0 ? (
                      <div className="flex items-center bg-brand-100 rounded-full p-1 border border-brand-200 shadow-inner">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-brand-600 transition-all shadow-sm active:scale-95"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 font-bold text-brand-900 min-w-[2rem] text-center">{quantity}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-brand-600 transition-all shadow-sm active:scale-95"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="bg-brand-900 hover:bg-gold-500 text-white text-xs font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 uppercase tracking-widest"
                      >
                        Afegir
                      </button>
                    )
                  ) : (
                    <span className="text-[0.65rem] text-brand-400 uppercase font-bold tracking-widest">Consultar</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Info */}
        {product.extraInfo && (
          <div className="bg-brand-100/50 p-4 rounded-2xl text-brand-600 text-sm italic mb-4 border border-brand-100">
            {product.extraInfo}
          </div>
        )}
      </div>
    </div>
  );
};

export const ProductGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
