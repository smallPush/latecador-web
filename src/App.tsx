import { Header } from './components/Header';
import { InfoSection } from './components/InfoSection';
import { AboutSection } from './components/AboutSection';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CookieBanner } from './components/CookieBanner';
import { useCart } from './context/CartContext';
import { ShoppingCart } from 'lucide-react';

function App() {
  const { toggleCart, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-brand-50 font-sans relative">
      <Header />
      <main>
        <div id="about">
          <AboutSection />
        </div>

        <div id="info">
          <InfoSection />
        </div>

        <div id="menu">
          <div className="container mx-auto px-6 py-12">
            <h2 className="font-serif text-5xl md:text-6xl text-brand-900 mb-12 text-center">El nostre <span className="italic text-brand-400">Menú</span></h2>
            <ProductGrid />
          </div>
        </div>
      </main>
      <Footer />

      {/* Floating Cart Button */}
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 bg-gold-400 hover:bg-white text-brand-900 p-4 rounded-full shadow-2xl z-40 flex items-center justify-center transition-all hover:scale-110 cursor-pointer border border-white/20 active:scale-95"
        aria-label="Obrir cistella"
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-brand-900 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in duration-300">
            {cartCount}
          </span>
        )}
      </button>

      <Cart />
      <CookieBanner />
    </div>
  );
}

export default App;
