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
        <footer className="w-full bg-[#0f0f11] text-white pt-16 pb-8 mt-20">
            <div className="max-w-2xl mx-auto px-6 w-full">

                {/* Shipping Info */}
                <div className="text-center mb-10">
                    <p className="text-[22px] leading-tight font-extralight text-[#b3b3b3] lowercase tracking-tight">
                        envío gratis sobre $120*
                    </p>
                    <p className="text-[22px] leading-tight font-extralight mb-2 text-[#b3b3b3] lowercase tracking-tight">
                        14 días de devolución
                    </p>
                    <p className="text-[11px] text-[#b3b3b3] font-mono lowercase">
                        *excluye estaciones de soldadura pesadas. leer <a className="underline hover:text-white" href="#">términos</a>.
                    </p>
                </div>

                {/* Newsletter Button */}
                <div className="mb-12">
                    <button className="w-full bg-[#e0e0e0] text-black text-[22px] h-[55px] rounded-[10px] hover:bg-white transition-colors font-normal lowercase">
                        unirse al boletín
                    </button>
                </div>

                {/* Navigation */}
                <nav className="mb-16 border-t border-[#333]">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-[#333]">
                                <Link
                                    href={link.href}
                                    className="flex justify-between items-center py-2.5 text-[16px] font-light text-[#b3b3b3] hover:text-white transition-all group"
                                >
                                    <span className="lowercase tracking-wide">{link.name}</span>
                                    <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M9 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="inherit"></path>
                                    </svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logo Axis */}
                <div className="flex justify-center mb-8 opacity-80">
                    <svg width="60" height="30" viewBox="0 0 90 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 0H33.5L16.2 50H6L23.3 0Z" fill="white"></path>
                        <path d="M39.6 30.5L34 16.5H45L48 24L39.6 30.5Z" fill="white"></path>
                        <path d="M68 50C79 50 88 41 88 30C88 19 79 10 68 10C57 10 48 19 48 30C48 41 57 50 68 50Z" stroke="white" strokeWidth="8"></path>
                    </svg>
                </div>

                {/* Bottom Info */}
                <div className="flex flex-col gap-8 text-[11px] text-[#b3b3b3] font-light leading-relaxed border-[#1a1a1a] pt-8">
                    <div className="flex justify-between w-full uppercase tracking-widest font-mono">
                        <div>
                            <p>copyright ©</p>
                            <p>axis repair systems</p>
                            <p>all rights reserved</p>
                        </div>
                        <div className="text-right">
                            <p>v.2026.03</p>
                            <p>tultitlán, mx</p>
                        </div>
                    </div>

                    <p className="text-[#b3b3b3] text-[10px] leading-normal text-center">
                        axis es un laboratorio dedicado al empoderamiento del derecho a reparar. nuestra misión es proveer herramientas de alta precisión con ingeniería avanzada para prolongar la vida útil de la tecnología.
                    </p>
                </div>
            </div>
        </footer>
    );
}