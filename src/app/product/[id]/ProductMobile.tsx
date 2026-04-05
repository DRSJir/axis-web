// ProductMobile.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { ImageNotAvailable } from "@/components/icons";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ProductMobileProps {
    product: Product;
}

export default function ProductMobile({ product }: ProductMobileProps) {
    const precio = (product.price).toLocaleString();

    const [selectedColor, setSelectedColor] = useState("aluminum");
    const [openAccordion, setOpenAccordion] = useState<string | null>("details");

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
        <main className="pb-[5vw] mb-5">
            <div className="pt-[6vw] pb-[6vw]"> {/* Mismo padding que el header */}
                <h1 className="font-light text-[4vw] text-center">{product.name}</h1>
            </div>

            {/* Carrusel de imágenes con Swiper */}
            <section data-purpose="image-carousel pb-[5vw]">
                <div className="bg-[#f5f5f5] rounded-[3vw] overflow-hidden relative pt-[4vw] flex flex-col items-center justify-center aspect-square">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            dynamicBullets: false,
                        }}
                        className="w-full h-[200px]"
                        spaceBetween={0}
                        slidesPerView={1}
                    >
                        {productImages.map((img, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                {img ? (
                                    <div className="relative w-full h-[200px]">
                                        <Image
                                            alt={`${product.name} - imagen ${index + 1}`}
                                            src={img}
                                            fill
                                            className="object-contain"
                                            sizes="100vw"
                                            priority={index === 0}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center w-full h-full">
                                        <ImageNotAvailable className="w-[30vw] sm:w-[25vw] md:w-[20vw] h-auto" />
                                        <span className="text-[3vw] text-gray-400 mt-[2vw]">Imagen no disponible</span>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Selector de color o material */}
            <section className="flex flex-col items-center py-[4vw]" data-purpose="color-selector">
                <div className="flex gap-[3vw] mb-[2vw]">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            aria-label={`Select ${color.name} color`}
                            className={`w-[8vw] h-[8vw] rounded-full relative flex items-center justify-center p-0.5 ${
                                selectedColor === color.name
                                    ? "ring-2 ring-gray-400 ring-offset-1"
                                    : "ring-1 ring-gray-200"
                            }`}
                        >
                            <div className={`w-full h-full rounded-full ${color.class} flex items-center justify-center border-2 border-white`}>
                                {selectedColor === color.name && (
                                    <span className="w-1 h-1 bg-black rounded-full"></span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
                <span className="text-[3vw] font-light text-black">{selectedColor}</span>
            </section>

            {/* Botones y precio */}
            <section className="py-[4vw] flex justify-between items-start" data-purpose="price-and-cta">
                {/* Precio */}
                <div>
                    <h2 className="text-[8vw] tracking-tight text-black font-normal">
                        {price} MXN
                    </h2>
                    <p className="text-[4vw] font-light text-black">listo para enviar</p>
                </div>
                {/* Botón */}
                <button className="bg-[#f3b52a] text-black w-[20vw] h-[23vw] rounded-xl flex flex-col items-center justify-center leading-none transition-colors">
                    <span className="text-[3vw] font-light leading-tight">agregar</span>
                    <span className="text-[3vw] font-light leading-tight">al</span>
                    <span className="text-[3vw] font-light leading-tight">carrito</span>
                </button>
            </section>

            {/* Descripción */}
            <section className="py-[6vw]" data-purpose="product-description">
                <div className="grid grid-cols-2 gap-[2vw] text-sm leading-snug">
                    <p className="text-[4vw]">
                        {product.description || "unidad de alta precisión diseñada por axis lab."}
                    </p>
                    <p className="text-[4vw]">
                        descripción
                    </p>
                </div>
            </section>

            {/* Acordeones */}
            <section className="border-t border-gray-200" data-purpose="accordions">
                {accordions.map((accordion) => (
                    <div key={accordion.id} className="py-[4vw] border-b border-gray-200">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAccordion(accordion.id)}
                        >
                            <h3 className="text-[4vw] text-black font-normal">
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
                            <ul className="text-[3vw] font-light list-disc pl-5 leading-snug space-y-1 mt-2">
                                <li>sku: {product.sku}</li>
                                <li>material: {product.material || "n/a"}</li>
                                <li>categoría: {product.category}</li>
                            </ul>
                        )}

                        {openAccordion === accordion.id && accordion.id === "compatibility" && (
                            <ul className="text-[3vw] font-light list-disc pl-5 leading-snug space-y-1 mt-2">
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
                            <div className="text-[3vw] font-light mt-2">
                                Guide content here...
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* Botón de regreso */}
            <div className="text-center mt-8 pb-4">
                <a className="text-[#3a8eb5] text-[4vw] font-normal hover:underline" href="#">
                    regresar a la tienda
                </a>
            </div>
        </main>
    );
}
