import React from "react";
import { useOrder } from "../Context/OrderContext";

function Cart() {
    const { order, removeFromOrder } = useOrder(); // order: ds món ăn đã chọn, hàm xóa món ăn
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-3xl font-bold mb-4">Giỏ hàng</h1>
            {order.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <ul className="space-y-4">
                    {order.map((item, index) => (
                        <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="text-xl font-bold">{item.name}</h5>
                                    <p className="text-gray-700">{item.description}</p>
                                    <p className="text-gray-900 font-bold">${item.price}</p>
                                </div>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    onClick={() => removeFromOrder(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;