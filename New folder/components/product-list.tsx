"use client"

import type { Product } from "@/app/page"
import { Trash2 } from "lucide-react"

type ProductListProps = {
  products: Product[]
  onDeleteProduct: (id: string) => void
}

export default function ProductList({ products, onDeleteProduct }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Không có sản phẩm nào. Hãy thêm sản phẩm mới!</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Danh Sách Sản Phẩm ({products.length})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Tên</th>
              <th className="py-3 px-4 text-left">Danh Mục</th>
              <th className="py-3 px-4 text-left">Giá</th>
              <th className="py-3 px-4 text-left">Mô Tả</th>
              <th className="py-3 px-4 text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">{product.price.toLocaleString("vi-VN")} đ</td>
                <td className="py-3 px-4 max-w-xs truncate">{product.description}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => onDeleteProduct(product.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Xóa sản phẩm"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
