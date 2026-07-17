"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
          <FaShoppingBag className="h-8 w-8 text-gray-500" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-white">
          Your bag is empty
        </h1>
        <p className="mb-8 text-sm text-gray-400">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-blue-600/30"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          Start Shopping
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
