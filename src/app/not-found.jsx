"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-red-100"
        >
          <FaExclamationTriangle className="text-5xl text-red-500" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-8xl font-extrabold text-gray-900"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-3xl font-bold text-gray-800"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-gray-500 leading-7"
        >
          The page you re looking for doesn t exist or may have been moved. Lets
          get you back to exploring the latest fashion collections.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
