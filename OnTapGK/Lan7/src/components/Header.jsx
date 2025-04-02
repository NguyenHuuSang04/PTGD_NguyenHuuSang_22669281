import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
import { SiPackagist } from "react-icons/si";
function Header() {
    const {order} = useOrder();
    return (
        <nav className="flex justify-between items-center text-xl bg-blue-400 px-3 py-2">
            <Link to={"/"}>Nhà nhà ABC</Link>
            <div className="space-x-2 flex">
                <Link to={"/home"}>Trang chủ</Link>
                <Link to={"/menu"}>Thực đơn</Link>
                <Link to={"/contact"}>Liên hệ</Link>
                <Link to={"/book-table"}  className="border  px-3 py-2 rounded-2xl bg-amber-300 hover:bg-amber-700">Đặt bàn</Link>
                <Link to={"/cart"}>
                    <FaShoppingCart size={24}/>
                    {order.length > 0 && <span className="absolute top-0 right-0 bg-red-500 rounded-full px-2 text-xs">{order.length}</span>}
                    
                </Link>
            </div>
           
        </nav>
    );
}
export default Header;