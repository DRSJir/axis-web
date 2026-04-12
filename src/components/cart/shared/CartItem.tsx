import { Product } from "@/types";

interface CartItemProps extends Product {
    quantity: number;
}

export const CartItem = ({ item }: { item: CartItemProps }) => {
    // Aquí después conectaremos la lógica de actualizar cantidad
    return (
        <div className="flex bg-[#f5f5f5] p-[2vw] rounded-[2vw] items-center">
            {/* Imagen del producto */}
            <div className="w-[16vw] h-[16vw] mr-[2vw] shrink-0 border border-gray-200 rounded overflow-hidden bg-white">
                <img
                    alt={item.name}
                    className="w-full h-full object-cover text-[1vw] text-gray-500 text-center"
                    src={item.images?.[0] || "/placeholder.png"}
                />
            </div>

            <div className="grow">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="font-light text-[3vw] leading-tight">{item.name}</div>
                        <div className="text-[2vw] text-gray-400 mt-1">
                            in stock
                            <span className="w-[2vw] h-[2vw] rounded-full bg-gray-500 ml-1 inline-block"></span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-light text-[3vw]">
                            {(item.price * item.quantity).toFixed(2)} MXN <br/>
                            <span className="text-[2vw] mt-1">
                                {item.quantity} x {item.price} MXN
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <button className="font-light text-blue-400 text-[2.5vw] hover:underline">
                        remove
                    </button>

                    <div className="flex items-center bg-[#e5e5e5] rounded-[1vw] overflow-hidden">
                        <button className="w-[6vw] h-[6vw] text-[3vw] flex items-center justify-center">-</button>
                        <span className="w-[8vw] h-[6vw] text-[3vw] bg-white flex items-center justify-center font-medium">
                            {item.quantity}
                        </span>
                        <button className="w-[6vw] h-[6vw] text-[3vw] flex items-center justify-center">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};