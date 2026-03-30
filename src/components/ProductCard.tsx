import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="flex flex-col group cursor-pointer mb-8">
            {/* Contenedor Imagen */}
            <div className="bg-[#F8F8F8] aspect-[4/5] relative mb-3 flex items-center justify-center border-b border-transparent transition-colors">
                {/* Placeholder de imagen técnica */}
                <div className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">
                    {product.sku}
                </div>

                {product.stock < 10 && (
                    <span className="absolute top-4 left-4 text-[9px] bg-red-500 text-white px-2 py-0.5 uppercase tracking-tighter">
                        Low Stock
                    </span>)}
            </div>

            {/* Detalles */}
            <div className="flex items-center justify-between px-1">
                <div className="flex flex-col">
                    <h2 className="text-[13px] font-light text-gray-800 tracking-wide lowercase">
                        {product.name}
                    </h2>

                    <span className="text-[11px] font-mono text-gray-400">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                <button className="text-gray-300 hover:text-black transition-colors p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4v16m8-8H4" strokeWidth="1" strokeLinecap="square" />
                    </svg>
                </button>
            </div>
        </article>
    );
}