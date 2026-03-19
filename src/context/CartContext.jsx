import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const [toast, setToast] = useState(null);

  const addToCart = (product) => {
    setItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id && item.variant === product.variant);
      if (existing) {
        return prevItems.map(item => 
          item.id === product.id && item.variant === product.variant 
            ? { ...item, quantity: item.quantity + (product.quantity || 1) } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: product.quantity || 1 }];
    });
    setToast(`Added ${product.quantity || 1}x ${product.title} to Cart`);
    setTimeout(() => setToast(null), 3000);
  };

  const updateQuantity = (id, delta) => {
    setItems((prevItems) => 
      prevItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, updateQuantity, removeItem, cartCount, toast }}>
      {children}
    </CartContext.Provider>
  );
};
