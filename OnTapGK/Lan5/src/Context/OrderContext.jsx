// import { createContext, useContext, useState } from "react";

// const OrderContext = createContext();

// export function useOrder() {
//     return useContext(OrderContext);
// }

// export function OrderProvider({children}) {
//     const[order, setOrder] = useState([]);

//     function addToOrder(dish) {
//         setOrder([...order, dish]);
//     }

//     function removeFromOrder(index) {
//         setOrder(order.filter((_, i) => i !== index));
//     }

//     return (
//         <OrderContext.Provider value={{order, addToOrder, removeFromOrder}}>
//             {children}
//         </OrderContext.Provider>
//     )
// }

import { createContext, useContext, useReducer } from "react";

const OrderContext = createContext();

const orderReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_ORDER':
            return [...state, action.payload];
        case 'REMOVE_FROM_ORDER':
            return state.filter((_, i) => i !== action.payload);
        default:
            return state;
    }
};

export function useOrder() {
    return useContext(OrderContext);
}

export function OrderProvider({ children }) {
    const [order, dispatch] = useReducer(orderReducer, []);

    const addToOrder = (dish) => {
        dispatch({ type: 'ADD_TO_ORDER', payload: dish });
    };

    const removeFromOrder = (index) => {
        dispatch({ type: 'REMOVE_FROM_ORDER', payload: index });
    };

    return (
        <OrderContext.Provider value={{ order, addToOrder, removeFromOrder }}>
            {children}
        </OrderContext.Provider>
    );
}