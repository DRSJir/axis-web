"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
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
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        addToCart(product);
        console.log(`${product.name} añadido a la bolsa axis`);
    };

    const precio = (product.price).toLocaleString();

    const [selectedColor, setSelectedColor] = useState("aluminum");
    const [openAccordion, setOpenAccordion] = useState<string | null>("details"); // 👈 "details" abierto por defecto

    const price = product.price;

    // Placeholder mientras no hay imágenes
    const productImages = product.images?.length ? product.images : [null];

    const colors = [
        { name: "aluminum", value: "aluminum", class: "bg-gray-400" },
        { name: "black", value: "black", class: "bg-black" }
    ];

    const accordions = [
        { id: "details", title: "detalles técnicos" },
        { id: "compatibility", title: "compatibilidad" },
        { id: "guide", title: `guía ${product.name}` }
    ];

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <main className="py-[5vw] grid grid-cols-2 gap-[2vw]">

            {/* --- SECCIÓN GALERÍA CON SWIPER --- */}
            <section className="flex flex-col items-center relative group" data-purpose="product-gallery">
                <div className="relative w-full">

                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination'
                        }}
                        className="w-full aspect-square"
                    >
                        {productImages.map((img, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                {img ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            alt={`${product.sku} - vista ${index}`}
                                            src={img}
                                            fill
                                            className="object-contain"
                                            sizes="100vw"
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
                </div>

                {/* Contenedor de Paginación Personalizado (Estilo Axis) */}
                <div className="custom-pagination flex gap-2 mt-8 justify-center"></div>
            </section>

            {/* --- SECCIÓN DETALLES --- */}
            <section className="flex flex-col">
                <h2 className="text-[3vw] leading-tight font-light mb-[0.5vw] tracking-tight">
                    {product.name}
                </h2>
                <p className="text-[3vw] leading-tight font-light mb-[2vw] tracking-tight">
                    {product.price} USD
                </p>
                <p className="text-[1vw] mb-[1vw] text-gray-500">listo para enviar</p>

                {/* Selección de Color */}
                <div className="mb-[2vw]">
                    <p className="text-[1vw] mb-[1vw] opacity-50">{selectedColor}</p>
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

                <button className="text-[2vw] w-full bg-black text-white text-lg py-4 mb-8">
                    añadir al carrito
                </button>

                {/* Specs técnicas acordeones */}
                <section className="border-t border-gray-200 mt-8" data-purpose="accordions">
                    {accordions.map((accordion) => (
                        <div key={accordion.id} className="py-[1vw] border-b border-gray-200">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(accordion.id)}
                            >
                                <h3 className="text-[1vw] font-light text-black font-normal">
                                    {accordion.title}
                                </h3>
                                <svg
                                    className={`w-5 h-5 text-black transition-transform duration-200 ${
                                        openAccordion === accordion.id ? "rotate-180" : "-rotate-90"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </div>

                            {openAccordion === accordion.id && accordion.id === "details" && (
                                <ul className="text-[1vw] text-gray-400 font-light list-disc pl-5 leading-snug space-y-1 mt-2">
                                    <li>sku: {product.sku}</li>
                                    <li>material: {product.material || "n/a"}</li>
                                    <li>categoría: {product.category}</li>
                                </ul>
                            )}

                            {openAccordion === accordion.id && accordion.id === "compatibility" && (
                                <ul className="text-[1vw] text-gray-500 font-light list-disc pl-5 leading-snug space-y-1 mt-2">
                                    {product.compatibility && product.compatibility.length > 0 ? (
                                        product.compatibility.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    ) : (
                                        <li>compatibilidad universal</li>
                                    )}
                                </ul>
                            )}

                            {openAccordion === accordion.id && accordion.id === "guide" && (
                                <div className="text-[1vw] text-gray-500 font-light mt-2">
                                    Guide content here...
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            </section>
        </main>
    );
}