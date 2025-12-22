import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

const SingleRecipe = () => {
  const recipe = recipes.find((rec) => params.id == rec.id);
  const navigate = useNavigate();
  const params = useParams();
  const { recipes, addRecipes } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    const index = recipes.findIndex((rec) => params.id == rec.id);
    const copyrecipes = [...recipes];
    copyrecipes[index] = { ...copyrecipes[index], ...data };
    addRecipes(copyrecipes);
    toast.success("Recipe updated!");
    reset();
    navigate("/recipes");
  };
  const DeleteHandler = () => {
    const filteredRecipes = recipes.filter((rec) => params.id != rec.id);
    addRecipes(filteredRecipes);
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };
  return recipe ? (
    <div className="min-h-screen bg-zinc-900 text-white px-4 sm:px-8 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT : Recipe Preview */}
        <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {recipe.title}
          </h1>

          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-gray-300 leading-relaxed">{recipe.description}</p>

          <div className="mt-4 text-sm text-gray-400">
            <span className="bg-zinc-700 px-3 py-1 rounded-full">
              {recipe.category}
            </span>
          </div>
        </div>

        {/* RIGHT : Update Form */}
        <div className="bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-lg lg:sticky lg:top-6 h-fit">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🍲 Update Recipe
          </h2>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
            {/* Image */}
            <div>
              <input
                {...register("image")}
                defaultValue={recipe.image}
                type="url"
                placeholder="Image URL"
                className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none p-2"
              />
            </div>

            {/* Title */}
            <div>
              <input
                {...register("title")}
                defaultValue={recipe.title}
                type="text"
                placeholder="Recipe Title"
                className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none p-2"
              />
            </div>

            {/* Description */}
            <div>
              <textarea
                {...register("description")}
                defaultValue={recipe.description}
                placeholder="Recipe Description"
                className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none p-2 resize-none h-24"
              />
            </div>

            {/* Ingredients */}
            <div>
              <textarea
                {...register("ingredients")}
                defaultValue={recipe.ingredients}
                placeholder="Ingredients"
                className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none p-2 resize-none h-24"
              />
            </div>

            {/* Instructions */}
            <div>
              <textarea
                {...register("instructions")}
                defaultValue={recipe.instructions}
                placeholder="Cooking Instructions"
                className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none p-2 resize-none h-24"
              />
            </div>

            {/* Category */}
            <select
              {...register("category")}
              defaultValue={recipe.category}
              className="w-full bg-zinc-700 border border-gray-600 p-2 rounded-lg outline-none"
            >
              <option value="">Select category</option>
              <option value="starters">Starters</option>
              <option value="main_course_veg">Main Course (Veg)</option>
              <option value="main_course_nonveg">Main Course (Non-Veg)</option>
              <option value="fast_food">Fast Food</option>
              <option value="desserts">Desserts</option>
              <option value="indian">Indian</option>
              <option value="chinese">Chinese</option>
              <option value="italian">Italian</option>
            </select>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 font-semibold"
              >
                Update Recipe
              </button>

              <button
                onClick={DeleteHandler}
                type="button"
                className="flex-1 bg-red-600 hover:bg-red-700 transition rounded-lg py-2 font-semibold"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-white mt-20">Loading...</div>
  );
};
export default SingleRecipe;
