import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Cheffify</h2>
      <input type="text" placeholder="What would you like to cook?" />
    </HeaderContainer>
  );
};

export default Header;
