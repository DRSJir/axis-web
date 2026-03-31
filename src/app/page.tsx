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

            <main className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24 w-full">
                {error ? (
                    /* Estado de Error Industrial */
                    <div className="mt-20 border border-red-200 bg-red-50 p-12 text-center rounded-3xl">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-500 mb-2">
                            [critical_system_failure]
                        </p>
                        <p className="text-sm font-light text-red-800">
                            no se pudo establecer conexión con AXIS-API.
                            <br />verifique el estado del servidor en render.com
                        </p>
                    </div>
                ) : (
                    /* Product Grid Dinámico: 1 col (móvil), 2 cols (tablet), 4 cols (desktop) */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 mt-8">
                        {products.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                /** * Lógica de Layout:
                                 * Los primeros 2 productos (index 0 y 1) se marcan como destacados
                                 * para ocupar 2 columnas cada uno en pantallas grandes.
                                 */
                                isFeatured={index < 2}
                            />
                        ))}
                    </div>
                )}
            </main>

            {/* Footer con estética oscura de Teenage Engineering */}
            <Footer />
        </div>
    );
}