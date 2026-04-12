import { Product } from "@/types";

interface CartItemProps extends Product {
    quantity: number;
}

export const CartItem = ({ item }: { item: CartItemProps }) => {
    // Aquí después conectaremos la lógica de actualizar cantidad
    return (
        <div className="flex items-center">
            {/* Imagen del producto */}
            <div className="w-[8vw] h-[8vw] mr-[1vw] shrink-0 overflow-hidden bg-white">
                <img
                    alt={item.name}
                    className="w-full h-full object-cover text-[1vw] text-gray-500 text-center"
                    src={item.images?.[0] || "/placeholder.png"}
                />
            </div>

            <div className="grow">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="font-light text-[1vw] leading-tight">{item.name}</div>
                        <div className="text-[1vw] text-gray-500 mt-1">
                            in stock
                            <span className="w-[1vw] h-[1vw] rounded-full bg-[#2b663c] ml-1 inline-block"></span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-light text-[1vw]">
                            {(item.price * item.quantity).toFixed(2)} MXN <br/>
                            <span className="text-[1vw] mt-1">
                                {item.quantity} x {item.price} MXN
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <button className="font-light text-blue-400 text-[1vw] hover:underline">
                        remove
                    </button>

                    <div className="flex items-center rounded-[1vw] overflow-hidden">
                        <button className="w-[2vw] h-[2vw] text-[1vw] flex items-center justify-center">-</button>
                        <span className="w-[3vw] h-[2vw] text-[1vw] bg-white flex items-center justify-center font-medium">
                            {item.quantity}
                        </span>
                        <button className="w-[2vw] h-[2vw] text-[1vw] flex items-center justify-center">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};