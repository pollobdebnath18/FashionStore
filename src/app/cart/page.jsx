"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummery";

const CartPage = () => {
  const { items, isHydrated } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isHydrated) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="h-10 w-10 rounded-full border-2 border-white/10 border-t-blue-500"
        />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-black px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-600"
          >
            <FaCheckCircle className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="mb-3 text-2xl font-bold text-white">
            Order Confirmed
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-gray-400">
            This is a demo storefront, so nothing was actually charged — but in
            a live shop your order would be on its way.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-blue-600/30"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Review your selected items before checkout.
          </p>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5">
                <div className="hidden grid-cols-[80px_2fr_1fr_1.2fr_1fr_auto] gap-4 border-b border-white/10 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 md:grid">
                  <span>Image</span>
                  <span>Name</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Total</span>
                  <span className="justify-self-end">Remove</span>
                </div>

                <div className="divide-y divide-white/10">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <CartItem
                        key={`${item.id}-${item.color}-${item.size}`}
                        item={item}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CartSummary onCheckout={() => setOrderPlaced(true)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
