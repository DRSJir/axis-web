"use client";

import { useCart } from "@/context/CartContext";
import {ShoppingBagIcon, MenuIcon, CloseIcon, AxisLogo} from "./icons";
import { useEffect, useState } from "react";

export default function Header({ category = "all tools" }) {
    const { totalItems } = useCart();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Detectar si es desktop o móvil
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Control de scroll SOLO para móviles
    useEffect(() => {
        if (isDesktop) return; // No aplicar scroll behavior en desktop

        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY, isDesktop]);

    // Evitar scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* HEADER MÓVIL */}
            {!isDesktop && (
                <header className={`
                    px-[6vw] py-[4vw] min-[415px]:py-[2vw] 
                    flex items-center justify-between 
                    sticky top-0 z-50 
                    bg-white/80 backdrop-blur-md
                    transition-all duration-400 ease-in-out
                    ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 pointer-events-none"}
                `}>
                    {/* Lado Izquierdo: Bolsa */}
                    <div className="relative cursor-pointer group flex items-center">
                        <ShoppingBagIcon
                            count={totalItems}
                            className="w-[8vw] h-[10vw] min-[415px]:w-[8vw] min-[415px]:h-[10vw] text-black transition-transform"
                        />
                    </div>

                    {/* Lado Derecho: Menú */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="flex items-center justify-center transition-opacity p-[1vw]"
                    >
                        <MenuIcon className="h-[8vw] min-[415px]:h-[8vw] w-auto text-black" />
                    </button>
                </header>
            )}

            {/* HEADER DESKTOP */}
            {isDesktop && (
                <>
                    {/* Global Header -  Style */}
                    <header className="bg-black text-white py-8 px-6 md:px-12 flex flex-wrap items-start justify-between gap-y-8" data-purpose="global-header">
                        <div className="flex flex-wrap gap-x-12 gap-y-8 items-start">
                            {/* Title Section */}
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-light leading-none tracking-tight">axis</h1>
                                <h1 className="text-2xl font-light leading-none tracking-tight mb-4"> </h1>
                                <span className="text-xs font-light text-gray-400">2026 march</span>
                            </div>

                            {/* Products Section */}
                            <div className="flex flex-col gap-4">
                                <h2 className="text-2xl font-light leading-none">products</h2>
                                <nav className="flex flex-col text-xs font-light text-gray-400 gap-1">
                                    <a className="hover:text-white transition-colors" href="#">audio &amp; synthesizers</a>
                                    <a className="hover:text-white transition-colors" href="#">wireless speakers</a>
                                    <a className="hover:text-white transition-colors" href="#">designs</a>
                                </nav>
                            </div>

                            {/* Store Section */}
                            <div className="flex gap-4">
                                <div className="w-10 h-12 border-2 border-white relative flex items-center justify-center">
                                    <div className="absolute -top-2 w-6 h-3 border-t-2 border-x-2 border-white rounded-t-sm"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-light leading-none">store</h2>
                                    <nav className="flex flex-col text-xs font-light text-gray-400 gap-1">
                                        <a className="hover:text-white transition-colors" href="#">visit store</a>
                                        <a className="hover:text-white transition-colors" href="#">checkout</a>
                                    </nav>
                                </div>
                            </div>

                            {/* Now Section */}
                            <div className="flex gap-4">
                                <div className="w-12 h-14 border-2 border-white flex flex-col p-1">
                                    <div className="w-full h-9 border border-white"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-light leading-none">now</h2>
                                    <nav className="flex flex-col text-xs font-light text-gray-400 gap-1">
                                        <a className="hover:text-white transition-colors" href="#">newsletter</a>
                                        <a className="hover:text-white transition-colors" href="#">instagram</a>
                                        <a className="hover:text-white transition-colors" href="#">blog</a>
                                    </nav>
                                </div>
                            </div>

                            {/* Support Section */}
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1">
                                    <div className="w-14 h-8 border-2 border-white flex items-center justify-center gap-1">
                                        <div className="w-3 h-3 rounded-full border border-white"></div>
                                        <div className="w-3 h-3 rounded-full border border-white"></div>
                                    </div>
                                    <div className="w-14 h-6 border-2 border-white rounded-full flex items-center justify-center">
                                        <div className="w-8 h-4 grid grid-cols-4 gap-0.5">
                                            <div className="bg-white/20 rounded-full"></div>
                                            <div className="bg-white/20 rounded-full"></div>
                                            <div className="bg-white/20 rounded-full"></div>
                                            <div className="bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-light leading-none">support</h2>
                                    <nav className="flex flex-col text-xs font-light text-gray-400 gap-1">
                                        <a className="hover:text-white transition-colors" href="#">guides</a>
                                        <a className="hover:text-white transition-colors" href="#">downloads</a>
                                        <a className="hover:text-white transition-colors" href="#">support portal</a>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Logo */}
                        <div className="ml-auto flex items-center">
                            <AxisLogo className="h-[10vw] text-white opacity-90" />
                        </div>
                    </header>

                    {/* Main Header Desktop */}
                    <div className="pt-4 pb-8 px-6 md:px-12 max-w-[1600px] mx-auto w-full flex-grow flex flex-col">
                        <header className="flex justify-between items-baseline mb-12" data-purpose="main-header">
                            <div className="text-3xl md:text-4xl tracking-tight">store</div>
                            <nav aria-label="Main Navigation" className="flex gap-6 text-base tracking-wide">
                                <a className="border-b border-black pb-0.5" href="#">products</a>
                                <a className="text-gray-600 hover:text-black transition-colors" href="#">about</a>
                                <div className="relative cursor-pointer">
                                    <a className="text-gray-600 hover:text-black transition-colors" href="#">cart</a>
                                    {totalItems > 0 && (
                                        <span className="absolute -top-2 -right-4 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                            {totalItems}
                                        </span>
                                    )}
                                </div>
                            </nav>
                        </header>
                    </div>
                </>
            )}

            {/* MENÚ MÓVIL (Overlay) */}
            {!isDesktop && isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="flex flex-col h-full">
                        {/* Header del menú */}
                        <div className="flex justify-between items-center p-6 border-b border-white/10">
                            <h2 className="text-white text-xl font-light">Menu</h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white p-2"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Contenido del menú */}
                        <nav className="flex-1 p-6">
                            <ul className="space-y-6">
                                <li>
                                    <a href="#" className="text-white text-2xl font-light hover:opacity-70 transition-opacity">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-2xl font-light hover:opacity-70 transition-opacity">
                                        Store
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-2xl font-light hover:opacity-70 transition-opacity">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-2xl font-light hover:opacity-70 transition-opacity">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Footer del menú */}
                        <div className="p-6 border-t border-white/10">
                            <div className="flex items-center justify-between">
                                <ShoppingBagIcon
                                    count={totalItems}
                                    className="w-6 h-6 text-white"
                                />
                                <span className="text-white/60 text-sm">axis</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}