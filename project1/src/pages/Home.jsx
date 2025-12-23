import { useContext, useState, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { recipes } = useContext(recipecontext);
  const featuredRecipes = recipes.slice(0, 5); // Top 5 recipes
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  // Adjust cards per slide based on screen width
  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerSlide(1); // mobile
      else if (width < 1024) setCardsPerSlide(2); // tablet
      else setCardsPerSlide(3); // desktop
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(featuredRecipes.length / cardsPerSlide);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* HERO SECTION */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-r from-orange-500 to-yellow-400 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-white animate-fadeIn">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-100 animate-fadeIn delay-200">
            Explore, cook, and share your favorite dishes from around the world.
          </p>
          <Link
            to="/recipes"
            className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:shadow-xl transition transform hover:scale-105 animate-fadeIn delay-400"
          >
            Explore Recipes
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full animate-spin-slow"></div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: "Starters", color: "bg-yellow-600/30", link: "/recipes?category=starters" },
            { name: "Main Course", color: "bg-green-600/30", link: "/recipes?category=main_course_veg" },
            { name: "Desserts", color: "bg-pink-600/30", link: "/recipes?category=desserts" },
            { name: "Beverages", color: "bg-blue-600/30", link: "/recipes?category=hot_beverages" },
            { name: "Fast Food", color: "bg-red-600/30", link: "/recipes?category=fast_food" },
            { name: "Indian Cuisine", color: "bg-orange-600/30", link: "/recipes?category=indian" },
          ].map((cat, idx) => (
            <Link
              to={cat.link}
              key={idx}
              className={`flex items-center justify-center rounded-xl ${cat.color} h-32 font-semibold text-lg text-white hover:scale-105 transition transform shadow hover:shadow-lg`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED RECIPES CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative">
        <h2 className="text-3xl font-bold mb-8 text-white">Featured Recipes</h2>

        <div className="relative">
          {/* Carousel Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 hover:text-yellow-400 transition px-2"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 hover:text-yellow-400 transition px-2"
          >
            &#10095;
          </button>

          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="shrink-0 p-2"
                  style={{ width: `${100 / cardsPerSlide}%` }}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === currentIndex ? "bg-yellow-400" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
