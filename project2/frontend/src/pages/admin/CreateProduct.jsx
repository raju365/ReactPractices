import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { asyncCreateProduct } from "../../store/actions/productActions";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CreateProductHandler = async (product) => {
    product.id = nanoid();
    console.log("Product to be created:", product);
    dispatch(asyncCreateProduct(product))
      .then(() => {
        toast.success("Product created successfully!");
        reset();
      
      })
      .catch(() => {
        toast.error("Product creation failed!");
      });
    navigate("/products");
  };
  return (
    <div className="min-h-svh flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Create Product ✨
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Add a new product to your store
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(CreateProductHandler)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("image", { required: "Image is required" })}
            type="url"
            placeholder="Image URL"
            className="input"
          />
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Title"
            className="input"
          />

          <input
            {...register("price", {
              required: "Price is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Invalid price",
              },
            })}
            type="number"
            placeholder="0.00"
            className="input"
          />
          {errors?.price && (
            <p className="text-sm text-red-500">{errors.price.message}</p>
          )}
          <input
            {...register("category", {
              required: "Category is required",
              category: true,
              
            })}
            type="text"
            placeholder="Category"
            className="input"
          />
          {errors?.category && (
            <p className="text-sm text-red-500">{errors.category.message}</p>
          )}

          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Description"
            className="input"
          ></textarea>
          {errors?.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}

          <button
            type="submit"
            className="mt-3 bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-all"
          >
            Create Product
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default CreateProduct;
