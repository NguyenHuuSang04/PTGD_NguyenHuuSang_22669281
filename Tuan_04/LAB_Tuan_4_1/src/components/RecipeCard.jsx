import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
`;

const RecipeCard = ({ title, time }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{time}</p>
    </Card>
  );
};

export default RecipeCard;
