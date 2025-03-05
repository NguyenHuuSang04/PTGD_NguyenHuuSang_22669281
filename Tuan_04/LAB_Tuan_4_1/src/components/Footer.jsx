import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h4>About Us</h4>
      <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Send</button>
      <p>© 2023 Cheffiy Company. Terms of Service | Privacy Policy</p>
    </FooterContainer>
  );
};

export default Footer;
