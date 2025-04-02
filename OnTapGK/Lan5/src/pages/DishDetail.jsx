// import React from "react";
// import { useParams } from "react-router-dom";
// import dishes from "../data/data.json"

// function DishDetail() {
//     const {id} = useParams();
//     const dish = dishes.find(d => d.id === parseInt(id));
//     if(!dish) {
//         return <div>Khoong tim thay</div>
//     }
//     return (
//         <div className="container mt-4">
//             <h2 className="text-center font-bold">{dish.name}</h2>
//             <img src={dish.img} alt="" className="w-full object-contain h-80"/>
//             <p>{dish.description}</p>
//             <p>{dish.price}</p>

//         </div>
//     );
// }

// export default DishDetail;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import dishes from "../data/data.json";

// function DishDetail() {
//     const { id } = useParams();
//     const [dish, setDish] = useState(null);

//     useEffect(() => {
//         const foundDish = dishes.find(d => d.id === parseInt(id));
//         setDish(foundDish);
//     }, [id]);

//     if (!dish) {
//         return <div>Không tìm thấy</div>;
//     }

//     return (
//         <div className="container mt-4">
//             <h2 className="text-center font-bold">{dish.name}</h2>
//             <img src={dish.img} alt="" className="w-full object-contain h-80" />
//             <p>{dish.description}</p>
//             <p>{dish.price}</p>
//         </div>
//     );
// }

// export default DishDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DishDetail() {
    const { id } = useParams();
    const [dish, setDish] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setDish(data);
            } catch (error) {
                console.error("Error fetching dish:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDish();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!dish) {
        return <div>Không tìm thấy</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center font-bold">{dish.title}</h2>
            <img src={`https://via.placeholder.com/600/${dish.id}`} alt="" className="w-full object-contain h-80" />
            <p>{dish.body}</p>
        </div>
    );
}

export default DishDetail;



