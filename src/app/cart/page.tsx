"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CartMobile from "@/components/cart/mobile/CartMobile";
// Importaremos CartDesktop después, de momento usemos mobile para probar
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const { totalItems } = useCart();

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div>
                {totalItems > 0 ? (
                    <>
                        {/* De momento mostramos la versión móvil para validar */}
                        <div className="block md:hidden">
                            <CartMobile />
                        </div>

                        {/* Aquí es donde pondrás la versión Desktop cuando la hagamos */}
                        <div className="hidden md:block text-center py-20">
                            <h2 className="font-light">Vista de escritorio en construcción</h2>
                            <p className="text-gray-500 text-sm">Prueba en vista móvil (inspeccionar elemento)</p>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-black tracking-tighter"> </h1>
                        <Link href="/" className="mt-6 underline uppercase text-sm font-light">
                            Volver a la tienda
                        </Link>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}