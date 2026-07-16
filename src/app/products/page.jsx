"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import Products from "@/data/products";

const ProductsPage = () => {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(Products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    if (category === "All") return Products;

    return Products.filter((product) => product.category === category);
  }, [category]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white">Our Products</h1>

        <p className="mt-3 text-gray-500">
          Discover our latest fashion collection.
        </p>
      </div>

      {/* Category Filter */}

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-5 py-2 font-medium transition ${
              category === item
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mx-6 lg:mx-0">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
