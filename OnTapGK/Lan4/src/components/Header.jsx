import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";

function Header() {
    const {order} = useOrder();
    return (
        <nav className="bg-blue-400 p-4 flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-bold">ABC Restaurant</Link>
            <div className="flex space-x-4">
                <Link to="/" className="text-white">Trang chủ</Link>
                <Link to="/menu" className="text-white">Thực đơn</Link>
                <Link to="/contact" className="text-white">Liên hệ</Link>
                <Link to="/book-table" className="text-orange-500 border border-white px-2 py-1 rounded-2xl font-bold">Book Table</Link>
                <Link to="/cart">
                    <FaShoppingCart size={24}/>
                    {order.length > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">{order.length}</span>
                    )}
                </Link>
            </div>
            
        
        </nav>
    );
}
export default Header;