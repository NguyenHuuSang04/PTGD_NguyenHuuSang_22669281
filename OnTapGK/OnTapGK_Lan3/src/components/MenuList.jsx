import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useOrder } from '../context/OrderContext';
import dishes from '../data/menu.json';

function MenuList() {
  const { addToOrder } = useOrder();

  return (
    <div className="row">
      {dishes.map(dish => (
        <div className="col-md-4" key={dish.id}>
          <Card>
            <Card.Img variant="top" src={dish.image} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
              <Card.Text>${dish.price}</Card.Text>
              <Button variant="primary" onClick={() => addToOrder(dish)}>Add to Order</Button>
              <Link to={`/menu/${dish.id}`} className="btn btn-secondary ml-2">View Details</Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MenuList;