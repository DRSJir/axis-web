"use client";

import { useState, useEffect } from "react";
import { ShoppingBagIcon, MenuIcon } from "@/components/icons";
import MobileMenu from "./MobileMenu";

export default function HeaderMobile({ totalItems }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Control de scroll
    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY]);

    return (
        <>
            <header className={`
                px-[6vw] py-[4vw] min-[415px]:py-[2vw]
                flex items-center justify-between 
                transition-all duration-400 ease-in-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none"}
            `}>
                <ShoppingBagIcon
                    count={totalItems}
                    className="w-[8vw] h-[10vw] text-black"
                />
                <button onClick={() => setIsMenuOpen(true)}>
                    <MenuIcon className="h-[8vw] w-auto text-black" />
                </button>
            </header>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                totalItems={totalItems}
            />
        </>
    );
}