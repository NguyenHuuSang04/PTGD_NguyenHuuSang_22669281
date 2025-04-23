// src/components/AddProductForm.jsx
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !category || !stock) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm!');
            return;
        }
        onAddProduct({ name, price: parseFloat(price), category, stock: parseInt(stock) });
        setName('');
        setPrice('');
        setCategory('');
        setStock('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Thêm sản phẩm mới</h2>
            <div>
                <label>Tên sản phẩm:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Giá:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Danh mục:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div>
                <label>Tồn kho:</label>
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
            </div>
            <button type="submit">Thêm sản phẩm</button>
        </form>
    );
};

export default AddProductForm;