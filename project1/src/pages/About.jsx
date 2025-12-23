import { FaUtensils, FaUsers, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 py-16">
      {/* HERO SECTION */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
          Welcome to our Recipe App! We are passionate about sharing delicious recipes, tips, and culinary inspiration from around the world. Whether you are a beginner or a seasoned cook, our goal is to make cooking fun and easy.
        </p>
      </section>

      {/* MISSION CARDS */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform">
          <FaUtensils className="text-orange-400 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center">Our Mission</h2>
          <p className="text-gray-300 text-center">
            To provide a platform where food lovers can explore, share, and enjoy recipes from all over the world.
          </p>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform">
          <FaUsers className="text-green-400 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center">Our Team</h2>
          <p className="text-gray-300 text-center">
            A dedicated team of chefs, developers, and food enthusiasts working together to make cooking fun and easy.
          </p>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform">
          <FaGlobe className="text-blue-400 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center">Global Flavors</h2>
          <p className="text-gray-300 text-center">
            Bringing diverse cuisines to your kitchen, from traditional favorites to modern culinary experiments.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Cooking Community</h2>
        <p className="text-gray-300 mb-6">
          Explore new recipes, share your creations, and connect with food lovers like you!
        </p>
        <a
          href="/create-recipe"
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105"
        >
          Share Your Recipe
        </a>
      </section>
    </div>
  );
};

export default About;
