"use client"

import { useState } from "react"

export default function ProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: name === "price" ? Number.parseFloat(value) || 0 : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!product.name || !product.category) return

    onAddProduct(product)

    // Reset form
    setProduct({
      name: "",
      price: 0,
      category: "",
      description: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Tên Sản Phẩm
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-1">
            Giá
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Danh Mục
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Mô Tả
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows={3}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Thêm Sản Phẩm
      </button>
    </form>
  )
}
