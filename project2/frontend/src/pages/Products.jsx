import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderProducts = products.map((product) => {
    return (
      <div
        key={product.id}
        className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-5 flex flex-col hover:scale-[1.02] transition-all duration-300 border border-gray-200"
      >
        {/* Product Image */}
        <div className="w-full h-48 overflow-hidden rounded-2xl flex items-center justify-center bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <h2 className="text-xl font-bold mt-4 text-gray-800 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-indigo-600 font-semibold text-lg mt-1">
          ₹ {product.price}
        </p>

        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <Link
            to={`/product/${product.id}`}
            className="text-sm px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all"
          >
            View Details
          </Link>

          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all text-sm">
            Add To Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-svh bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Our Products ✨
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {renderProducts}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">No Products Available</p>
      )}
    </div>
  );
};

export default Products;
