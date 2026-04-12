"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '@/types';
import { fetchAxis, getSessionId } from "@/lib/api";

interface CartTotals {
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
}

interface OrderResponse {
    order_id: string;
    receipt: CartTotals;
}

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    totals: CartTotals;
    addToCart: (product: Product) => Promise<void>;
    totalItems: number;
    isSyncing: boolean;
    checkout: () => Promise<OrderResponse>;
}

interface ApiCartItem extends Omit<CartItem, 'id'> {
    product_id: number;
}

interface ApiCartResponse {
    items: ApiCartItem[];
    calculation: CartTotals;
}

const initialTotals: CartTotals = {
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [totals, setTotals] = useState<CartTotals>(initialTotals); // 3. Estado para totales
    const [isSyncing, setIsSyncing] = useState(false);

    const handleApiResponse = (data: ApiCartResponse) => {
        if (data.items) {
            setCart(data.items.map((item) => ({
                ...item,
                id: item.product_id,
            } as CartItem)));
        }
        if (data.calculation) {
            setTotals(data.calculation);
        }
    };

    const loadCart = async () => {
        const sessionId = getSessionId();
        if (!sessionId) return;
        try {
            const data: ApiCartResponse = await fetchAxis("/cart");
            handleApiResponse(data);
        } catch (error) {
            console.error("Error al cargar carrito:", error);
            setCart([]);
            setTotals(initialTotals);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            loadCart();
        }
    }, []);

    const addToCart = async (product: Product) => {
        setIsSyncing(true);
        try {
            const response: ApiCartResponse = await fetchAxis("/cart", {
                method: "POST",
                body: JSON.stringify({ product_id: product.id, quantity: 1 }),
            });

            if (response && response.items) {
                handleApiResponse(response);
            } else {
                await loadCart();
            }
        } catch (error) {
            console.error("Error al añadir al carrito:", error);
        } finally {
            setIsSyncing(false);
        }
    };

    const checkout = async (): Promise<OrderResponse> => {
        if (cart.length === 0) throw new Error("el carrito está vacío");
        setIsSyncing(true);
        try {
            const orderData: OrderResponse = await fetchAxis("/cart/checkout", { method: "POST" });
            setCart([]);
            setTotals(initialTotals);
            return orderData;
        } finally {
            setIsSyncing(false);
        }
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        // 4. Incluimos 'totals' en el value
        <CartContext.Provider value={{ cart, totals, addToCart, totalItems, isSyncing, checkout }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
    return context;
};