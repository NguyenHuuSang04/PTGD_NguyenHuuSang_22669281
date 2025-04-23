"use client"

type FilterOptionsProps = {
  categories: string[]
  categoryFilter: string
  setCategoryFilter: (category: string) => void
}

export default function FilterOptions({ categories, categoryFilter, setCategoryFilter }: FilterOptionsProps) {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="category-filter" className="text-sm font-medium whitespace-nowrap">
        Lọc theo danh mục:
      </label>
      <select
        id="category-filter"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="p-2 border rounded-md"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === "all" ? "Tất cả" : category}
          </option>
        ))}
      </select>
    </div>
  )
}
