import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=>{
     setRecipes(JSON.parse(localStorage.getItem("recipes"))||[]);

  },[]);

  return (
    <recipecontext.Provider value={{ recipes, setRecipes }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;

// {
//       id: 1,
//       title: "Classic Margherita Pizza",
//       ingredients: [
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste",
//       ],
//       instructions: [
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot.",
//       ],

//       image: "https://cdn.dummyjson.com/recipe-images/1.webp",

//       category: "fast_food",
//       description:
//         "A classic Italian pizza topped with fresh mozzarella, basil, and a rich tomato sauce. Perfect for a quick and delicious meal.",
//     },
