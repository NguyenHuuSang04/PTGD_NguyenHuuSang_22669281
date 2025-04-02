import React, { useMemo } from "react";
import dishes from "../data/data.json"
import { useOrder } from "../Context/OrderContext";
import { Link } from "react-router-dom";
function MenuList() {
    const {addToOrder} = useOrder();

    const dishList = useMemo(() => {
        return dishes.map(dish => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={dish.id}>
                <div className="shadow-md overflow-hidden rounded-lg">
                    <img src={dish.img} alt="" className="w-full h-48 mx-auto object-contain" />
                    <div className="p-4">
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <p>{dish.price}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => addToOrder(dish)}>Chọn món</button>
                        <Link to={`/menu/${dish.id}`} className="rounded-lg bg-gray-300 hover:bg-gray-700 border px-4 py-2">Xem thông tin món ăn</Link>
                    </div>                   
                    
                </div>
               
            </div>
        ))
    }, [addToOrder]);

    return (
        <div className="flex flex-wrap -mx-2">
            {dishList}
        </div>
    );
}
export default MenuList;