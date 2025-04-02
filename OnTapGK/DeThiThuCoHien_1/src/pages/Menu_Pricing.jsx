import React, { useMemo } from "react";
import { useOrder } from "../Context/OrderContext";
import dishes from "../data/data.json";
import { Link } from "react-router-dom";

function Menu_Pricing() {
    const {addToOrder} = useOrder();
    const dishList = useMemo(() => {
        return dishes.map(dish => (
            <div key= {dish.id} className="w-full sm:w-1/2 md:w-1/3 px-2 md-4">
                <div className="shadow-md overflow-hidden rounded-lg">
                    <img src={dish.img} alt="" className="w-full h-48 object-contain"/>
                    <div className="p-4">
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p>{dish.price}</p>
                        <button className="bg-blue-400 text-white hover:bg-blue-700 rounded-lg px-4 py-2" onClick={() =>  addToOrder(dish)}>Chọn món</button>
                        <Link to={`/menu/${dish.id}`} className="border px-4 py-2 text-white bg-gray-600 hover:bg-gray-900 rounded-lg">Xem thông tin chi tiết</Link>
                        
                    </div>
                </div>
            </div>

        ))
    }, [addToOrder]);
    return(
        <div className="flex flex-wrap -mx-2">
            {dishList}
        </div>
    );
}

export default Menu_Pricing;