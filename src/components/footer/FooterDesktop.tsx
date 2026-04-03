export default function FooterDesktop() {
    return (
        <div className="hidden min-[415px]:block">
            <div className="flex flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2 cursor-pointer hover:text-black min-[415px]:hover:text-gray-600 transition-colors shrink-0">
                    <span className="text-[1vw] lowercase text-gray-500 whitespace-nowrap">méxico</span>
                </div>

                {/* flex-nowrap evita que los links pasen a nueva línea */}
                <nav className="flex flex-row flex-nowrap justify-center gap-x-[2vw]">
                    {['newsletter', 'retailers', 'store', 'terms', 'press', 'contact'].map((item) => (
                        <a
                            key={item}
                            className="text-[1vw] text-gray-500 hover:text-white min-[415px]:hover:text-gray-600 transition-colors lowercase whitespace-nowrap"
                            href="#"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="text-[1vw] text-gray-500 lowercase shrink-0 whitespace-nowrap">
                    ©2026 axis
                </div>
            </div>
        </div>
    );
}