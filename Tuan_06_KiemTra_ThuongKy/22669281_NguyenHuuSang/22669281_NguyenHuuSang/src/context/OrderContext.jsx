import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);

  function addToOrder(dish) {
    setOrder([...order, dish]);
  }

  return (
    <OrderContext.Provider value={{ order, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
