"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CartMobile from "@/components/cart/mobile/CartMobile";
import CartDesktop from "@/components/cart/desktop/CartDesktop";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const { totalItems } = useCart();

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="block md:hidden">
                <CartMobile />
            </div>

            <div className="hidden md:block">
                <CartDesktop />
            </div>
            <Footer />
        </main>
    );
}