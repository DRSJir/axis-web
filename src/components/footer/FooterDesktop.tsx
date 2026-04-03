export default function FooterDesktop() {
    return (
        <div className="hidden min-[415px]:block">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2 cursor-pointer hover:text-black min-[415px]:hover:text-gray-600 transition-colors">
                    <span className="text-sm lowercase text-gray-500">méxico</span>
                </div>

                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {['newsletter', 'retailers', 'store', 'terms', 'press', 'contact'].map((item) => (
                        <a key={item} className="text-sm text-gray-500 hover:text-white min-[415px]:hover:text-gray-600 transition-colors lowercase" href="#">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="text-sm text-gray-500 lowercase">
                    ©2026 axis
                </div>
            </div>
        </div>
    );
}