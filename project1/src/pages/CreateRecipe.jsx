import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
const CreateRecipe = () => {
  const { register, handleSubmit, reset } = useForm();
  const { recipes, addRecipes } = useContext(recipecontext);
  const submitHandler = (data) => {
    data.id= nanoid()
    addRecipes([...recipes, data]);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="enter image url"
      />
      <small className="text-red-400">error is shown </small>

      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />
      <small className="text-red-400">error is shown </small>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("description")}
        placeholder="Start writing your recipe..."
      ></textarea>
      <small className="text-red-400">error is shown </small>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("Ingredients")}
        placeholder="Start writing your ingredients..."
      ></textarea>
      <small className="text-red-400">error is shown </small>
      <textarea
        className="block border-b outline-0 p-2"
        {...register("Instructions")}
        placeholder="Start writing your instructions..."
      ></textarea>
      <small className="text-red-400">error is shown </small>

      <select
        className="block bg-gray-700 border-b outline-0 p-2"
        {...register("category")}
      >
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
      <small className="text-red-400">error is shown </small>

      <button
        className="block bg-zinc-900 text-white px-4 py-2 rounded-md mt-4"
        type="submit"
      >
        Save Recipe
      </button>
    </form>
  );
};

export default CreateRecipe;
