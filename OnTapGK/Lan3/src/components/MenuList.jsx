import React from "react";
import dishes from "../data/menu.json";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";

function MenuList() {
    const { addToOrder } = useOrder();
    return (
        <div className="flex flex-wrap -mx-2">
            {dishes.map(dish => (
                <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={dish.id}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={dish.img} alt={dish.name} className="w-full h-48 object-contain" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{dish.name}</h2>
                            <p className="text-gray-700 mb-2">{dish.description}</p>
                            <p className="text-gray-900 font-bold mb-4">${dish.price}</p>
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={() => addToOrder(dish)}
                            >
                                Chọn món
                            </button>
                            <Link 
                                to={`/menu/${dish.id}`} 
                                className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-600"
                            >
                                Thông tin chi tiết món ăn
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MenuList;