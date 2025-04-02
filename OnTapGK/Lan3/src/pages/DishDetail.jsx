import React from "react";
import { useParams } from "react-router-dom";
import dishes from "../data/menu.json"; // import danh sách món ăn từ json

function DishDetail() {
    const { id } = useParams(); // lấy id của món ăn từ URL, useParams trả về 1 object chứa các tham số từ url
    const dish = dishes.find(d => d.id === parseInt(id)); // duyệt ds món ăn để tìm món có id trùng, id từ url là string nên cần chuyển về int

    if (!dish) {
        return <div>Không tìm thấy chi tiết món ăn</div>;
    }
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-3xl font-bold mb-4">{dish.name}</h1>
            <img src={dish.img} alt={dish.name} className="w-full h-64 object-contain mb-4" />
            <p className="text-gray-700 mb-2">{dish.description}</p>
            <p className="text-gray-900 font-bold">${dish.price}</p>
        </div>
    );
}

export default DishDetail;