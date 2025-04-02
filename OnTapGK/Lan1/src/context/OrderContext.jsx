import React, {createContext, useContext, useState} from "react";

const OrderContext = createContext();// tạo 1 ngữ cảnh mới tên orderContext
// --> Dùng để chia sẻ trạng thái đơn hàng giữa các component mà không cần truyền prop qua nhiều cấp


//custom hook có tên useOrder --> truy cập vào ngữ cảnh orderContext và trả về giá trị ngữ cảnh đó
export function useOrder() {
    return useContext(OrderContext);
}

export function OrderProvider({children}) {
    const[order, setOrder] = useState([]);

    function addToOrder(dish) {
        setOrder([...order, dish]);// tạo thêm 1 mảng mới với các pt hiện tại order và thêm dish vào cuois mảng
    }

    // hàm cart bỏ khi làm không kịp
    function removeFromOrder(index) {
        setOrder(order.filter((_, i) => i !==index));
    }

    return (
        <OrderContext.Provider value={{order, addToOrder, removeFromOrder}}>
            {children}
        </OrderContext.Provider>
    );
}

// orderContext: tạo một ngữ cảnh mới để share trạng thái đơn hàng
// useOrder: custom hook để truy cập vào ngữ cảnh orderContext
//OrderProvider: component bao bọc các component con và cung cấp giá trị ngữ cảnh orderContext cho chúng
// useState: tạo trạng thái order và hàm serOrder để cập nhật trạng thái này
//setOrder: cập nhật trạng thái này
//addToOrder: hàm để thêm 1 món ăn vào đơn hàng
//OrderContext.Provider: cung cấp giá trị ngữ cảnh OrderContext cho các component con

