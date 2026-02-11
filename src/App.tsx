import { Header } from './components/Header';
import { InfoSection } from './components/InfoSection';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { useCart } from './context/CartContext';
import { ShoppingCart } from 'lucide-react';

function App() {
  const { toggleCart, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-white font-sans relative">
      <Header />
      <main className="container mx-auto">
        <div className="mt-8">
          <InfoSection />
        </div>
        <div className="mt-12">
          <ProductGrid />
        </div>
      </main>
      <Footer />

      {/* Floating Cart Button */}
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-300 text-gray-900 p-4 rounded-full shadow-lg z-40 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
        aria-label="Obrir cistella"
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            {cartCount}
          </span>
        )}
      </button>

      <Cart />
    </div>
  );
}

export default App;
