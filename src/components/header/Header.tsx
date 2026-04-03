"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
    const { totalItems } = useCart();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        return <HeaderMobile totalItems={totalItems} />;
    }

    return <HeaderDesktop totalItems={totalItems} />;
}