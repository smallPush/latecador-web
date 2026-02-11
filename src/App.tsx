import React from 'react';
import { Header } from './components/Header';
import { InfoSection } from './components/InfoSection';
import { ProductGrid } from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="container mx-auto">
        <div className="mt-8">
            <InfoSection />
        </div>
        <div className="mt-12">
            <ProductGrid />
        </div>
      </main>
    </div>
  );
}

export default App;