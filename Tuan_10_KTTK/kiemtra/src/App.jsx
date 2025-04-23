// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Áo thun', price: 100000, category: 'Thời trang', stock: 10 },
    { id: 2, name: 'Điện thoại', price: 2000000, category: 'Công nghệ', stock: 5 },
    { id: 3, name: 'Nồi cơm điện', price: 500000, category: 'Gia dụng', stock: 8 },
    { id: 4, name: 'Quần jeans', price: 300000, category: 'Thời trang', stock: 15 },
    { id: 5, name: 'Laptop', price: 15000000, category: 'Công nghệ', stock: 3 },
    { id: 6, name: 'Bàn ủi', price: 200000, category: 'Gia dụng', stock: 6 },
    { id: 7, name: 'Giày thể thao', price: 800000, category: 'Thời trang', stock: 5 },
  ]);

  // Tính tổng số sản phẩm
  const totalProducts = products.length;

  // Tính tổng tồn kho
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <div>
        <h2>Thống kê</h2>
        <p>Tổng sản phẩm: {totalProducts} | Tổng tồn kho: {totalStock}</p>
      </div>
      <AddProductForm onAddProduct={(newProduct) => setProducts([...products, { ...newProduct, id: products.length + 1 }])} />
      <ProductList products={products} onDeleteProduct={(id) => setProducts(products.filter((product) => product.id !== id))} />
    </div>
  );
};

export default App;