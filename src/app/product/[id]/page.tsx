import { fetchAxis } from "@/lib/api";
import { Product } from "@/types";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProductMobile from "./ProductMobile";
import ProductDesktop from "./ProductDesktop";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    let product: Product | null = null;

    try {
        product = await fetchAxis(`/product/${id}`);
    } catch (error) {
        console.error("AXIS_FETCH_ERROR:", error);
    }

    if (!product) return <div>[item_not_found]</div>;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* CONTENEDOR PRINCIPAL ALINEADO CON EL GRID DEL HOME */}
            <main className="max-w-640 mx-auto px-[6vw] min-[415px]:px-[6vw] pb-[2vw] w-full grow">
                {/* Móvil: visible, Desktop: oculto */}
                <div className="block md:hidden">
                    <ProductMobile product={product} />
                </div>

                {/* Desktop: visible, Móvil: oculto */}
                <div className="hidden md:block">
                    <ProductDesktop product={product} />
                </div>
            </main>

            <Footer />
        </div>
    );
}