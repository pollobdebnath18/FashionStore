"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              ✨ New Collection 2026
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Elevate Your
              <span className="block text-orange-500">Everyday Style</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
              Discover premium clothing designed for comfort, confidence, and
              modern living. Explore the latest trends and timeless essentials
              for every occasion.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-500/30"
              >
                Explore Collection
                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 hover:border-orange-500 px-8 py-4 rounded-full text-gray-300 hover:text-orange-500 transition"
              >
                New Arrivals
              </motion.button>
            </div>

            <div className="flex gap-12 mt-14">
              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p className="text-gray-400 mt-2">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-400 mt-2">Fashion Products</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">50+</h2>
                <p className="text-gray-400 mt-2">Top Brands</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full bg-orange-500/20 blur-3xl"
            />

            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/images/banner/fashion-banner.png"
                alt="Fashion Banner"
                width={550}
                height={650}
                priority
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
