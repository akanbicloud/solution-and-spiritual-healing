"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/content/products";
import { siteConfig } from "@/config/site";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  totalCount: number;
  getWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("alfacairo_cart");
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveItems = (newItems: CartItem[]) => {
    setItems(newItems);
    try {
      localStorage.setItem("alfacairo_cart", JSON.stringify(newItems));
    } catch {
      // ignore
    }
  };

  const addItem = (product: Product) => {
    const existing = items.find((i) => i.product.id === product.id);
    if (existing) {
      const updated = items.map((i) =>
        i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      saveItems(updated);
    } else {
      saveItems([...items, { product, quantity: 1 }]);
    }
    setIsDrawerOpen(true);
  };

  const removeItem = (productId: string) => {
    saveItems(items.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    saveItems(
      items.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    saveItems([]);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const getWhatsAppOrderUrl = () => {
    if (items.length === 0) return `https://wa.me/${siteConfig.whatsapp}`;
    const productList = items
      .map((item, idx) => `${idx + 1}. ${item.product.name} (Qty: ${item.quantity})`)
      .join("\n");

    const message = `Assalamu alaikum Alfacairo, I would like to order the following traditional preparations:\n\n${productList}\n\nPlease confirm availability and let me know the delivery details for my state/location.\nJazakallahu khairan.`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        totalCount,
        getWhatsAppOrderUrl,
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
