import React, { createContext, useContext, useState } from "react"

// tạo 1 ngữ cảnh (context) mới có tên orderContext
// dùng để share trạng thái của đơn hàng giữa các component trong ứng dụng
const OrderContext = createContext();

//Custom Hook giúp component truy cập vào orderContext
// dùng useContext(orderContext) để lấy giá trị hiện tại của context
export function useOrder() {
    return useContext(OrderContext); // khi gọi useOrder(), component sẽ nhận được giá trị từ orderContext.Provider
}

export function OrderProvider({children}){
    const[order, setOrder] = useState([]); // ban đầu order là 1 mảng rỗng

    function addToOrder(dish) { // nhận vào 1 món ăn
        setOrder([...order, dish]); // cập nhật order bằng cách thêm món ăn mới vào ds
    }

    function removeFromOrder(index) {
        setOrder(order.filter((_,i) => i !== index));
    }

//OrderContet.Provider: cung cấp giá trị value {{order, addToOrder}} cho tất cả component children
    return (
        <OrderContext.Provider value={{order, addToOrder, removeFromOrder}}> 
            {children}
        </OrderContext.Provider>
    );
}

// orderContext: tạo context giúp chia sẻ trạng thái đơn hàng
//useOrder() --> custom Hook giúp component truy cập vào orderContext
//OrderProvider --> cung cấp giá trị (order, addToOrder) cho các component con
