import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { recipes, setRecipes } = useContext(recipecontext);
  const recipe = recipes.find((rec) => params.id == rec.id);
  const { register, handleSubmit } = useForm();

  const updateHandler = (data) => {
    data.ingredients = data.ingredients.split(",").map((i) => i.trim());
    data.instructions = data.instructions.split("\n").map((i) => i.trim());

    const index = recipes.findIndex((rec) => params.id == rec.id);
    const copyrecipes = [...recipes];
    copyrecipes[index] = { ...copyrecipes[index], ...data };
    setRecipes(copyrecipes);
    localStorage.setItem("recipes", JSON.stringify(copyrecipes));
    toast.success("Recipe updated!");
    navigate("/recipes");
  };

  const DeleteHandler = () => {
    const filteredRecipes = recipes.filter((rec) => params.id != rec.id);
    setRecipes(filteredRecipes);
    localStorage.setItem("recipes", JSON.stringify(filteredRecipes));
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const favHandler = () => {
    const updatedFav = [...favourite, recipe.id];
    setFavourite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.success("Added to favourites ❤️");
  };

  const unfavHandler = () => {
    const updatedFav = favourite.filter((id) => id !== recipe.id);
    setFavourite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.info("Removed from favourites 💔");
  };

  return recipe ? (
    <div className="min-h-screen bg-zinc-900 text-white px-4 sm:px-8 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT : Recipe Preview */}
        <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {recipe.title}
          </h1>

          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden relative mb-4">
            {favourite.includes(recipe.id) ? (
              <FaHeart
                onClick={unfavHandler}
                className="right-[5%] absolute text-3xl text-red-400 cursor-pointer"
              />
            ) : (
              <FaRegHeart
                onClick={favHandler}
                className="right-[5%] absolute text-3xl text-red-400 cursor-pointer "
              />
            )}
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

          <form onSubmit={handleSubmit(updateHandler)} className="space-y-5">
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
                defaultValue={recipe.ingredients.join(", ")}
                placeholder="Ingredients"
                className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none p-2 resize-none h-24"
              />
            </div>

            {/* Instructions */}
            <div>
              <textarea
                {...register("instructions")}
                defaultValue={recipe.instructions.join("\n")}
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
