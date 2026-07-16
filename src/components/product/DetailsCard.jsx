"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

const DetailsCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-6"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              priority
              className="h-[300px] md:h-[500px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          {/* Features */}
          <div className="mt-10 grid gap-4 border-t border-zinc-800 pt-8 sm:grid-cols-3">
            <div className="rounded-xl bg-zinc-800 p-4">
              <FaTruck className="mb-3 text-2xl text-blue-400" />
              <h4 className="font-semibold text-white">Free Shipping</h4>
              <p className="mt-1 text-sm text-zinc-400">Orders over ৳2000</p>
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              <FaUndo className="mb-3 text-2xl text-blue-400" />
              <h4 className="font-semibold text-white">Easy Returns</h4>
              <p className="mt-1 text-sm text-zinc-400">7 Days Return</p>
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              <FaShieldAlt className="mb-3 text-2xl text-blue-400" />
              <h4 className="font-semibold text-white">Secure Payment</h4>
              <p className="mt-1 text-sm text-zinc-400">100% Protected</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center p-6 lg:p-10"
        >
          {/* Back */}
          <Link
            href="/products"
            className="mb-6 inline-flex w-fit items-center gap-2 text-blue-400 transition hover:text-blue-500"
          >
            <FaArrowLeft />
            Back to Products
          </Link>

          {/* Category */}
          <span className="mb-4 w-fit rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-400">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white lg:text-5xl">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-2">
            <FaStar className="text-yellow-400" />

            <span className="font-semibold text-white">{product.rating}</span>

            <span className="text-zinc-400">(124 Reviews)</span>
          </div>

          {/* Price */}
          <h2 className="mt-6 text-4xl font-bold text-blue-500">
            ৳ {product.price}
          </h2>

          {/* Description */}
          <p className="mt-6 leading-8 text-zinc-400">{product.description}</p>

          {/* Colors */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Available Colors
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Available Sizes
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-white transition hover:border-blue-500 hover:bg-blue-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <div className="mt-8 flex items-center gap-3">
            {product.inStock ? (
              <>
                <FaCheckCircle className="text-xl text-green-500" />
                <span className="font-semibold text-green-400">In Stock</span>
              </>
            ) : (
              <>
                <FaTimesCircle className="text-xl text-red-500" />
                <span className="font-semibold text-red-400">Out of Stock</span>
              </>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              disabled={!product.inStock}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-4 font-semibold transition ${
                product.inStock
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-zinc-700 text-zinc-400"
              }`}
            >
              <FaShoppingCart />
              Add to Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex-1 rounded-xl border border-blue-600 py-4 font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
            >
              Buy Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailsCard;
