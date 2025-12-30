import { useContext, useEffect, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Fav = () => {
  const navigate = useNavigate();
  const { recipes } = useContext(recipecontext);

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem("fav")) || [];
    const favRecipes = recipes.filter((r) => favIds.includes(r.id));
    setFavourites(favRecipes);
  }, [recipes]);

  if (favourites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-zinc-900">
        <FaHeart className="text-6xl text-red-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">
          No Favourite Recipes
        </h2>
        <p className="text-gray-400">
          Add some recipes to see them here ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 sm:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        ❤️ My Favourite Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {favourites.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => navigate(`/recipes/details/${recipe.id}`)}
            className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-1">
                {recipe.title}
              </h2>

              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {recipe.description}
              </p>

              <span className="inline-block bg-zinc-700 text-xs px-3 py-1 rounded-full">
                {recipe.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fav;
