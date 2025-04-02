import React from "react";
import { useOrder } from "../Context/OrderContext";

function Cart() {
    const {order, removeFromOrder} = useOrder();
    return(
        <div>
            {order.map((item, index) => (
                            <li key = {index} className="bg-blue-200 p-4 rounded-lg shadow-md mt-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <img src={item.img} alt="" className="w-full object-contain h-10" />
                                        <h5>{item.description}</h5>
                                        <h5>{item.price}</h5>
                                    </div>
                                    <button className="bg-red-400 text-white px-4 py-2 rounded-2xl hover:bg-red-600" onClick={() => removeFromOrder(index)}>Xóa</button>
                                </div>

                            </li>
                        ))}
        </div>
    );
}

export default Cart;