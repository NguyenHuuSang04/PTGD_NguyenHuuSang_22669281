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

  // Hàm thêm sản phẩm mới
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  // Hàm xóa sản phẩm
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Hàm sửa sản phẩm (giả sử chỉ đổi tên sản phẩm)
  const editProduct = (id) => {
    const newName = prompt('Nhập tên mới cho sản phẩm:');
    if (newName) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, name: newName } : product
        )
      );
    }
  };

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <AddProductForm onAddProduct={addProduct} />
      <ProductList
        products={products}
        onDeleteProduct={deleteProduct}
        onEditProduct={editProduct}
      />
    </div>
  );
};

export default App;