"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const FREE_SHIPPING_THRESHOLD = 2000;
const SHIPPING_FEE = 100;
const TAX_RATE = 0; // adjust if your store needs to charge tax

const CartSummary = ({ onCheckout }) => {
  const { cartTotal } = useCart();

  const shipping =
    cartTotal > 0 && cartTotal < FREE_SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;
  const tax = Math.round(cartTotal * TAX_RATE);
  const total = cartTotal + shipping + tax;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-5 text-lg font-semibold text-white">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span className="text-white">৳{cartTotal}</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Shipping</span>
          <span className="text-white">
            {shipping === 0 ? "Free" : `৳${shipping}`}
          </span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Tax</span>
          <span className="text-white">৳{tax}</span>
        </div>
      </div>

      {shipping > 0 && (
        <p className="mt-3 text-xs text-blue-400">
          Add ৳{FREE_SHIPPING_THRESHOLD - cartTotal} more for free shipping.
        </p>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="font-semibold text-white">Total</span>
        <span className="text-2xl font-bold text-white">৳{total}</span>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onCheckout}
        className="mt-6 w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 py-3.5 font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-blue-600/30"
      >
        Checkout
      </motion.button>

      <Link
        href="/products"
        className="mt-3 block w-full rounded-xl border border-white/10 py-3.5 text-center font-semibold text-gray-300 transition-colors hover:border-white/30 hover:text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
