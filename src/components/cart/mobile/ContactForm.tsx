import { useState } from 'react';
import { CartInput } from '../shared/CartInput';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState(false);

    return (
        <section className="bg-[#e5e5e5] rounded-[2vw] p-[4vw]">
            <h2 className="font-light text-[4vw] mb-[3vw]">contacto</h2>
            <div className="space-y-[3vw]">
                <CartInput
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                />

                <div className="flex items-center gap-2 px-1">
                    <input
                        type="checkbox"
                        id="newsletter"
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className="w-[4vw] h-[4vw] accent-black"
                    />
                    <label htmlFor="newsletter" className="text-[2.8vw] font-light text-gray-600">
                        quiero recibir noticias y ofertas de AXIS
                    </label>
                </div>
            </div>
        </section>
    );
}