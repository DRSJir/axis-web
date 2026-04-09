"use client";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
    return (
        <>
            <div className="block md:hidden sticky top-0 z-50">
                <HeaderMobile />
            </div>

            <div className="hidden md:block">
                <HeaderDesktop />
            </div>
        </>
    );
}