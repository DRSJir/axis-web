"use client";

import { useCart } from "@/context/CartContext";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
    const { totalItems } = useCart();

    return (
        <>
            <div className="block md:hidden sticky top-0 z-50">
                <HeaderMobile totalItems={totalItems} />
            </div>

            <div className="hidden md:block">
                <HeaderDesktop totalItems={totalItems} />
            </div>
        </>
    );
}