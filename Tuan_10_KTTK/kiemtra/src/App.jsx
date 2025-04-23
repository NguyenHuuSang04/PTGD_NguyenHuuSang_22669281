// src/App.jsx
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

const App = () => {
  // Lấy danh sách sản phẩm từ localStorage hoặc sử dụng danh sách mặc định
  const getInitialProducts = () => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts
      ? JSON.parse(storedProducts)
      : [
          { id: 1, name: 'Áo thun', price: 100000, category: 'Thời trang', stock: 10 },
          { id: 2, name: 'Điện thoại', price: 2000000, category: 'Công nghệ', stock: 5 },
          { id: 3, name: 'Nồi cơm điện', price: 500000, category: 'Gia dụng', stock: 8 },
          { id: 4, name: 'Quần jeans', price: 300000, category: 'Thời trang', stock: 15 },
        ];
  };

  const [products, setProducts] = useState(getInitialProducts);

  // Cập nhật localStorage khi danh sách sản phẩm thay đổi
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

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