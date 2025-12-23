🍽️ Recipe App (React)

A modern, responsive Recipe Application built with React, where users can explore delicious recipes, view details, and create their own recipes.
The UI is clean, fast, and fully responsive across mobile, tablet, and desktop.

🚀 Features

🏠 Beautiful Home Page

Hero section

Categories

Featured recipes carousel (fully responsive)

📖 Recipes Listing

Display all recipes using reusable cards

Responsive grid layout

🔍 Recipe Details Page

View ingredients, instructions, and image

➕ Create Recipe

Add new recipes dynamically using Context API

🧠 Global State Management

Implemented using React Context API

🎨 Modern UI

Built with Tailwind CSS

Smooth hover effects & transitions

🛠️ Tech Stack

React

React Router DOM

Context API

Tailwind CSS

React Icons

Vite (or CRA – adjust if needed)

📂 Project Structure
src/
│── components/
│   ├── Navbar.jsx
│   ├── RecipeCard.jsx
│
│── context/
│   └── RecipeContext.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Recipes.jsx
│   ├── SingleRecipe.jsx
│   ├── CreateRecipe.jsx
│   └── About.jsx
│
│── routes/
│   └── MainRoutes.jsx
│
│── App.jsx
│── main.jsx

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/recipe-app.git

2️⃣ Go to project folder
cd recipe-app

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev


App will run on:

http://localhost:5173

📌 Important Dependencies
npm install react-router-dom
npm install react-icons

🧩 Context API Example
<recipecontext.Provider value={{ recipes, setRecipes }}>
  {children}
</recipecontext.Provider>


Used for managing recipes globally across the app.

📱 Responsive Design

✅ Mobile: 1 card per view

✅ Tablet: 2–3 cards per view

✅ Desktop: 4 cards per view

Carousel adjusts automatically based on screen size