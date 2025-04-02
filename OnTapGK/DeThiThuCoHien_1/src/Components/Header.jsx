import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";

function Header() {
    const {order} = useOrder();
    return(
        <nav className="bg-blue-300 text-center flex text-center px-2 py-3 space-x-5 ">
            <Link to={"/"} className="text-white font-bold hover:bg-orange-600">Home</Link>
            <Link className="text-white font-bold hover:bg-orange-600">About us</Link>
            <Link to={"/menu"} className="text-white font-bold hover:bg-orange-600">Menu & Pricing</Link>
            <Link className="text-white font-bold hover:bg-orange-600">Master Chees</Link>
            <Link className="text-white font-bold hover:bg-orange-600">Page</Link>
            <Link className="text-white font-bold hover:bg-orange-600">Contact Us</Link>
            <Link to={"/cart"}>
                <FaShoppingCart size={24} className="bg-orange-400 text-white rounded-lg "/>
                    {order.length> 0 && (<span className="text-white bg-red-400 top-0 absolute rounded-full ">{order.length}</span>
                    )}
            </Link>
        </nav>
    );
}

export default Header;