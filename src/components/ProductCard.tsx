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
        <article className={`${isFeatured ? 'min-[415px]:lg:col-span-2' : 'col-span-1'} flex flex-col group`}>
            <div className={`
                relative bg-[#f6f6f6] w-full flex items-center justify-center overflow-hidden p-8
        
                /* Movil */
                aspect-square
                rounded-2xl
        
                /* Escritorio */
                min-[415px]:aspect-[16/9]
                min-[415px]:rounded-none
                `}>
            </div>

            <div className="flex justify-between items-start mt-6 px-1">
                <div className="flex flex-col leading-tight text-black font-light lowercase">

                    {/* Aplicamos las nuevas fuentes proporcionales */}
                    <h2 className="text-axis-base">{product.name}</h2>
                    <span className="text-black text-axis-base mt-1">
                        {product.price} USD
                    </span>
                </div>
                <button onClick={() => addToCart(product)}
                        className="text-[1.5rem] font-extralight hover:opacity-40 p-2 transition-opacity active:scale-90" aria-label="Add to cart">+</button>
            </div>
        </article>
    );
}
