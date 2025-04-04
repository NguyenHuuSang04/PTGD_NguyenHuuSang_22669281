import React from 'react';
import { useParams } from 'react-router-dom';

const dishes = [
  { id: 1, name: 'Dish 1', price: 10, description: 'Description 1', image: '../img/img.jpg' },
  { id: 2, name: 'Dish 2', price: 15, description: 'Description 2', image: '../img/img.jpg' },
  { id: 3, name: 'Dish 3', price: 15, description: 'Description 2', image: '../img/img.jpg' },
  { id: 4, name: 'Dish 4', price: 15, description: 'Description 2', image: '../img/img.jpg' },
  { id: 5, name: 'Dish 5', price: 15, description: 'Description 2', image: '../img/img.jpg' },
  { id: 6, name: 'Dish 6', price: 15, description: 'Description 2', image: '../img/img.jpg' },
  

];

function DishDetail() {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) {
    return <div>Dish not found</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{dish.name}</h1>
      <img src={dish.image} alt={dish.name} className="img-fluid" />
      <p>{dish.description}</p>
      <p>Price: ${dish.price}</p>
    </div>
  );
}

export default DishDetail;