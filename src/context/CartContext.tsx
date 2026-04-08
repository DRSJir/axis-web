"use client"; // Esto permite que el carrito sea interactivo en el navegador

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types';
import { fetchAxis } from "@/lib/api";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => Promise<void>;
    totalItems: number;
    isSyncing: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isSyncing, setIsSyncing] = useState(false);

    const addToCart = async (product: Product) => {
        setIsSyncing(true);

        try {
            // conexión con API
            await fetchAxis("/cart", {
                method: "POST",
                body: JSON.stringify({
                    product_id: product.id,
                    quantity: 1
                }),
            });

            // actualizar la ui
            setCart((prevCart) => {
                const existingItem = prevCart.find((item) => item.id === product.id);
                if (existingItem) {
                    return prevCart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prevCart, { ...product, quantity: 1 }];
            });

            // mostrar resultado
            console.log(`[AXIS_LOG]: ${product.name} sincronizado con éxito.`);
        } catch (error) {
            console.error("[AXIS_ERROR]: Error al sincronizar producto:", error);
            throw error;
        } finally {
            setIsSyncing(false);
        }
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems, isSyncing }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
    return context;
};