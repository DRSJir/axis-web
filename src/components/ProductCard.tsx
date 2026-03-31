"use client";

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { PlusIcon } from "./icons";

interface Props {
    product: Product;
    isFeatured?: boolean;
}

export default function ProductCard({ product, isFeatured = false }: Props) {
    const { addToCart } = useCart();

    return (
        <article className={`${isFeatured ? 'lg:col-span-2' : 'col-span-1'} flex flex-col group`}>
            {/* Contenedor de Imagen Dinámico */}
            <div className={`relative bg-[#f6f6f6] w-full flex items-center justify-center overflow-hidden p-8 rounded-3xl${isFeatured ? 'rounded-none md:aspect-video' : 'md:aspect-square'} duration-500 group-hover:bg-[#f0f0f0]`}>
                {/* Badge para destacados */}
                {isFeatured && (
                    <div className="absolute top-6 right-6 bg-black text-white text-[2.4vw] px-3 py-1 rounded-full uppercase tracking-widest z-10">
                        Featured
                    </div>
                )}

                <div className="text-[10px] font-mono text-gray-300 uppercase tracking-widest absolute bottom-6 left-6">
                    {product.sku}
                </div>

                {/* Simulación de producto */}
                <div className="w-1/2 h-1/2 border border-dashed border-gray-200 flex items-center justify-center italic text-[2.4vw] text-gray-400">
                    [img_render]
                </div>
            </div>

            {/* Detalles */}
            <div className="flex justify-between items-start mt-6 px-1">
                <div className="flex flex-col text-[15px] leading-tight text-black font-light lowercase">
                    <h2>{product.name}</h2>
                    <span className="text-gray-400 font-mono text-[13px] mt-1">
            {product.price} USD
          </span>
                </div>
                <button
                    onClick={() => addToCart(product)}
                    className="text-2xl font-extralight hover:opacity-40 transition-opacity p-2 active:scale-90"
                >
                    +
                </button>
            </div>
        </article>
    );
}