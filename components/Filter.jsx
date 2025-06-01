import React from "react";

export default function Filters({ category, setCategory, sort, setSort, search, setSearch }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded-xl border border-gray-300 text-black"
      >
        <option value="All">All Categories</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Accessories">Accessories</option>
      </select>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 rounded-xl border border-gray-300  text-black"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded-xl border border-gray-300 w-64  text-black"
      />
    </div>
  );
}
