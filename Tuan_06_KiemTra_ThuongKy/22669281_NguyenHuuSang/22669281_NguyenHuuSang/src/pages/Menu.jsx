import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useOrder } from '../context/OrderContext';

const dishes = [
  { id: 1, name: 'Dish 1', price: 10, description: 'Description 1', image: '../img/img.jpg' },
  { id: 2, name: 'Dish 2', price: 15, description: 'Description 2', image: '../img/img.jpg' },
  { id: 3, name: 'Dish 3', price: 10, description: 'Description 3', image: '../img/img.jpg' },
  { id: 4, name: 'Dish 4', price: 25, description: 'Description 4', image: '../img/img.jpg' },
  { id: 5, name: 'Dish 5', price: 35, description: 'Description 5', image: '../img/img.jpg' },
  { id: 6, name: 'Dish 6', price: 50, description: 'Description 6', image: '../img/img.jpg' },
  // Add more dishes here
];

function Menu() {
  const { addToOrder } = useOrder();

  return (
    <div className="container mt-4">
      <h1>Menu</h1>
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
    </div>
  );
}



export default Menu;


