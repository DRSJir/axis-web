"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '@/types';
import { fetchAxis, getSessionId } from "@/lib/api";

interface OrderResponse {
    order_id: string;
    receipt: {
        total: number;
        subtotal: number;
        tax: number;
        shipping: number;
    };
}

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => Promise<void>;
    totalItems: number;
    isSyncing: boolean;
    checkout: () => Promise<OrderResponse>; // Tipo específico en lugar de any
}

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

    useEffect(() => {
        // 1. Verificamos que window exista (estamos en el cliente)
        if (typeof window === "undefined") return;

        const sessionId = getSessionId();

        if (!sessionId || sessionId.trim() === "") {
            console.log("[AXIS] Esperando a que el Session ID se genere...");
            return;
        }

        const loadCart = async () => {
            // obtenemos el ID real del localStorage
            const sessionId = getSessionId();

            // si por alguna razón sigue vacío, no disparamos el fetch
            if (!sessionId || sessionId === "") return;

            try {
                const data: ApiCartResponse = await fetchAxis("/cart");
                if (data && data.items) {
                    setCart(data.items.map((item: ApiCartItem) => ({
                        ...item,
                        id: item.product_id,
                    } as CartItem)));
                }
            } catch (error) {
                console.error("Error al cargar carrito:", error);
                setCart([]);
            }
        };

        loadCart();
    }, []);

    const addToCart = async (product: Product) => {
        setIsSyncing(true);
        try {
            const response = await fetchAxis("/cart", {
                method: "POST",
                body: JSON.stringify({
                    product_id: product.id,
                    quantity: 1
                }),
            });

            // verificamos si la respuesta trae los items directamente
            if (response && response.items) {
                setCart(response.items.map((item: ApiCartItem) => ({
                    ...item,
                    id: item.product_id,
                } as CartItem)));
            } else {
                // SI LA API NO DEVUELVE ITEMS (Solo da un mensaje de éxito)
                // Hacemos un fetch extra para refrescar el carrito real
                const updatedCart: ApiCartResponse = await fetchAxis("/cart");
                setCart(updatedCart.items.map((item: ApiCartItem) => ({
                    ...item,
                    id: item.product_id,
                } as CartItem)));
            }
        } catch (error) {
            console.error("Error al añadir al carrito:", error);
        } finally {
            setIsSyncing(false);
        }
    };

    // FUNCIÓN DE CHECKOUT (Ahora correctamente dentro del Provider)
    const checkout = async (): Promise<OrderResponse> => {
        // si el carrito local está vacío
        if (cart.length === 0) {
            const errorMsg = "el carrito está vacío";
            console.warn("[AXIS_LOG]: Intentó checkout sin items.");
            throw new Error(errorMsg);
        }

        setIsSyncing(true);
        try {
            const orderData: OrderResponse = await fetchAxis("/cart/checkout", {
                method: "POST"
            });

            setCart([]);
            return orderData;
        } catch (error) {
            console.error("[AXIS_ERROR]: Error en checkout", error);
            throw error;
        } finally {
            setIsSyncing(false);
        }
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems, isSyncing, checkout }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
    return context;
};