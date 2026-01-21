import { Link } from "react-router-dom";
import { motion } from "motion/react";

const PageNotFound = () => {
  return (
    <div className="min-h-svh flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 px-4">

      <div className="text-center">

        {/* Floating Illustration */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/9473/9473968.png"
          alt="Funny Lost"
          className="w-20 mx-auto mb-6 drop-shadow-xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Funny 404 Text */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold text-indigo-600"
        >
          404 😵
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 mt-4 text-lg max-w-md mx-auto"
        >
          Oops! The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Floating emojis */}
        <div className="relative h-20 mt-8">
          <motion.span
            className="absolute text-4xl left-10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            🤦‍♂️
          </motion.span>

          <motion.span
            className="absolute text-4xl right-10"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            🧭
          </motion.span>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-5 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Go Back Home 🏠
          </Link>

          <Link
            to="/products"
            className="px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            Explore Products 🛍️
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
