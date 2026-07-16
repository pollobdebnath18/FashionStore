"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>

        {/* Stock Badge */}
        {!product.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
            Out of Stock
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-gray-900">
          {product.name}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">৳ {product.price}</p>

          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <FaShoppingBag />
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
