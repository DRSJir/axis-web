"use client"; // Esto permite que el carrito sea interactivo en el navegador

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types';

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
    return context;
};