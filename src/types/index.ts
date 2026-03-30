export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    sku: number;
    compatibility: string[];
}

export interface CartCalculation {
    subtotal: number;
    tax: number;
    total: number;
}

export interface CartSummary {
    items: CartCalculation[];
}