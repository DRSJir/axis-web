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

            <div className="flex justify-between items-center mt-2 px-1">
                <div className="flex flex-col leading-tight text-black font-light">

                    {/* Usar fuentes proporcionales */}
                    <p className="text-axis-base">{product.name}</p>
                    <span className="text-black text-axis-base mt-1">
                        {product.price * 20} MXN
                    </span>
                </div>

                <button onClick={() => addToCart(product)}
                        className="
                            flex items-center justify-center
                            text-[8vw] min-[415px]:text-[3vw]
                            font-extralight leading-none
                            hover:opacity-40 transition-all
                            active:scale-90 p-2 aspect-square"
                        aria-label="Add to cart">
                    <span className="translate-y-[-5%]">+</span >
                </button>
            </div>
        </article>
    );
}
