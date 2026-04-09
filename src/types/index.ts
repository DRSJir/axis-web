export interface Product {
    // Este es un arreglo de direcciones a las imagenes
    images: string[];
    id: number;
    name: string;
    category: string;
    price: number;
    description: string | null;
    material?: string | null;
    stock: number;
    sku: string;
    compatibility: string[];
    featured?: boolean;
}

export interface CartCalculation {
    subtotal: number;
    tax: number;
    total: number;
}

export interface CartSummary {
    items: CartCalculation[];
}