import React from "react";
import { useParams } from "react-router-dom";
import dishes from "../data/menu.json" // import danh sách món ăn từ json

function DishDetail() {
    const {id} = useParams(); // lấy id của món ăn từ URL, usePParam trả về 1 object chứa các tham số từ url
    const dish = dishes.find(d => d.id ===parseInt(id));// duyệt ds món ăn để tìm món có id trùng, id từ url là string nên cần chuyển về int

    if(!dish) {
        return <div>Không tìm thấy chi tiết món ăn</div>
    }
    return (
        <div className="container mt-4">
            <h1>{dish.name}</h1>
           <img src={dish.img} alt={dish.name} className="img-fluid"/>
           <p>{dish.description}</p>
           <p>${dish.price}</p>
        </div>
    );
}
export default DishDetail;
