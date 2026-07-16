"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";

import Img1 from "../../images/img1.jpg";
// import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import Img4 from "../../images/img4.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const images = [Img1, Img3, Img4];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
     
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-500 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:pt-12 md:pb-22 z-10">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:col-span-5 md:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
            >
              <FaStar />
              New Season Collection
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl"
            >
              Wear What
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Defines You
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-md text-lg leading-8 text-gray-500"
            >
              Discover premium clothing designed for comfort, confidence, and
              modern style. Explore the latest trends and timeless fashion for
              every occasion.
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-7 py-4 font-semibold text-white shadow-lg"
            >
              Explore More
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </motion.button>

            {/* <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center gap-10 border-t border-gray-200 pt-8 md:justify-start"
            >
              <div>
                <h2 className="text-2xl font-bold">500+</h2>
                <p className="text-sm text-gray-500">Products</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">10K+</h2>
                <p className="text-sm text-gray-500">Customers</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">4.8★</h2>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative md:col-span-7"
          >
            <div className="relative mx-auto max-w-md md:max-w-lg">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="overflow-hidden rounded-3xl shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  >
                    <Image
                      src={images[currentImage]}
                      alt="Fashion"
                      className="h-[420px] w-full object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Offer Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 font-bold text-white">
                    %
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Up to 40% OFF
                    </h4>

                    <p className="text-sm text-gray-500">On New Collection</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
