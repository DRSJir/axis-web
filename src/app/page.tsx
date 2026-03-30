import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { fetchAxis } from "@/lib/api";
import { Product } from "@/types";

export default async function Home() {
    let products: Product[] = [];
    let error = false;

    try {
        const data = await fetchAxis("/products", { cache: 'no-store' });
        products = data.items;
    } catch (e) {
        console.error("AXIS_SYSTEM_CRITICAL_ERROR:", e);
        error = true;
    }
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