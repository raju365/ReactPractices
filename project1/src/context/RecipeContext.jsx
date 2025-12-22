import { createContext, useState } from "react"

export const recipecontext = createContext(null);

const RecipeContext = ({children}) => {
    const [recipes, addRecipes] = useState([]);
    console.log(recipes);
    
  return (
    <recipecontext.Provider value={{recipes, addRecipes}}>
        {children}
    </recipecontext.Provider>
  )
}

export default RecipeContext