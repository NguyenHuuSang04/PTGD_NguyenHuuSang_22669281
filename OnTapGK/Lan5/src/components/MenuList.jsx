// import React from "react";
// import dishes from "../data/data.json"
// import { Link } from "react-router-dom";
// import { useOrder } from "../Context/OrderContext";

// function MenuList() {
//     const {addToOrder} = useOrder();
//     return (
//         <div className="flex flex-wrap -mx-2">
//             {
//              dishes.map(dish => (
//                 <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={dish.id}>
//                     <div className="shadow-md overflow-hidden rounded-lg">
//                         <img src={dish.img} alt=""  className="w-full h-48 object-contain"/>
//                         <div className="p-4">
//                             <h2 className="text-xl font-bold">{dish.name}</h2>
//                             <p>{dish.description}</p>
//                             <h2>{dish.price}</h2>
//                             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => addToOrder(dish)}>Chon mon</button>
//                             <Link to={`/menu/${dish.id}`} className="border px-4 py-2 text-white bg-gray-600 hover:bg-gray-900 rounded-lg" >Xem thong tin chi tiet</Link>
//                         </div>
//                     </div>
//                 </div>
//              ))   
//             }
//         </div>
//     );

// }
// export default MenuList;


import React, { useMemo } from "react";
import dishes from "../data/data.json";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";

function MenuList() {
    const { addToOrder } = useOrder();

    const dishList = useMemo(() => {
        return dishes.map(dish => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={dish.id}>
                <div className="shadow-md overflow-hidden rounded-lg">
                    <img src={dish.img} alt="" className="w-full h-48 object-contain" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{dish.name}</h2>
                        <p>{dish.description}</p>
                        <h2 className="text-gray-700 font-bold mb-4">${dish.price}</h2>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => addToOrder(dish)}>Chọn món</button>
                        <Link to={`/menu/${dish.id}`} className="border px-4 py-2 text-white bg-gray-600 hover:bg-gray-900 rounded-lg">Xem thông tin chi tiết</Link>
                    </div>
                </div>
            </div>
        ));
    }, [addToOrder]);

    return (
        <div className="flex flex-wrap -mx-2">
            {dishList}
        </div>
    );
}

export default MenuList;