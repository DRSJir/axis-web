import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

export default async function Home() {
    const response = await fetch("https://axis-api-5rer.onrender.com/api/products", { cache: 'no-store' });
    const data = await response.json();
    const products: Product[] = data.items;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header category="engineering tools" />

            <main className="flex-grow px-6 py-10 max-w-2xl mx-auto w-full">
                <div className="space-y-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>

            <footer className="p-10 border-t border-gray-100 mt-20">
                <p className="text-[10px] font-mono text-center text-gray-400 uppercase tracking-[0.3em]">
                    Axis Precision Systems © 2026
                </p>
            </footer>
        </div>
    );
}