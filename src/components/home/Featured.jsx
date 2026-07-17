import ProductCard from "../product/ProductCard";
import products from "@/data/products";
import Link from "next/link";

const Featured = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-500 font-semibold uppercase tracking-widest">
            Featured Collection
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Featured Products
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Explore our handpicked collection of premium fashion essentials,
            designed to elevate your everyday style with comfort, quality, and
            timeless elegance.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/products"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;