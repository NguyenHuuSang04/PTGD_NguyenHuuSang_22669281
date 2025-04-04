import React, { useState, useEffect } from 'react';
import menuData from '../data/menu.json';
import { Card, Button } from 'react-bootstrap';

const MenuList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuData);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {menu.map((item) => (
          <div key={item.id} className="col-md-4">
            <Card className="mb-4">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Add to Order</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;