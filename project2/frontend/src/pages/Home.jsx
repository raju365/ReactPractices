import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector(
    (state) => state.productReducer.products
  );

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Shop Smarter.<br />Live Better.
            </h1>

            <p className="mt-6 text-lg text-white/90">
              Discover premium products curated just for you.
              Best quality, best price, fastest delivery.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/products"
                className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/register"
                className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-indigo-600 transition"
              >
                Join Us
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="shopping"
              className="w-105 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= CATEGORY SECTION ================= */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Shop by Category 🛍️
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            { name: "Clothing", img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
            { name: "Electronics", img: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png" },
            { name: "Shoes", img: "https://cdn-icons-png.flaticon.com/512/3330/3330161.png" },
            { name: "Accessories", img: "https://cdn-icons-png.flaticon.com/512/891/891462.png" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center cursor-pointer hover:shadow-2xl"
            >
              <img src={cat.img} className="h-20 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
            Featured Products ✨
          </h2>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-5 shadow-xl hover:scale-[1.03] transition"
                >
                  <div className="h-40 flex justify-center items-center bg-gray-100 rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full object-contain"
                    />
                  </div>

                  <h3 className="mt-4 font-bold text-gray-800 line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="text-indigo-600 font-semibold mt-1">
                    ₹ {product.price}
                  </p>

                  <Link
                    to={`/product/${product.id}`}
                    className="mt-4 inline-block text-sm px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                  >
                    View Product
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No products available
            </p>
          )}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          What Our Customers Say ❤️
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { name: "Amit", review: "Amazing quality products and super-fast delivery!" },
            { name: "Priya", review: "Best shopping experience! Highly recommended." },
            { name: "Rahul", review: "Customer support was awesome. Loved everything!" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <p className="text-gray-700 mb-4 italic">"{t.review}"</p>
              <h3 className="font-bold text-gray-900 text-lg">— {t.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">ShopX</h2>
            <p className="mt-4 text-gray-400">
              Quality products at unbeatable prices.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
              <li><Link to="/register" className="hover:text-white">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-300">support@Example.com</p>

          </div>
        </div>

        <p className="text-center text-gray-500 mt-10">
          © 2026 ShopX — All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;
