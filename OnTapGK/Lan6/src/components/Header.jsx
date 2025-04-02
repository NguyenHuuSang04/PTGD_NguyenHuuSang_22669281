import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
function Header() {
    const {order} = useOrder();
    return (
        <div className="bg-blue-300 flex justify-between px-5 py-3 text-xl">
            <Link to="/">Reataurant ABC</Link>
            <div className="space-x-2 flex">
                <Link to="/" className="text-white">Trang chủ</Link>
                <Link to="/menu" className="text-white">Thực đơn</Link>
                <Link to="/contact" className="text-white">Liên hệ</Link>
                <Link to="/book-table" className="text-white border rounded-2xl bg-yellow-600 hover:bg-yellow-800">Đặt bàn</Link>
                <Link to="/cart">
                    <FaShoppingCart></FaShoppingCart>
                    {order.length > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs-">{order.length}</span>}
                </Link>
            </div>
        </div>
    );
}
export default Header;