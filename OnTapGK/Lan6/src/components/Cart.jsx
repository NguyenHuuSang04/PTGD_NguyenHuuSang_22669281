import React from "react";
import { useOrder } from "../Context/OrderContext";
function Cart() {
    const {order, removeFromOrder} = useOrder();
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-center font-bold text-3xl">Giỏ hàng</h1>
            {order.length === 0 ? (<p>Giỏ hàng trống</p>):  (
                <ul className="space-y-4">
                    {order.map((item, index) => (
                        <li key={index} className="bg-blue-300 p-4 px-4 py-2 rounded-lg mb-4 shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <img src={item.img} alt=""  className="w-full object-contain h-20"/>
                                    <h5>{item.name}</h5>
                                    <h5>{item.description}</h5>
                                    <h5>{item.price}</h5>
                                </div>
                                <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-2xl" onClick={() => removeFromOrder(index)}>Xóa</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    );
}
export default Cart;