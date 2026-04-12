// src/components/cart/mobile/CartMobile.tsx
import OrderSummary from './OrderSummary';
import ContactForm from './ContactForm';
import DeliveryForm from './DeliveryForm';

export default function CartMobile() {
    return (
        <main className="max-w-3xl mx-auto px-[6vw] space-y-[4vw]">
            <OrderSummary />
            <ContactForm />
            <DeliveryForm />
        </main>
    );
}