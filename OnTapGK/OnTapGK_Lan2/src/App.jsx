import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import DishDetail from './pages/DishDetail';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <OrderProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/:id" element={<DishDetail />} />
      </Routes>
      <Footer />
    </OrderProvider>
  );
}

export default App;