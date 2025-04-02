import React from "react";
import Cart from "../pages/Cart";
import { useOrder } from "../Context/OrderContext";

function ProductCard() {
     const {order} = useOrder();
    return(
                <div className="container mx-auto mt-4">
                 <h1 className="text-center font-bold text-3xl">Giỏ hàng</h1>
                {order.length === 0 ? (<p>Giỏ hàng trống</p>) : 
                    (
                        <ul className="space-y-4">
                            <Cart></Cart>
                        </ul>
                    )
                }
        </div>
    );
}

export default ProductCard;