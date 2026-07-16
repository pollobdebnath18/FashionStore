import { FaTshirt, FaUsers, FaShippingFast, FaAward } from "react-icons/fa";

const AboutPage = () => {
  const features = [
    {
      icon: <FaTshirt size={32} />,
      title: "Premium Fashion",
      description:
        "Discover carefully selected clothing made with quality fabrics and modern designs.",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Happy Customers",
      description:
        "Thousands of fashion lovers trust us for stylish outfits and reliable service.",
    },
    {
      icon: <FaShippingFast size={32} />,
      title: "Fast Delivery",
      description:
        "Quick and secure shipping to ensure your favorite styles reach you on time.",
    },
    {
      icon: <FaAward size={32} />,
      title: "Best Quality",
      description:
        "We focus on premium quality, comfort, and long-lasting fashion for every season.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-7">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 font-semibold uppercase tracking-widest">
            About Fashion Store
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Fashion That Defines
            <span className="text-blue-500"> Your Style</span>
          </h1>

          <p className="mt-6 text-gray-400 leading-8 text-lg">
            Fashion Store is your destination for premium clothing and modern
            fashion. We bring together timeless designs, exceptional quality,
            and affordable prices to help you express your unique personality.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-400 leading-8 mb-5">
              Fashion Store was created with one mission: to make premium
              fashion accessible to everyone. From casual essentials to elegant
              collections, every piece is carefully selected to combine comfort,
              quality, and modern style.
            </p>

            <p className="text-gray-400 leading-8">
              We believe that confidence begins with what you wear. That s why
              our collections are designed to help you look your best for every
              occasion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gray-900 p-8 text-center border border-gray-800">
              <h3 className="text-4xl font-bold text-blue-500">500+</h3>
              <p className="text-gray-400 mt-2">Fashion Products</p>
            </div>

            <div className="rounded-2xl bg-gray-900 p-8 text-center border border-gray-800">
              <h3 className="text-4xl font-bold text-blue-500">10K+</h3>
              <p className="text-gray-400 mt-2">Happy Customers</p>
            </div>

            <div className="rounded-2xl bg-gray-900 p-8 text-center border border-gray-800">
              <h3 className="text-4xl font-bold text-blue-500">50+</h3>
              <p className="text-gray-400 mt-2">Top Brands</p>
            </div>

            <div className="rounded-2xl bg-gray-900 p-8 text-center border border-gray-800">
              <h3 className="text-4xl font-bold text-blue-500">4.9★</h3>
              <p className="text-gray-400 mt-2">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We are committed to providing premium fashion with outstanding
              quality, fast service, and a seamless shopping experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-800 bg-gray-900 p-8 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-blue-500 mb-5">{feature.icon}</div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-400 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
