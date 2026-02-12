import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { initGA } from './utils/analytics.ts'

// Initialize GA if consent was already given
if (localStorage.getItem('cookie-consent') === 'accepted') {
  initGA();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
