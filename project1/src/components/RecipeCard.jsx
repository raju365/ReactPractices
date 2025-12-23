import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, image, title, description } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="
        block
        rounded-xl
        overflow-hidden
        shadow-lg
        m-4
        bg-gray-800
        hover:scale-105
        transition-transform
        duration-300
        shrink-0
        w-full
        sm:w-[80%]
        md:w-[75%]
        lg:w-[40%]
        xl:w-[40%]
        mx-auto
      "
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 truncate">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-300 line-clamp-3">
          {description}
        </p>
        <span className="text-blue-400 font-medium mt-1 inline-block">more</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
