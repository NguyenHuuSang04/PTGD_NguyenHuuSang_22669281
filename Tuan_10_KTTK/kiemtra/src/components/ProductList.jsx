

// // src/components/ProductList.jsx
// import React from 'react';

// const ProductList = ({ products }) => {
//     return (
//         <div>
//             <h2>Danh sách sản phẩm</h2>
//             <table border="1" style={{ width: '100%', textAlign: 'left' }}>
//                 <thead>
//                     <tr>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Danh mục</th>
//                         <th>Tồn kho</th>
//                         <th>Hành động</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id}>
//                             <td>{product.name}</td>
//                             <td>{product.price.toLocaleString()} VND</td>
//                             <td>{product.category}</td>
//                             <td>{product.stock}</td>
//                             <td>
//                                 <button>Xoá</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ProductList;


// src/components/ProductList.jsx
import React from 'react';

const ProductList = ({ products, onDeleteProduct }) => {
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
                                <button onClick={() => onDeleteProduct(product.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;