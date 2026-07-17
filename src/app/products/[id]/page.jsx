import DetailsCard from "@/components/product/DetailsCard";
import products from "@/data/products";
import { notFound } from "next/navigation";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
    
  }

  return (
    <section className="min-h-screen bg-black  pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <DetailsCard product={product} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
