"use client";

import { AxisLogo, NowIcon, ShoppingBagIconHeader, SupportIcon } from "@/components/icons";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function HeaderDesktop() {
    const { totalItems } = useCart();

    return (
        <header className="bg-black text-white py-8 px-[6vw] flex flex-wrap items-start justify-between gap-y-8">
            <div className="flex flex-wrap gap-x-[2vw] gap-y-[2vw] items-start">

                {/* Título principal */}
                <Link href="/" className="flex flex-col">
                    <h1 className="text-[2vw] font-light leading-none tracking-tight">axis®</h1>
                    <span className="text-[1vw] font-light text-gray-400 mt-[0.5vw]">2026</span>
                </Link>

                {/* productos */}
                <div className="flex flex-col">
                    <h2 className="text-[2vw] font-light leading-none">productos</h2>
                    <nav className="flex flex-col text-[1vw] font-light text-gray-400 mt-[0.8vw]">
                        <Link className="hover:text-white transition-colors" href="/category/kits">kits</Link>
                        <Link className="hover:text-white transition-colors" href="/category/herramientas">herramientas</Link>
                        <Link className="hover:text-white transition-colors" href="/category/accesorios">accesorios</Link>
                    </nav>
                </div>

                {/* tienda */}
                <div className="flex gap-[0.5vw]">
                    <ShoppingBagIconHeader
                        count={totalItems}
                        className="h-[10vw] text-white"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-[2vw] font-light leading-none">tienda</h2>
                        <nav className="flex flex-col text-[1vw] font-light text-gray-400 mt-[0.8vw]">
                            <Link className="hover:text-white transition-colors" href="/">visitar tienda</Link>
                            <Link className="hover:text-white transition-colors flex items-center gap-1" href="/cart">bolsa</Link>
                        </nav>
                    </div>
                </div>

                {/* ahora */}
                <div className="flex gap-[0.5vw]">
                    <NowIcon className="h-[10vw] text-white opacity-90" />
                    <div className="flex flex-col">
                        <h2 className="text-[2vw] font-light leading-none">ahora</h2>
                        <nav className="flex flex-col text-[1vw] font-light text-gray-400 mt-[0.8vw]">
                            <Link className="hover:text-white transition-colors" href="/newsletter">newsletter</Link>
                            <a className="hover:text-white transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</a>
                            <Link className="hover:text-white transition-colors" href="/blog">blog</Link>
                        </nav>
                    </div>
                </div>

                {/* soporte */}
                <div className="flex gap-[0.5vw]">
                    <SupportIcon className="h-[10vw] text-white opacity-90" />
                    <div className="flex flex-col">
                        <h2 className="text-[2vw] font-light leading-none">soporte</h2>
                        <nav className="flex flex-col text-[1vw] font-light text-gray-400 mt-[0.8vw]">
                            <Link className="hover:text-white transition-colors" href="/guides">guias</Link>
                            <Link className="hover:text-white transition-colors" href="/downloads">descargas</Link>
                            <Link className="hover:text-white transition-colors" href="/support">soporte portal</Link>
                        </nav>
                    </div>
                </div>
            </div>

            <Link href="/" className="ml-auto flex items-center">
                <AxisLogo className="h-[10vw] text-white opacity-90 transition-opacity" />
            </Link>
        </header>
    );
}