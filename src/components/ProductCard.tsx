"use client";

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { PlusIcon } from "./icons";

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <article className="flex flex-col group mb-8">
            {/* Contenedor de imagen */}
            <div className="bg-[#F8F8F8] aspect-square relative mb-3 flex items-center justify-center border-b border-transparent group-hover:border-black justify-center rounded-2xl overflow-hidden">
                <div className="text-[3.2vw] font-mono text-black uppercase tracking-[0.3em]">
                    {product.sku}
                </div>
            </div>

            <div className="flex items-center justify-between ">
                <div className="flex flex-col">
                    <h2 className="text-[3.2vw] font-light text-black tracking-wide lowercase">
                        {product.name}
                    </h2>
                    <span className="text-[3.2vw] font-mono text-black">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                {/* BOTÓN INTERACTIVO */}
                <button
                    onClick={() => addToCart(product)}
                    className="text-black hover:text-black transition-colors p-2 active:scale-90">
                    <PlusIcon className="w-5 h-5" />
                </button>
            </div>
        </article>
    );
}