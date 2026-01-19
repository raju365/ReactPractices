import { Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.products);

  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const product = products?.find((product) => product.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  });
  const UpdateProductHandler = (product) => {
    // Dispatch update action here
    dispatch(asyncUpdateProduct(id, product));
  };
  const deleteProductHandler = () => {
    // Dispatch delete action here
    dispatch(asyncDeleteProduct(id));
    Navigate("/products");
  };

  if (!product) {
    return (
      <div className="min-h-svh flex items-center justify-center text-xl font-semibold text-gray-600">
        Product not found ❌
      </div>
    );
  }

  return (
    <div className="min-h-svh bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT → PRODUCT DETAILS */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10">
          <div className="flex justify-center bg-gray-100 rounded-3xl p-6 mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-105 object-contain"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.title}
          </h1>

          <p className="text-2xl font-bold text-indigo-600 mt-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-3 mt-6">
            <span className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm">
              {product.category}
            </span>
            <span className="px-4 py-2 bg-gray-200 rounded-xl text-sm">
              In Stock
            </span>
          </div>
        </div>

        {/* RIGHT → ADMIN UPDATE FORM */}
        {currentUser && currentUser?.isAdmin && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Update Product 🛠️
            </h2>

            <form
              onSubmit={handleSubmit(UpdateProductHandler)}
              className="flex flex-col gap-4"
            >
              <input
                {...register("title", { required: "Title is required" })}
                className="input"
                placeholder="Title"
              />
              {errors?.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}

              <input
                {...register("price", { required: "Price is required" })}
                type="number"
                className="input"
                placeholder="Price"
              />

              <input
                {...register("category", { required: "Category is required" })}
                className="input"
                placeholder="Category"
              />

              <input
                {...register("image", { required: "Image URL is required" })}
                className="input"
                placeholder="Image URL"
              />

              <textarea
                {...register("description", { required: true })}
                rows="4"
                className="input resize-none"
                placeholder="Description"
              />

              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-all"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={deleteProductHandler}
                className="bg-red-600 text-white py-3 rounded-2xl font-semibold hover:bg-red-700 transition-all"
              >
                Delete Product 🗑️
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
