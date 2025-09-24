import React, { createContext, useContext, useState } from "react";

const CartModalContext = createContext();

export function CartModalProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartModalContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartModalContext.Provider>
  );
}

export function useCartModal() {
  return useContext(CartModalContext);
}