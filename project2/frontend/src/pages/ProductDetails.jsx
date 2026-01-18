import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.productReducer.products.find((p) => p.id === id)
  );

  if (!product) {
    return (
      <div className="min-h-svh flex items-center justify-center text-xl font-semibold text-gray-600">
        Product not found ❌
      </div>
    );
  }

  return (
    <div className="min-h-svh bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-100 rounded-3xl p-6">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[420px] object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.title}
          </h1>

          <p className="text-2xl font-bold text-indigo-600 mt-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm">
              {product.category}
            </span>
            <span className="px-4 py-2 bg-gray-200 rounded-xl text-sm text-gray-700">
              In Stock
            </span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition-all"
              onClick={() => console.log("Add to cart", product)}
            >
              Add to Cart 🛒
            </button>

            <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all">
              Buy Now ⚡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
