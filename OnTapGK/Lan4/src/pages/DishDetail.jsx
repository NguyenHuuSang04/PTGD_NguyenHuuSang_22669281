import React from "react";
import { useParams } from "react-router-dom";
import dishes from "../data/data.json"

function DishDetail() {
    const {id} = useParams();
    const dish = dishes.find(d => d.id === parseInt(id)) ;
    if (!dish) {
        return <div>Không tìm thấy thông tin món ăn tương ứng!!!</div>
    }
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-3xl font-bold mb-4">{dish.name}</h1>
            <img src={dish.img} alt="" className="w-full h-64 object-contain mb-4"/>
            <p className=" text-2xl mb-2">{dish.description}</p>
            <p className="text-2xl mb-2">${dish.price}</p>
        </div>
    );
}

export default DishDetail;