import Header from "@/components/header/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/footer/Footer";
import { fetchAxis } from "@/lib/api";
import { Product } from "@/types";

export default async function Home() {
    let products: Product[] = [];
    let error = false;

    try {
        const data = await fetchAxis("/products?page=1&per_page=20", { cache: 'no-store' });
        products = data.items;
    } catch (e) {
        console.error("AXIS_SYSTEM_CRITICAL_ERROR:", e);
        error = true;
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header con espaciado interno proporcional */}
            <Header/>

            {/* CONTENEDOR PRINCIPAL:
                - max-w-[1600px] para que no se desparrame en monitores ultra-wide.
                - px-[6vw] asegura que el margen lateral escale con el zoom del navegador.
            */}
            <main className="max-w-640 mx-auto px-[6vw] min-[415px]:px-[6vw] pb-[2vw] w-full grow">
                {error ? (
                    /* Error System UI */
                    <div className="mt-[10vw] border border-red-100 bg-red-50/30 p-[5vw] text-center rounded-[4vw] min-[415px]:rounded-none">
                        <p className="font-mono text-[1.5vw] min-[415px]:text-[0.7vw] uppercase tracking-[0.4em] text-red-500 mb-[1vw]">
                            [system_connection_failed]
                        </p>
                        <p className="text-axis-base font-light text-red-900/60 lowercase">
                            error al sincronizar con la api de render.
                        </p>
                    </div>
                ) : (
                    /* GRID SISTÉMICO:
                       - gap-x: Separación horizontal (4vw móvil / 2vw escritorio).
                       - gap-y: Separación vertical (12vw móvil para dar aire / 6vw escritorio).
                    */
                    <div className="grid grid-cols-1 min-[415px]:grid-cols-2 lg:grid-cols-4
                                    grid-flow-row-dense
                                    auto-rows-[1fr]
                                    gap-x-[4vw] min-[415px]:gap-x-[1vw]
                                    gap-y-[6vw] min-[415px]:gap-y-[1.5vw]
                                    mt-[8vw] min-[415px]:mt-[5vw]
                                    items-start">

                        {products.map((product, index) => {
                            // Si es múltiplo de 8 o 10, la tarjeta se expande a 2 columnas.
                            const isFeatured = (index % 6 === 2) || (index % 6 === 5);

                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    isFeatured={isFeatured}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                )}
            </main>

            {/* Footer que hereda la estética oscura y el escalado */}
            <Footer />
        </div>
    );
}