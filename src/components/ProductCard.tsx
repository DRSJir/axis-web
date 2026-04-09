"use client";

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    product: Product;
    isFeatured?: boolean;
    index: number;
}

export default function ProductCard({ product, isFeatured = false, index }: Props) {
    const { addToCart } = useCart();
    const colStart = isFeatured
        ? (index % 4 === 0 ? 'lg:col-start-1' : 'lg:col-start-3')
        : '';
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/product/${product.id}`);
    };

    const handleAddToCart = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await addToCart(product);
            // mostrar feedback de éxito
            console.log("Producto agregado correctamente");
        } catch (error) {
            // manejar el error
            console.error("Error al agregar al carrito:", error);
        }
    };

    return (
        <article onClick={handleCardClick} className={`
            /* En escritorio (lg): si es featured ocupa 2 columnas, si no 1 */
            ${isFeatured ? 'lg:col-span-2' : 'lg:col-span-1'}
            ${colStart}
            col-span-1 flex flex-col group cursor-pointer w-full h-full min-h-0
        `}>
            {/* CONTENEDOR DE IMAGEN */}
            <div className={`
                relative bg-[#f6f6f6] w-full flex items-center justify-center  
                overflow-hidden transition-all duration-700 ease-in-out
                flex-1
                ${isFeatured ? 'aspect-video' : 'aspect-square'}
                rounded-[3vw] min-[415px]:rounded-none
                flex-shrink-0
            `}>

                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">

                    {/* SKU Técnico (Se mantiene pequeño y fijo) */}
                    <div className="text-[1.5vw] min-[415px]:text-[0.8vw] font-mono text-gray-300 uppercase tracking-widest absolute bottom-[2vw] left-[2vw] italic z-10">
                        {product.sku}
                    </div>

                    {/* REPRESENTACIÓN DEL PRODUCTO
                        Aquí es donde iría tu <img />. Usamos un placeholder técnico. */}
                    <div className="w-[40%] h-[40%] border border-dashed border-gray-300 flex items-center justify-center text-[1.2vw] text-gray-400 font-mono">
                        [axis_prod_render]
                    </div>
                </div>
            </div>

            {/* DETALLES Y BOTÓN + */}
            <div className="flex justify-between items-center mt-auto min-[415px]:mt-[0.5vw]">
                <div className="flex flex-col leading-[1.1] text-black font-light">
                    {/* Nombre del Producto */}
                    <p className="text-[4vw] min-[415px]:text-[1.3vw] tracking-tight">
                        {product.name}
                    </p>
                    {/* Precio convertido a MXN con peso visual */}
                    <span className="text-[4vw] min-[415px]:text-[1.3vw] mt-[0.5vw]">
                        {(product.price).toLocaleString()} MXN
                    </span>
                </div>

                {/* Botón de Añadir con escalado proporcional */}
                <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center text-[8vw] min-[415px]:text-[3.5vw] font-extralight leading-none hover:opacity-40 transition-all active:scale-90 aspect-square">
                    <span className="translate-y-[-5%]">+</span>
                </button>
            </div>
        </article>
    );
}