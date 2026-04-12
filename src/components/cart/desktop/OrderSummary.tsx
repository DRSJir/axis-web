'use client';

import { useCart } from "@/context/CartContext";
import { CartItem } from "./CartItem";
import { PriceSummary } from "../shared/PriceSummary";

export default function OrderSummary() {
    const { cart, totals } = useCart();

    return (
        <main className="gap-[1vw]">
        <section>
            {/* lista de productos */}
            <div className="space-y-[1vw] mb-[1vw]">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="border-b border-gray-300 pb-[1vw]">
                            <CartItem key={item.id} item={item} />
                        </div>
                    ))
                ) : (
                    <p className="text-[1vw] font-light text-gray-500 py-1">
                        No hay productos en tu bolsa.
                    </p>
                )}
            </div>

            {/* Cupón de descuento */}
            <div className="flex mb-[4vw] gap-5">
                <input
                    className="grow text-[1vw] p-[1vw] font-light bg-white border border-gray-300"
                    placeholder="código de promoción"
                    type="text"
                />
                <button className="text-blue-400 font-light text-[1vw]">
                    apply
                </button>
            </div>

            {/* Totales reales de la API */}
            <PriceSummary totals={totals} />
        </section>
        </main>
    );
}