"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductDesktopProps {
    product: Product;
}

export default function ProductDesktop({ product }: ProductDesktopProps) {
    const [selectedColor, setSelectedColor] = useState("aluminum");

    // Si no hay imágenes, usamos un array con un placeholder
    const images = product.images?.length ? product.images : [null];

    const colors = [
        { name: "aluminum", value: "aluminum", class: "bg-[#E0E0E0]" },
        { name: "black", value: "black", class: "bg-black" }
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

            {/* --- SECCIÓN GALERÍA CON SWIPER --- */}
            <section className="flex flex-col items-center relative group" data-purpose="product-gallery">
                <div className="relative w-full max-w-md flex items-center justify-center">

                    {/* Flecha Izquierda (Controla Swiper mediante clases) */}
                    <button className="swiper-button-prev-custom absolute left-0 lg:-left-12 p-2 text-gray-400 hover:text-black z-10 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                        </svg>
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination'
                        }}
                        className="w-full h-[400px]"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                {img ? (
                                    <div className="relative w-full h-full max-w-[320px]">
                                        <Image
                                            alt={`${product.name} - vista ${index}`}
                                            src={img}
                                            fill
                                            className="object-contain"
                                            sizes="320px"
                                            priority={index === 0}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center w-full h-full text-gray-300">
                                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth={1}/>
                                        </svg>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Flecha Derecha (Controla Swiper mediante clases) */}
                    <button className="swiper-button-next-custom absolute right-0 lg:-right-12 p-2 text-gray-400 hover:text-black z-10 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                        </svg>
                    </button>
                </div>

                {/* Contenedor de Paginación Personalizado (Estilo Axis) */}
                <div className="custom-pagination flex gap-2 mt-8 justify-center"></div>
            </section>

            {/* --- SECCIÓN DETALLES --- */}
            <section className="flex flex-col lowercase">
                <h2 className="text-[32px] leading-tight font-light mb-1 tracking-tight">
                    {product.name}
                </h2>
                <p className="text-[32px] leading-tight font-light mb-4 tracking-tight">
                    {product.price} USD
                </p>
                <p className="text-sm mb-6 text-gray-500">listo para enviar</p>

                {/* Selección de Color */}
                <div className="mb-6">
                    <p className="text-sm mb-2 opacity-50">{selectedColor}</p>
                    <div className="flex gap-2">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => setSelectedColor(color.name)}
                                className={`w-8 h-8 border transition-all flex items-center justify-center ${
                                    selectedColor === color.name ? "border-black" : "border-gray-200"
                                } ${color.class}`}
                            >
                                {selectedColor === color.name && (
                                    <span className={`w-1 h-1 ${color.name === 'black' ? 'bg-white' : 'bg-black'}`}></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <button className="w-full bg-black text-white text-lg py-4 mb-8 hover:bg-neutral-800 transition-colors">
                    añadir al carrito
                </button>

                {/* Specs técnicas */}
                <div className="text-sm leading-snug space-y-6 max-w-md text-gray-600">
                    <p>{product.description}</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>sku: {product.sku}</li>
                        <li>categoría: {product.category}</li>
                        {product.compatibility?.map(c => <li key={c}>{c}</li>)}
                    </ul>
                </div>
            </section>
        </main>
    );
}