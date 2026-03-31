import Link from 'next/link';

export default function Footer() {
    const navLinks = [
        { name: 'store', href: '/' },
        { name: 'guides', href: '#' },
        { name: 'downloads', href: '#' },
        { name: 'support', href: '#' },
        { name: 'contact', href: '#' },
        { name: 'terms', href: '#' },
    ];

    return (
        <footer className="w-full bg-[#0f0f11] text-white pt-[15vw] min-[415px]:pt-[8vw] pb-[8vw] mt-[20vw] min-[415px]:mt-[10vw]">
            {/* ALINEACIÓN AXIAL: px-[6vw] igual que el Header y el Main */}
            <div className="max-w-[1600px] mx-auto px-[6vw] w-full">

                {/* Shipping Info - Alineación dinámica */}
                <div className="text-center min-[415px]:text-left mb-[10vw] min-[415px]:mb-[30vw]">
                    <p className="text-[5.3vw] min-[415px]:text-axis-base leading-tight font-extralight text-[#b3b3b3] lowercase tracking-tight">
                        envío gratis sobre $120*
                    </p>
                    <p className="text-[5.3vw] min-[415px]:text-axis-base leading-tight font-extralight mb-[2vw] text-[#b3b3b3] lowercase tracking-tight">
                        14 días de devolución
                    </p>
                    <p className="text-[2.6vw] min-[415px]:text-[0.8vw] text-[#666] font-mono lowercase">
                        *excluye estaciones de soldadura pesadas. leer <a className="underline hover:text-white" href="#">términos</a>.
                    </p>
                </div>

                {/* Newsletter Button - Redondeo condicional */}
                <div className="mb-[12vw] min-[415px]:mb-[6vw]">
                    <button className="
                        w-full bg-[#e0e0e0] text-black
                        text-[5.3vw] min-[415px]:text-axis-base
                        h-[14vw] min-[415px]:h-[4vw]
                        rounded-[3vw] min-[415px]:rounded-none
                        hover:bg-white transition-all font-normal lowercase active:scale-[0.98]
                    ">
                        unirse al boletín
                    </button>
                </div>

                {/* Navigation - Líneas técnicas que cortan el grid */}
                <nav className="mb-[16vw] min-[415px]:mb-[8vw] border-t border-[#333]">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-[#333]">
                                <Link
                                    href={link.href}
                                    className="flex justify-between items-center py-[4vw] min-[415px]:py-[1.5vw] text-[3.8vw] min-[415px]:text-axis-base font-light text-[#b3b3b3] hover:text-white group transition-all"
                                >
                                    <span className="lowercase tracking-wide">{link.name}</span>
                                    <svg className="w-[4vw] h-[4vw] min-[415px]:w-[1vw] min-[415px]:h-[1vw] text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M9 5l7 7-7 7" strokeLinecap="square"></path>
                                    </svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logo Axis - Escalado proporcional */}
                <div className="flex justify-center min-[415px]:justify-start mb-[8vw] min-[415px]:mb-[4vw] opacity-80">
                    <svg className="w-[20vw] h-[10vw] min-[415px]:w-[8vw] min-[415px]:h-[4vw]" viewBox="0 0 90 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 0H33.5L16.2 50H6L23.3 0Z" fill="white"></path>
                        <path d="M39.6 30.5L34 16.5H45L48 24L39.6 30.5Z" fill="white"></path>
                        <path d="M68 50C79 50 88 41 88 30C88 19 79 10 68 10C57 10 48 19 48 30C48 41 57 50 68 50Z" stroke="white" strokeWidth="8"></path>
                    </svg>
                </div>

                {/* Bottom Info - Grid de 2 columnas en escritorio */}
                <div className="flex flex-col min-[415px]:grid min-[415px]:grid-cols-2 gap-[8vw] min-[415px]:gap-[4vw] text-[2.6vw] min-[415px]:text-[0.7vw] text-[#666] font-light border-t border-[#1a1a1a] pt-[8vw] min-[415px]:pt-[4vw]">
                    <div className="flex justify-between min-[415px]:flex-col min-[415px]:gap-2 uppercase tracking-widest font-mono">
                        <div>
                            <p>axis repair systems ©</p>
                            <p>all rights reserved</p>
                        </div>
                        <div className="text-right min-[415px]:text-left">
                            <p>v.2026.03</p>
                            <p>tultitlán, mx</p>
                        </div>
                    </div>

                    <p className="text-[#444] leading-normal text-center min-[415px]:text-right min-[415px]:max-w-[30vw] min-[415px]:ml-auto lowercase italic">
                        axis es un laboratorio dedicado al empoderamiento del derecho a reparar. ingeniería avanzada para prolongar la vida útil de la tecnología.
                    </p>
                </div>
            </div>
        </footer>
    );
}