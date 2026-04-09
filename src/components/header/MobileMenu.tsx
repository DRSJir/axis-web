"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon } from "../icons";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    // Obtenemos totalItems directamente del contexto
    const { totalItems } = useCart();

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

    const navItems = [
        { name: "productos", href: "/category/all" },
        { name: "tienda", href: "/" },
        { name: "acerca", href: "/about" },
        { name: "soporte", href: "/support" }
    ];

    return (
        <div className="fixed inset-0 z-[100] bg-black text-white animate-in slide-in-from-top duration-300">
            <div className="flex flex-col h-full">

                {/* Header del menú */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <div className="flex flex-col">
                        <span className="text-[4vw] text-gray-500 font-light">axis®</span>
                        <p className="text-[4vw] font-light">menú</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 active:scale-90 transition-transform"
                        aria-label="Cerrar menú"
                    >
                        <span className="text-[4vw]">✕</span>
                    </button>
                </div>

                {/* Navegación Principal */}
                <nav className="flex-1 p-8">
                    <ul className="space-y-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-[4vw] font-light tracking-tight lowercase"
                                    onClick={onClose}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer con acceso rápido a la Bolsa */}
                <div className="p-8 border-t border-white/5 bg-neutral-900/50">
                    <Link
                        href="/cart"
                        onClick={onClose}
                        className="flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <ShoppingBagIcon className="w-8 h-8 text-white" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-[#f3b52a] text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                            <span className="text-[4vw] font-light">tu bolsa</span>
                        </div>
                        <span className="text-gray-500">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}