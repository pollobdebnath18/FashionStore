"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(undefined);
const STORAGE_KEY = "fashionstore-cart";

function readStoredCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage after mount only, so SSR markup (always
  // empty) matches the client's first render and we avoid a mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(readStoredCart());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  // product: the product object. options: { color, size, quantity }
  const addToCart = (product, options = {}) => {
    const color = options.color ?? product.colors?.[0] ?? null;
    const size = options.size ?? product.sizes?.[0] ?? null;
    const quantity = options.quantity ?? 1;

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === product.id && item.color === color && item.size === size,
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          category: product.category,
          color,
          size,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (id, color, size) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.color === color && item.size === size),
      ),
    );
  };

  const updateQuantity = (id, color, size, quantity) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isHydrated,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
