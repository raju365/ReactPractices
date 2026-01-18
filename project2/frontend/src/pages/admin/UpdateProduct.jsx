import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { asyncUpdateProduct } from "../../store/actions/productActions";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.productReducer.products.find((p) => p.id === id)
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  });

  if (!product) {
    return (
      <div className="min-h-svh flex items-center justify-center text-xl font-semibold text-gray-600">
        Product Not Found ❌
      </div>
    );
  }

  const UpdateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id,product))
      .then(() => {
        toast.success("Product updated successfully!");
        reset();
        navigate("/admin/products");
      })
      .catch(() => {
        toast.error("Product update failed!");
      });
  };

  return (
    <div className="min-h-svh bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Update Form */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
            Update Product 🛠️
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Modify the product details and save
          </p>

          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="flex flex-col gap-4"
          >
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              placeholder="Product Title"
              defaultValue={product.title}
              className="input"
            />
            {errors?.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}

            <input
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than 0" },
              })}
              type="number"
              placeholder="Price"
              defaultValue={product.price}
              className="input"
            />
            {errors?.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}

            <input
              {...register("category", { required: "Category is required" })}
              type="text"
              placeholder="Category"
              defaultValue={product.category}
              className="input"
            />
            {errors?.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}

            <input
              {...register("image", { required: "Image URL is required" })}
              type="url"
              placeholder="Image URL"
              defaultValue={product.image}
              className="input"
            />
            {errors?.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}

            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              placeholder="Product Description"
              rows="4"
              defaultValue={product.description}
              className="input resize-none"
            />
            {errors?.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}

            <button
              type="submit"
              className="mt-3 bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-all"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Right: Product Preview */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-5 text-gray-800 text-center">
            Product Preview 👀
          </h2>

          <div className="flex justify-center mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-75 rounded-2xl shadow-lg object-contain"
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>

          <p className="text-indigo-600 font-bold text-lg mt-2">
            ₹ {product.price}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <p className="mt-4 inline-block px-4 py-2 text-sm bg-gray-900 text-white rounded-xl">
            {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
