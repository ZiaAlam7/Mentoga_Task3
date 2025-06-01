import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {product.name}
      </h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-400 mt-1">{product.category}</p>
    </div>
  );
}
