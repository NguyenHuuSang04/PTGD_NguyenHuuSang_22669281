// src/components/ProductList.jsx
import React from 'react';

const ProductList = () => {
    // Danh sách sản phẩm mẫu
    const products = [
        { id: 1, name: 'Sản phẩm A', price: 100000, category: 'Danh mục 1', stock: 10 },
        { id: 2, name: 'Sản phẩm B', price: 200000, category: 'Danh mục 2', stock: 5 },
        { id: 3, name: 'Sản phẩm C', price: 150000, category: 'Danh mục 1', stock: 8 },
    ];

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Danh mục</th>
                        <th>Tồn kho</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price.toLocaleString()} VND</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button>Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;