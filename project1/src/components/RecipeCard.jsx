import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  const { id, image, title, description } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" 
        mt-3 mb-3 
        block 
        w-full 
        sm:w-[60%] 
        md:w-[45%] 
        lg:w-[30%]
        rounded-xl 
        overflow-hidden 
        shadow-lg 
        p-4 
        mx-auto
        hover:scale-[1.02]
        transition-transform"
    >
      <img
        className="object-cover w-full h-45 sm:h-50 md:h-55"
        src={image}
        alt={title}
      />
      <h2 className="mt-3 px-2 text-lg sm:text-xl font-black">{title}</h2>
      <p className="px-2 pb-3 text-sm sm:text-base text-gray-200">
        {description.slice(0, 100)}...{""}
        <small className="text-blue-400 ml-1">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
