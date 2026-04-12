import {useState} from "react";

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState(false);

    return (
        <main className="flex flex-col gap-[1vw]">
            {/* contacto */}
            <div className="flex flex-col gap-[0.5vw]">
                <p className="text-[1vw] font-light">contacto</p>
                <input className="w-full text-[1vw] border border-gray-200 h-[4vw] px-[1.5vw]" placeholder="Email"
                       name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="flex items-center gap-[0.5vw]">
                <input type="checkbox" id="opcion1"/>
                <label className="text-[1vw] font-light" htmlFor="opcion1">Contacto</label>
            </div>

            {/* entrega */}
            <div className="flex flex-col gap-[1.5vw]">
                <p className="text-[1vw] font-light">entrega</p>
                <div className="grid grid-cols-2 gap-[1vw]">
                    <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]"
                           placeholder="país o región"/>
                    <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]" placeholder="estado"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-[1vw]">
                <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]" placeholder="nombre"/>
                <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]" placeholder="apellidos"/>
            </div>

            <input className="w-full text-[1vw] border border-gray-200 h-[4vw] px-[1vw]"
                   placeholder="nombre de la compañía (opcional)"/>

            <div className="grid grid-cols-2 gap-[1vw]">
                <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]" placeholder="dirección"/>
                <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]" placeholder="departamento"/>
            </div>

            <div className="grid grid-cols-2 gap-[1vw]">
                <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]" placeholder="ciudad"/>
                <input className="text-[1vw] border border-gray-200 h-[4vw] px-[1vw]" placeholder="pódigo postal"/>
            </div>

            <input className="w-full text-[1vw] border border-gray-200 h-[4vw] px-[1.5vw]"
                   placeholder="número de telefono"/>

            <div className="flex items-center gap-[0.5vw]">
                <input type="checkbox" id="opcion2"/>
                <label className="text-[1vw] font-light" htmlFor="opcion2">tengo más de 18 años</label>
            </div>

            <button className="w-full text-[1vw] bg-black text-white py-[1.5vw]">continuar al pago</button>
        </main>
    );
}