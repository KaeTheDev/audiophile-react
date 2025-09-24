import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

function cartReducer(state, action) {
  let newState;
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;
      const existing = state.find((item) => item.slug === product.slug);

      if (existing) {
        newState = state.map((item) =>
          item.slug === product.slug ? { ...item, qty: item.qty + quantity } : item
        );
      } else {
        newState = [...state, { ...product, qty: quantity }];
      }
      break;
    }

    case "UPDATE_QTY": {
      newState = state.map((item) =>
        item.slug === action.payload.slug
          ? { ...item, qty: action.payload.qty }
          : item
      );
      break;
    }

    case "REMOVE_ITEM":
      newState = state.filter((item) => item.slug !== action.payload.slug);
      break;

    case "CLEAR":
      newState = [];
      break;

    default:
      newState = state;
  }

  // Persist updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
}

export function CartProvider({ children }) {
  // Initialize state from localStorage
  const [state, dispatch] = useReducer(cartReducer, [], () => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCart() {
  return useContext(CartStateContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}