export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string | null;
    material?: string | null;
    stock: number;
    sku: number;
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