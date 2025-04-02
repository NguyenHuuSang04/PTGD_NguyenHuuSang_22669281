import React from "react";
import { useOrder } from "../Context/OrderContext";
function Cart() {
    const {order, removeFromOrder} = useOrder();
    return (
        <div className="container mt-4 mx-auto">
            <h1 className="text-center font-bold">Giỏ hàng</h1>
            {order.length === 0? (<p>Giỏ hàng trống</p>) : (
                <ul className="space-y-4">
                    {order.map((item, index) => (
                        <li key={index} className="bg-blue-200 p-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <img src={item.img} alt=""  className="mx-auto object-contain h-20"/>
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                </div>
                                <button className="px-3 py-2 rounded-lg bg-red-300 hover:bg-red-700" onClick={() => removeFromOrder(index)}>Xóa</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Cart;