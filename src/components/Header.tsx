"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon, MenuIcon } from "./icons";

export default function Header({ category = "all tools" }) {
    const { totalItems } = useCart(); // Leemos el total real

    return (
        <header className="px-[6vw] py-[4vw] min-[415px]:py-[2vw] flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-10 border-b border-gray-50">
            <div className="relative cursor-pointer group flex items-center">
                {/* El icono ahora muestra el conteo real */}
                <ShoppingBagIcon count={totalItems} className="w-[8vw] h-[10vw] min-[415px]:w-[3vw] min-[415px]:h-[4vw] text-black transition-transform active:scale-90" />
            </div>

            <button className="flex items-center justify-center hover:opacity-40 transition-opacity p-[1vw]">
                {/* Los puntos suspensivos también escalan para no perderse */}
                <MenuIcon className="h-[10vw] min-[415px]:h-[2vw] w-auto text-black" />
            </button>
        </header>
    );
}
