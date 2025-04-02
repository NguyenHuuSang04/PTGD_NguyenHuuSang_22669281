import React from "react";
import { useOrder } from "../Context/OrderContext";

function Cart() {
    const {order, removeFromOrder} = useOrder();
    return(
        <div className="container mx-auto mt-4">
            <h1 className="text-center font-bold text-3xl mb-4">Giỏ hàng</h1>
            {order.length == 0 ? (<p>Giỏ hàng trống</p>): (
                <ul className="space-y-4"> 
                    {order.map((item, index) => (
                        <li key={index} className="bg-blue-200 p-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <img src={item.img} alt="" className="w-full object-contain h-10"/>
                                    <h5 className="text-xl font-bold">{item.name}</h5>
                                    <h5>{item.description}</h5>
                                    <h5>{item.price}</h5>
                                
                                </div>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-700" onClick={() => removeFromOrder(index)}>Xóa</button>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            )
            } 
            
        </div>
    );
}
export default Cart;