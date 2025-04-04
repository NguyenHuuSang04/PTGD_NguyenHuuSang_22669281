import React, { useState, useEffect } from 'react';
import menuData from '../data/menu.json';

const MenuList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuData);
  }, []);

  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;