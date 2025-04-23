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
  ]);

  const [selectedCategory, setSelectedCategory] = useState(''); // State lưu danh mục được chọn

  // Hàm thêm sản phẩm mới
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  // Hàm xóa sản phẩm
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Lọc sản phẩm theo danh mục được chọn
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <AddProductForm onAddProduct={addProduct} />
      <div>
        <h2>Lọc sản phẩm theo danh mục</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Tất cả</option>
          <option value="Thời trang">Thời trang</option>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Gia dụng">Gia dụng</option>
        </select>
      </div>
      <ProductList products={filteredProducts} onDeleteProduct={deleteProduct} />
    </div>
  );
};

export default App;