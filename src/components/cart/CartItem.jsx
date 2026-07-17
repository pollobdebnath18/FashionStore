"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const lineTotal = item.price * item.quantity;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 md:grid-cols-[80px_2fr_1fr_1.2fr_1fr_auto] md:gap-4"
    >
      
      <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-white/5 md:h-16 md:w-14">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

     
      <div className="min-w-0">
        <p className="font-semibold text-white truncate">{item.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">
          {[item.color, item.size].filter(Boolean).join(" · ")}
        </p>
       
        <p className="text-sm text-gray-400 mt-1 md:hidden">৳{item.price}</p>
      </div>

     
      <p className="hidden text-sm text-gray-300 md:block">৳{item.price}</p>

     
      <div className="col-span-2 flex items-center gap-3 rounded-lg border border-white/10 px-2 py-1 w-fit md:col-span-1">
        <button
          aria-label="Decrease quantity"
          onClick={() =>
            updateQuantity(item.id, item.color, item.size, item.quantity - 1)
          }
          className="p-1 text-gray-400 transition-colors hover:text-white"
        >
          <FaMinus className="h-2.5 w-2.5" />
        </button>
        <span className="w-4 text-center text-sm text-white">
          {item.quantity}
        </span>
        <button
          aria-label="Increase quantity"
          onClick={() =>
            updateQuantity(item.id, item.color, item.size, item.quantity + 1)
          }
          className="p-1 text-gray-400 transition-colors hover:text-white"
        >
          <FaPlus className="h-2.5 w-2.5" />
        </button>
      </div>

     
      <p className="hidden font-bold text-white md:block">৳{lineTotal}</p>

    
      <button
        aria-label="Remove item"
        onClick={() => removeFromCart(item.id, item.color, item.size)}
        className="justify-self-end text-red-500 transition-colors hover:text-red-800"
      >
        <FaTrash className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  );
};

export default CartItem;
