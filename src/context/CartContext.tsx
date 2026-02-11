import React, { createContext, useContext, useState, type ReactNode, useMemo } from 'react';
import { products, type ProductItem } from '../data/products';

interface CartItem {
  id: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (id: string, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  getItemQuantity: (id: string) => number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  const addToCart = (id: string, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemQuantity = (id: string) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  // Helper to find product details by variant ID
  const getProductDetails = (variantId: string): ProductItem | undefined => {
    for (const product of products) {
      const variant = product.items.find(item => item.id === variantId);
      if (variant) return variant;
    }
    return undefined;
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, cartItem) => {
      const details = getProductDetails(cartItem.id);
      if (!details) return total;
      return total + details.price * cartItem.quantity;
    }, 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        getItemQuantity,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
