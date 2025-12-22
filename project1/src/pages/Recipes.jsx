import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const { recipes } = useContext(recipecontext);
  const renderRecipes = recipes.map(recipe =>(
    <div key={recipe.id}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>

    </div>
  ))
  return (
    <div>{renderRecipes}</div>
  )
}

export default Recipes