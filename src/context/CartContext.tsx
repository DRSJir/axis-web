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

// Definir la estructura de la respuesta de la API
interface ApiCartItem {
    product_id: number;
    quantity: number;
    images: string[];
    name: string;
    category: string;
    price: number;
    description: string | null;
    material?: string | null;
    stock: number;
    sku: string;
    compatibility: string[];
    featured?: boolean;
}

interface ApiCartResponse {
    items: ApiCartItem[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isSyncing, setIsSyncing] = useState(false);

    // Función para mapear items de la API al formato CartItem
    const mapApiItemToCartItem = (apiItem: ApiCartItem): CartItem => {
        return {
            id: apiItem.product_id,
            quantity: apiItem.quantity,
            images: apiItem.images,
            name: apiItem.name,
            category: apiItem.category,
            price: apiItem.price,
            description: apiItem.description,
            material: apiItem.material,
            stock: apiItem.stock,
            sku: apiItem.sku,
            compatibility: apiItem.compatibility,
            featured: apiItem.featured,
        };
    };

    // cargar carrito desde la API
    useEffect(() => {
        const loadCart = async () => {
            try {
                const data = await fetchAxis("/cart") as ApiCartResponse;
                // Mapeamos los items de la API al formato que usa tu App
                if (data && data.items) {
                    setCart(data.items.map(mapApiItemToCartItem));
                }
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
            }) as ApiCartResponse;

            // sincronizar UI con la respuesta del servidor
            if (response && response.items) {
                setCart(response.items.map(mapApiItemToCartItem));
            } else {
                // Si el POST no devuelve el carrito, forzamos un fetch para estar seguros
                const freshCart = await fetchAxis("/cart") as ApiCartResponse;
                if (freshCart && freshCart.items) {
                    setCart(freshCart.items.map(mapApiItemToCartItem));
                }
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