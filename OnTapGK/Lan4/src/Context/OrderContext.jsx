import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function useOrder() {
    return useContext(OrderContext);
}

export function OrderProvider({children}) {
    const [order, setOrder] = useState([]);

    function addToOrder(dish) {
        setOrder([...order, dish]);
    }

    function removeFromOrder(index) {
        setOrder(order.filter((_,i) => i !==index));
    }

    return (
        <OrderContext.Provider value={{order, addToOrder, removeFromOrder}}>
            {children}
        </OrderContext.Provider>
    );
}
