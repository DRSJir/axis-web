import Link from 'next/link';
import { AxisLogo } from "@/components/icons";

const navLinks = [
    { name: 'store', href: '/' },
    { name: 'guides', href: '#' },
    { name: 'downloads', href: '#' },
    { name: 'support', href: '#' },
    { name: 'contact', href: '#' },
    { name: 'terms', href: '#' },
];

export default function FooterMobile() {
    return (
        <div className="min-[415px]:hidden">
            {/* Shipping Info */}
            <div className="text-center mb-[10vw]">
                <p className="text-[5.3vw] leading-tight font-extralight text-[#b3b3b3] lowercase tracking-tight">
                    envío gratis sobre $120*
                </p>
                <p className="text-[5.3vw] leading-tight font-extralight mb-[2vw] text-[#b3b3b3] lowercase tracking-tight">
                    14 días de devolución
                </p>
                <p className="text-[2.6vw] text-[#666] font-mono lowercase">
                    *excluye estaciones de soldadura pesadas. leer <a className="underline hover:text-white" href="#">términos</a>.
                </p>
            </div>

            {/* Newsletter Button */}
            <div className="mb-[12vw]">
                <button className="w-full bg-[#e0e0e0] text-black text-[5.3vw] h-[14vw] rounded-[3vw] hover:bg-white transition-all font-normal lowercase active:scale-[0.98]">
                    unirse al boletín
                </button>
            </div>

            {/* Navegación móvil */}
            <nav className="mb-[16vw] border-t border-[#333]">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name} className="border-b border-[#333]">
                            <Link href={link.href} className="flex justify-between items-center py-[4vw] text-[3.8vw] font-light text-[#b3b3b3] hover:text-white group transition-all">
                                <span className="lowercase tracking-wide">{link.name}</span>
                                <svg className="w-[4vw] h-[4vw] text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="square"></path>
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Logo */}
            <div className="flex justify-center mb-[4vw] opacity-80">
                <AxisLogo className="w-[30vw] text-white opacity-90" />
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col gap-[8vw] text-[2.6vw] text-[#666] font-light border-t border-[#1a1a1a] pt-[8vw]">
                <div className="flex justify-between uppercase tracking-widest font-mono">
                    <div>
                        <p>axis ©</p>
                        <p>all rights reserved</p>
                    </div>
                    <div className="text-right">
                        <p>v.2026.03</p>
                        <p>tultitlán, mx</p>
                    </div>
                </div>
                <p className="text-[#444] leading-normal text-center lowercase italic">
                    axis es un laboratorio dedicado al empoderamiento del derecho a reparar. ingeniería avanzada para prolongar la vida útil de la tecnología.
                </p>
            </div>
        </div>
    );
}