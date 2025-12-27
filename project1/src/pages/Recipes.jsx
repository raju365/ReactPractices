import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { recipes } = useContext(recipecontext);
  

  const renderRecipes = recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className="flex flex-wrap p-4">{recipes.length>0 ? renderRecipes:"No records found!"}</div>
  )
}

export default Recipes