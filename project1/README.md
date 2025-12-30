# 🍽️ Recipe App (React)

A modern, fast, and fully responsive **Recipe Application** built with **React**.  
Users can explore recipes, view detailed instructions, create and update their own recipes, and manage favourites — all with a clean UI and smooth UX.

---

## ✨ Features

### 🏠 Home Page
- Beautiful hero section
- Recipe categories
- Featured recipes carousel
- Fully responsive layout

---

### 📖 Recipes Listing
- Display all recipes using reusable cards
- Responsive grid layout
- Clean and readable UI

---

### 🔍 Recipe Details Page
- View recipe image, ingredients, and instructions
- Category tag
- Add / Remove recipe from favourites ❤️
- Update or delete recipe

---

### ➕ Create & Update Recipes
- Add new recipes dynamically
- Edit existing recipes
- Form handling using **React Hook Form**

---

### ❤️ Favourite Recipes
- Add or remove recipes from favourites
- Favourite recipes stored using **localStorage**
- Dedicated **Favourite Page**
- Instant UI updates using React state

---

### 🚫 404 – Page Not Found
- Custom, attractive 404 page
- Go back or return to home easily

---

### 🧠 Global State Management
- Implemented using **React Context API**
- Recipes available across the entire app

---

### 🎨 Modern UI / UX
- Built with **Tailwind CSS**
- Smooth hover effects & transitions
- Dark theme
- Fully responsive (Mobile / Tablet / Desktop)

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Context API**
- **React Hook Form**
- **Tailwind CSS**
- **React Icons**
- **React Toastify**
- **Vite**

---

## 📂 Project Structure

```txt
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
│   ├── Fav.jsx
│   ├── NotFound.jsx
│
│── routes/
│   └── MainRoutes.jsx
│
│── App.jsx
│── main.jsx

🔁 Application Flow

Recipes are stored in Context API

Context syncs with localStorage

Users can:

Add / Update / Delete recipes

Mark recipes as favourites

Favourite recipes are stored as recipe IDs

Favourite page filters recipes using stored IDs

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/recipe-app.git

2️⃣ Navigate to project folder
cd recipe-app

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm run dev


App runs on:

http://localhost:5173

📌 Important Dependencies
npm install react-router-dom
npm install react-icons
npm install react-hook-form
npm install react-toastify