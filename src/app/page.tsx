import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { fetchAxis } from "@/lib/api";
import { Product } from "@/types";

export default async function Home() {
    let products: Product[] = [];
    let error = false;

    try {
        // Fetch desde tu API de Render usando el cliente seguro que creamos
        const data = await fetchAxis("/products", { cache: 'no-store' });
        products = data.items;
    } catch (e) {
        console.error("AXIS_SYSTEM_CRITICAL_ERROR:", e);
        error = true;
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header con categoría dinámica */}
            <Header category="engineering tools" />

            <main className="max-w-[1600px] mx-auto px-6 pb-24 w-full">
                {/* - Default (Móvil < 414px): 1 columna - min-[415px] (Tablet/Desktop): 2 o 4 columnas */}
                <div className="grid grid-cols-1 min-[415px]:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 mt-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFeatured={index < 2}
                        />
                    ))}
                </div>
            </main>

            {/* Footer con estética oscura de Teenage Engineering */}
            <Footer />
        </div>
    );
}