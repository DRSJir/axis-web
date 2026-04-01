"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon, MenuIcon } from "./icons";
import {useEffect, useState} from "react";

export default function Header({ category = "all tools" }) {
    const { totalItems } = useCart();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            // Lógica: Ocultar al bajar, mostrar al subir.
            // Umbral de 50px para evitar parpadeos en el tope.
            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY]);

    return (
        <header className={`
            px-[6vw] py-[4vw] min-[415px]:py-[2vw] 
            flex items-center justify-between 
            sticky top-0 z-50 
            
            /* DESVANECIMIENTO */
            transition-all duration-400 ease-in-out
            ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none"}
        `}>

            {/* Lado Izquierdo: Bolsa */}
            <div className="relative cursor-pointer group flex items-center">
                <ShoppingBagIcon
                    count={totalItems}
                    className="w-[8vw] h-[10vw] min-[415px]:w-[3vw] min-[415px]:h-[4vw] text-black transition-transform"
                />
            </div>

            {/* Lado Derecho: Menú */}
            <button className="flex items-center justify-center transition-opacity p-[1vw]">
                <MenuIcon className="h-[8vw] min-[415px]:h-[2vw] w-auto text-black" />
            </button>
        </header>
    );
}
