import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dishes from "../data/data.json"

function DishDetail() {
    const {id} = useParams();
    const [dish, setDish] = useState(null);

    useEffect(() => {
        const foundDish =  dishes.find(d => d.id === parseInt(id));
        setDish(foundDish);
    }, [id]);

    if(!dish) {
        return <div>KHoomg tìm thấy</div>
    }
    return (
        <div className="container mt-4">
            <h2 className="text-center font-bold">{dish.name}</h2>
            <img src={dish.img} alt="" className="mx-auto object-contain h-80"/>
            <p>{dish.description}</p>
            <p>{dish.price}</p>

        </div>
    );
}
export default DishDetail;