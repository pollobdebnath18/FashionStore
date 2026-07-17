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
  FaCheck,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const DetailsCard = ({ product }) => {
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] ?? null,
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, {
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

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

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center p-6 lg:p-10"
        >
        
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

          
          <h2 className="mt-6 text-4xl font-bold text-blue-500">
            ৳ {product.price}
          </h2>

          
          <p className="mt-6 leading-8 text-zinc-400">{product.description}</p>

         
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Color: <span className="text-blue-400">{selectedColor}</span>
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selectedColor === color
                      ? "border-blue-500 bg-blue-600/20 text-blue-300"
                      : "border-zinc-700 bg-zinc-800 text-zinc-300 hover:border-zinc-500"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

         
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Size: <span className="text-blue-400">{selectedSize}</span>
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex h-12 w-12 items-center justify-center rounded-lg border text-white transition ${
                    selectedSize === size
                      ? "border-blue-500 bg-blue-600"
                      : "border-zinc-700 bg-zinc-800 hover:border-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-white">Quantity</h3>
            <div className="flex w-fit items-center gap-5 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-zinc-400 transition hover:text-white"
              >
                <FaMinus className="h-3 w-3" />
              </button>
              <span className="w-5 text-center font-semibold text-white">
                {quantity}
              </span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="text-zinc-400 transition hover:text-white"
              >
                <FaPlus className="h-3 w-3" />
              </button>
            </div>
          </div>

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

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              disabled={!product.inStock}
              onClick={handleAddToCart}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-4 font-semibold transition ${
                !product.inStock
                  ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
                  : added
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {added ? <FaCheck /> : <FaShoppingCart />}
              {added ? "Added to Cart" : "Add to Cart"}
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
