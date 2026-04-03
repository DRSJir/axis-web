"use client";

import { useEffect } from "react";
import { ShoppingBagIcon } from "../icons";

export default function MobileMenu({ isOpen, onClose, totalItems }) {
    // Prevenir scroll cuando el menú está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
            <div className="flex flex-col h-full">
                {/* Header del menú */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-white text-xl font-light">menú</h2>
                    <button onClick={onClose} className="text-white text-2xl">
                        ✕
                    </button>
                </div>

                {/* Navegación */}
                <nav className="flex-1 p-6">
                    <ul className="space-y-6">
                        {["productos", "tienda", "acerca", "soporte"].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="text-white text-2xl font-light hover:opacity-70 transition-opacity"
                                    onClick={onClose}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer con carrito */}
                <div className="p-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                        <ShoppingBagIcon count={totalItems} className="w-6 h-6 text-white" />
                        <span className="text-white/60 text-sm">axis</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
