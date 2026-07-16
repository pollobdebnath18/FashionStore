"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import FashionStoreLogo from "../../images/fashionStore.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={FashionStoreLogo}
              alt="Fashion Store"
              width={50}
              height={50}
              className="rounded-full border border-white/20"
            />

            <h1 className="text-3xl font-bold text-white tracking-wide">
              Fashion<span className="text-blue-400 text-3xl font-bold">Store</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-orange-500 transition duration-300 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-white hover:text-orange-500 transition">
              <ShoppingBag size={24} />
            </button>

            <button className="border border-blue-200 text-blue-400 px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
              Login
            </button>

            <button className="bg-blue-400 hover:bg-orange-600 text-black px-5 py-2 rounded-full transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6">
            <ul className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-gray-300 hover:text-orange-500 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-6">
              <button className="border border-blue-500 text-black-500 py-2 rounded-full">
                Login
              </button>

              <button className="bg-blue-500 text-white py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
