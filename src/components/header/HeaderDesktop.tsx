"use client";

import { AxisLogo, NowIcon, ShoppingBagIconHeader, SupportIcon } from "@/components/icons";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function HeaderDesktop() {
    const { totalItems } = useCart(); // 👈 Obtener el total de items del carrito

    return (
        <header className="bg-black text-white py-8 px-[6vw] flex flex-wrap items-start justify-between gap-y-8">
            <div className="flex flex-wrap gap-x-[2vw] gap-y-[2vw] items-start">

                {/* Título principal */}
                <div className="flex flex-col">
                    <h1 className="text-[2vw] font-light leading-none tracking-tight">axis®</h1>
                    <span className="text-[1vw] font-light text-gray-400 mt-[0.5vw]">2026</span>
                </div>

                {/* productos */}
                <div className="flex flex-col">
                    <h2 className="text-[2vw] font-light leading-none">productos</h2>
                    <nav className="flex flex-col text-[1vw] font-light text-gray-400 mt-[0.8vw]">
                        <a className="hover:text-white transition-colors" href="#">categoría 1</a>
                        <a className="hover:text-white transition-colors" href="#">categoría 2</a>
                        <a className="hover:text-white transition-colors" href="#">categoría 3</a>
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
                            <a className="hover:text-white transition-colors" href="#">visitar tienda</a>
                            <a className="hover:text-white transition-colors" href="#">bolsa</a>
                        </nav>
                    </div>
                </div>

                {/* ahora */}
                <div className="flex gap-[0.5vw]">
                    <NowIcon className="h-[10vw] text-white opacity-90" />
                    <div className="flex flex-col">
                        <h2 className="text-[2vw] font-light leading-none">ahora</h2>
                        <nav className="flex flex-col text-[1vw] font-light text-gray-400 mt-[0.8vw]">
                            <a className="hover:text-white transition-colors" href="#">newsletter</a>
                            <a className="hover:text-white transition-colors" href="#">instagram</a>
                            <a className="hover:text-white transition-colors" href="#">blog</a>
                        </nav>
                    </div>
                </div>

                {/* soporte */}
                <div className="flex gap-[0.5vw]">
                    <SupportIcon className="h-[10vw] text-white opacity-90" />
                    <div className="flex flex-col">
                        <h2 className="text-[2vw] font-light leading-none">soporte</h2>
                        <nav className="flex flex-col text-[1vw] font-light text-gray-400 mt-[0.8vw]">
                            <a className="hover:text-white transition-colors" href="#">guias</a>
                            <a className="hover:text-white transition-colors" href="#">descargas</a>
                            <a className="hover:text-white transition-colors" href="#">soporte portal</a>
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