"use client"; // Esto permite que el carrito sea interactivo en el navegador

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
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

    // cargar carrito desde la API
    useEffect(() => {
        const loadCart = async () => {
            try {
                const data = await fetchAxis("/cart");
                // Mapeamos los items de la API al formato que usa tu App
                setCart(data.items.map((item: any) => ({
                    ...item,
                    id: item.product_id, // Usamos product_id para mantener consistencia con tus tipos
                })));
            } catch (error) {
                console.error("[AXIS_ERROR]: No se pudo cargar el carrito inicial", error);
            }
        };
        loadCart();
    }, []);

    const addToCart = async (product: Product) => {
        setIsSyncing(true);

        try {
            // conexión con API
            const response = await fetchAxis("/cart", {
                method: "POST",
                body: JSON.stringify({
                    product_id: product.id,
                    quantity: 1
                }),
            });

            // sincronizar UI con la respuesta del servidor
            if (response && response.items) {
                setCart(response.items.map((item: any) => ({
                    ...item,
                    id: item.product_id,
                })));
            } else {
                // Si el POST no devuelve el carrito, forzamos un fetch para estar seguros
                const freshCart = await fetchAxis("/cart");
                setCart(freshCart.items.map((item: any) => ({
                    ...item,
                    id: item.product_id,
                })));
            }

            console.log(`[AXIS_LOG]: ${product.name} sincronizado.`);
        } catch (error) {
            console.error("[AXIS_ERROR]: Error al sincronizar:", error);
            throw error;
        } finally {
            setIsSyncing(false);
        }
    };

    // calcular el total de elementos en el carrito
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