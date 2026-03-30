"use client";

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { PlusIcon } from "./icons";

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <article className="flex flex-col group mb-8">
            <div className="bg-[#F8F8F8] aspect-[4/5] relative mb-3 flex items-center justify-center border-b border-transparent group-hover:border-black transition-all">
                <div className="text-[10px] font-mono text-gray-300 uppercase tracking-[0.3em]">
                    {product.sku}
                </div>
            </div>

            <div className="flex items-center justify-between px-1">
                <div className="flex flex-col">
                    <h2 className="text-[13px] font-light text-gray-800 tracking-wide lowercase italic">
                        {product.name}
                    </h2>
                    <span className="text-[11px] font-mono text-gray-400">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                {/* BOTÓN INTERACTIVO */}
                <button
                    onClick={() => addToCart(product)}
                    className="text-gray-300 hover:text-black transition-colors p-2 active:scale-90">
                    <PlusIcon className="w-5 h-5" />
                </button>
            </div>
        </article>
    );
}