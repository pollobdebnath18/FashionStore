"use client";

import { useEffect, useMemo, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import ProductCard from "@/components/product/ProductCard";
import ProductSkeleton from "@/components/product/ProductSkeleton";
import Products from "@/data/products";

const SKELETON_COUNT = 8;

const ProductsPage = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [isLoading, setIsLoading] = useState(true);

  // Simulates fetching product data. Since this app runs on local dummy
  // data there's no real network call — replace this with your actual
  // fetch/await logic later and drop the setTimeout.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    "All",
    ...new Set(Products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = Products;

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (search.trim()) {
      const query = search.trim().toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query),
      );
    }

    // avoid mutating the filtered/original array in place
    result = [...result];

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [category, search, sort]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white">Our Products</h1>

        <p className="mt-3 text-gray-500">
          Discover our latest fashion collection.
        </p>
      </div>

      {/* Search + Sort */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-full border border-zinc-700 bg-zinc-900 py-2.5 pl-10 pr-9 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-blue-500"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
            >
              <FaTimes className="text-sm" />
            </button>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-zinc-400">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white outline-none transition focus:border-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
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
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Results count */}
      {!isLoading && (
        <p className="mb-6 text-center text-sm text-zinc-500">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"} found
        </p>
      )}

      {/* Products */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mx-6 lg:mx-0">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg font-medium text-zinc-300">No products found</p>
          <p className="mt-2 text-sm text-zinc-500">
            Try a different search term or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mx-6 lg:mx-0">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
