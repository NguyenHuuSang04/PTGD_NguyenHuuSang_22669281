// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A', price: 100000, category: 'Danh mục 1', stock: 10 },
    { id: 2, name: 'Sản phẩm B', price: 200000, category: 'Danh mục 2', stock: 5 },
    { id: 3, name: 'Sản phẩm C', price: 150000, category: 'Danh mục 1', stock: 8 },
  ]);

  // Hàm thêm sản phẩm mới
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  // Hàm xóa sản phẩm
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <AddProductForm onAddProduct={addProduct} />
      <ProductList products={products} onDeleteProduct={deleteProduct} />
    </div>
  );
};

export default App;