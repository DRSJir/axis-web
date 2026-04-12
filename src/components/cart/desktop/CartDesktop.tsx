'use client';

import { useCart } from "@/context/CartContext";
import ContactForm from "./ContactForm";
import OrderSummary from "@/components/cart/desktop/OrderSummary";

export default function CartDesktop() {
    const { cart, totals } = useCart();

    return (
        <main className="grid grid-cols-2">
            {/* contacto y envío */}
            <section className="px-[6vw] pb-[5vw] bg-white xl:pr-20">
                <h1 className="py-[2vw] text-[1.5vw] font-light">contacto y envío</h1>
                <ContactForm></ContactForm>
            </section>

            {/* resumen de Orden */}
            <section className="px-[6vw] pb-[5vw]  bg-[#f4f4f4] xl:pr-20">
                <section>
                    <h1 className="py-[2vw] text-[1.5vw] font-light">resumen de la orden</h1>
                </section>
                <OrderSummary></OrderSummary>
            </section>
        </main>
    );
}