'use client';

import { useCart } from "@/context/CartContext";
import { CartItem } from "../shared/CartItem";
import { PriceSummary } from "../shared/PriceSummary";

export default function OrderSummary() {
    const { cart, totals } = useCart();

    return (
        <section className="bg-[#e5e5e5] rounded-[2vw] p-[4vw]">
            <h2 className="font-light text-[4vw] mb-[3vw]">
                resumen del pedido
            </h2>

            {/* lista de productos */}
            <div className="space-y-[2vw] mb-[4vw]">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <p className="text-[3vw] font-light text-gray-500 py-4">
                        No hay productos en tu bolsa.
                    </p>
                )}
            </div>

            {/* Cupón de descuento */}
            <div className="flex mb-[4vw] gap-2">
                <input
                    className="grow rounded-[2vw] text-[3vw] py-[2vw] px-[3vw] font-light bg-[#f5f5f5]"
                    placeholder="código de promoción"
                    type="text"
                />
                <button className="text-blue-400 font-light text-[3vw]">
                    apply
                </button>
            </div>

            {/* Totales reales de la API */}
            <PriceSummary totals={totals} />
        </section>
    );
}