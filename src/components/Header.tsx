"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon } from "./icons";

export default function Header({ category = "all tools" }) {
    const { totalItems } = useCart(); // Leemos el total real

    return (
        <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-10 border-b border-gray-50">
            <div className="relative cursor-pointer group">
                {/* El icono ahora muestra el conteo real */}
                <ShoppingBagIcon count={totalItems} className="w-8 h-10 text-black" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <button className="text-[2.7vw] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
                    shop
                </button>
                <h1 className="text-xl font-extralight tracking-widest mt-1 lowercase leading-none">
                    {category}
                </h1>
            </div>

            <button className="p-2 text-gray-400 hover:text-black">
                <span className="font-mono text-xl">···</span>
            </button>
        </header>
    );
}
