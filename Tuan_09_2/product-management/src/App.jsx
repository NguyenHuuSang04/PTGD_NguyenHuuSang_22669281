"use client"

import { useState, useEffect } from "react"
import ProductForm from "./components/product-form"
import ProductList from "./components/product-list"
import SearchBar from "./components/search-bar"
import FilterOptions from "./components/filter-options"

export default function App() {
  // State for products
  const [products, setProducts] = useState([])
  // State for search query
  const [searchQuery, setSearchQuery] = useState("")
  // State for category filter
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Load products from localStorage on component mount
  useEffect(() => {
    const savedProducts = localStorage.getItem("products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }, [])

  // Save products to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  // Add a new product
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    }
    setProducts([...products, newProduct])
  }

  // Delete a product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  // Filter products based on search query and category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  // Get unique categories for filter options
  const categories = ["all", ...new Set(products.map((product) => product.category))]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Quản Lý Sản Phẩm</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Thêm Sản Phẩm Mới</h2>
        <ProductForm onAddProduct={addProduct} />
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterOptions categories={categories} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
      </div>

      <ProductList products={filteredProducts} onDeleteProduct={deleteProduct} />
    </div>
  )
}
