import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState:{errors} } = useForm();
  const { recipes, addRecipes } = useContext(recipecontext);

  const submitHandler = (data) => {
    data.id = nanoid();
    addRecipes([...recipes, data]);
    toast.success("Recipe added successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen flex justify-center items-start px-4 py-8">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="
          w-full 
          max-w-2xl 
          bg-zinc-800 
          rounded-xl 
          p-6 
          sm:p-8 
          shadow-lg
        "
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">
          🍲 Create New Recipe
        </h2>

        {/* Image */}
        <input
          className="w-full bg-transparent border-b border-gray-500 outline-none p-2 mb-1 text-white"
          {...register("image")}
          type="url"
          placeholder="Enter image URL"
        />
        <small className="text-red-400 mb-4 block">{errors?.image?.message}</small>

        {/* Title */}
        <input
          className="w-full bg-transparent border-b border-gray-500 outline-none p-2 mb-1 text-white"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        <small className="text-red-400 mb-4 block">{errors?.title?.message}</small>

        {/* Description */}
        <textarea
          className="w-full bg-transparent border-b border-gray-500 outline-none p-2 mb-1 text-white resize-none h-24 sm:h-28"
          {...register("description")}
          placeholder="Start writing your recipe..."
        />
        <small className="text-red-400 mb-4 block">{errors?.description?.message}</small>

        {/* Ingredients */}
        <textarea
          className="w-full bg-transparent border-b border-gray-500 outline-none p-2 mb-1 text-white resize-none h-24 sm:h-28"
          {...register("Ingredients")}
          placeholder="Start writing your ingredients..."
        />
        <small className="text-red-400 mb-4 block">{errors?.Ingredients?.message}</small>

        {/* Instructions */}
        <textarea
          className="w-full bg-transparent border-b border-gray-500 outline-none p-2 mb-1 text-white resize-none h-24 sm:h-28"
          {...register("Instructions")}
          placeholder="Start writing your instructions..."
        />
        <small className="text-red-400 mb-4 block">{errors?.Instructions?.message}</small>

        {/* Category */}
        <select
          className="w-full bg-zinc-700 border border-gray-600 outline-none p-2 rounded-md text-white mb-4"
          {...register("category")}
        >
          <option value="">Select category</option>
          <option value="starters">Starters / Appetizers</option>
          <option value="soups_salads">Soups & Salads</option>
          <option value="main_course_veg">Main Course (Veg)</option>
          <option value="main_course_nonveg">Main Course (Non-Veg)</option>
          <option value="breads">Breads</option>
          <option value="rice_noodles">Rice & Noodles</option>
          <option value="fast_food">Fast Food / Snacks</option>
          <option value="tandoor_grill">Tandoor / Grill</option>
          <option value="seafood">Seafood</option>
          <option value="combos_thalis">Combos / Thalis</option>
          <option value="kids_menu">Kids Menu</option>
          <option value="cold_drinks">Cold Drinks & Mocktails</option>
          <option value="hot_beverages">Hot Beverages</option>
          <option value="shakes">Shakes & Smoothies</option>
          <option value="desserts">Desserts / Sweets</option>
          <option value="veg_specials">Vegetarian Specials</option>
          <option value="vegan_jain">Vegan / Jain Food</option>
          <option value="healthy_food">Healthy / Diet Food</option>
          <option value="indian">Indian Cuisine</option>
          <option value="chinese">Chinese Cuisine</option>
          <option value="italian">Italian Cuisine</option>
          <option value="continental">Continental Cuisine</option>
        </select>

        {/* Button */}
        <button
          className="
            w-full 
            bg-blue-600 
            hover:bg-blue-700 
            text-white 
            px-4 
            py-2 
            rounded-md 
            mt-4
            transition
          "
          type="submit"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
