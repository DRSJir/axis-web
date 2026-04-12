'use client';

import { useState } from 'react';
import { CartInput } from '../shared/CartInput';

export default function DeliveryForm() {
    // Estados del formulario
    const [formData, setFormData] = useState({
        country: 'mexico',
        state: 'ciudad_de_mexico',
        firstName: '',
        lastName: '',
        address: '',
        apt: '',
        city: '',
        zipCode: '',
        phone: ''
    });

    const [ageConsent, setAgeConsent] = useState(false);

    // Función para actualizar campos individuales
    const updateField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handlePayment = () => {
        console.log("Datos de envío listos:", formData);
        // Aquí conectaremos con la función checkout del context
    };

    return (
        <section className="bg-[#e5e5e5] rounded-[2vw] p-[4vw] space-y-[3vw]">
            <h2 className="font-light text-[4vw] mb-[3vw]">envío</h2>

            {/* Selectores de Región */}
            <div className="space-y-[2vw]">
                <div className="relative">
                    <select
                        className="w-full rounded-[2vw] text-[3.5vw] font-light bg-[#f5f5f5] px-[3vw] pt-6 pb-2 outline-none appearance-none"
                        value={formData.country}
                        onChange={(e) => updateField('country', e.target.value)}
                    >
                        <option value="mexico">méxico</option>
                        <option value="usa">united states</option>
                    </select>
                    <label className="absolute text-[2.2vw] text-gray-500 top-2 left-3">país / región</label>
                </div>

                <div className="relative">
                    <select
                        className="w-full rounded-[2vw] text-[3.5vw] font-light bg-[#f5f5f5] px-[3vw] pt-6 pb-2 outline-none appearance-none"
                        value={formData.state}
                        onChange={(e) => updateField('state', e.target.value)}
                    >
                        <option value="ciudad_de_mexico">ciudad de méxico</option>
                        <option value="jalisco">jalisco</option>
                        <option value="nuevo_leon">nuevo león</option>
                    </select>
                    <label className="absolute text-[2.2vw] text-gray-500 top-2 left-3">estado</label>
                </div>
            </div>

            {/* Datos Personales */}
            <div className="grid grid-cols-2 gap-[2vw]">
                <CartInput
                    placeholder="nombre"
                    value={formData.firstName}
                    onChange={(val) => updateField('firstName', val)}
                />
                <CartInput
                    placeholder="apellido"
                    value={formData.lastName}
                    onChange={(val) => updateField('lastName', val)}
                />
            </div>

            {/* Dirección */}
            <CartInput
                placeholder="dirección y número"
                value={formData.address}
                onChange={(val) => updateField('address', val)}
            />
            <CartInput
                placeholder="depto, suite, etc. (opcional)"
                value={formData.apt}
                onChange={(val) => updateField('apt', val)}
            />

            {/* Localidad */}
            <div className="grid grid-cols-2 gap-[2vw]">
                <CartInput
                    placeholder="ciudad"
                    value={formData.city}
                    onChange={(val) => updateField('city', val)}
                />
                <CartInput
                    placeholder="código postal"
                    value={formData.zipCode}
                    onChange={(val) => updateField('zipCode', val)}
                />
            </div>

            <CartInput
                placeholder="teléfono"
                type="tel"
                value={formData.phone}
                onChange={(val) => updateField('phone', val)}
            />

            {/* Consentimiento */}
            <div className="flex items-start gap-2 pt-[2vw]">
                <input
                    type="checkbox"
                    id="age_consent"
                    checked={ageConsent}
                    onChange={(e) => setAgeConsent(e.target.checked)}
                    className="mt-1 w-[4vw] h-[4vw] accent-black"
                />
                <label htmlFor="age_consent" className="text-[2.5vw] font-light text-gray-600 leading-tight italic">
                    soy mayor de 18 años y acepto los <span className="underline">términos y condiciones</span> de AXIS. *
                </label>
            </div>

            {/* Botón de Pago */}
            <button
                onClick={handlePayment}
                disabled={!ageConsent}
                className={`w-full py-[4vw] rounded-[1vw] font-light text-[4vw] uppercase tracking-widest transition-all mt-[4vw]
                    ${ageConsent ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
            >
                continuar al pago
            </button>

            <link/>
        </section>
    );
}