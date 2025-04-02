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
                    <img src={dish.img} alt="" className="w-full h-48 object-contain" />
                    <div className="p-4">
                        <h2 className="font-bold">{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p>{dish.price}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800" onClick={() => addToOrder(dish)}>Chọn món</button>
                        <Link to={`/menu/${dish.id}`} className="bg-gray-500 hover:bg-gray-800 rounded-lg border px-4 py-2 text-white">Xem thông tin chi tiết</Link>
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