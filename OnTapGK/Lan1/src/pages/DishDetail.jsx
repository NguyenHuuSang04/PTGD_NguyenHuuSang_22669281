// làm sao để từ menuList nhảy qua dishDetail?
import React from "react";
import { useParams } from "react-router-dom";
import dishes from "../data/menu.json";

function DishDetail() {
        const {id} = useParams(); // lấy id món ăn mà người dùng chọn từ URL
        const dish = dishes.find(d => d.id === parseInt(id)); // tìm món ăn có id tương ứng

        if(!dish) {
            return <div>Không tìm thấy chi tiết món ăn</div>;
        }

    return(
        <div className="container mt-4">
            <h1>{dish.name}</h1>
            <img src={dish.image} alt={dish.name} className="img-fluid"/>
            <p>{dish.description}</p>
            <p>Price: ${dish.price}</p>
        </div>

    );
}
export default DishDetail;

//className = 'img-fluid': giúp ảnh co giãn phù hợp với kích thước màn hình, k bị vỡ, tràn ra ngoài