import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-xl">
        {/* Icon */}
        <FaExclamationTriangle className="text-red-500 text-7xl mx-auto mb-6 animate-pulse" />

        {/* 404 */}
        <h1 className="text-7xl font-extrabold mb-4 tracking-widest">404</h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
          >
            🏠 Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="bg-zinc-700 hover:bg-zinc-600 transition px-6 py-3 rounded-xl font-semibold"
          >
            🔙 Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
