import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
const dispatch = useDispatch();
  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/");
  };

  return (
    <div className="min-h-svh flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Welcome Back 👋
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Login to continue shopping
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(LoginHandler)} className="flex flex-col gap-4">
          
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="input"
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="input"
          />

          <button
            type="submit"
            className="mt-3 bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-all"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?
          <Link
            to="/register"
            className="ml-2 font-semibold text-indigo-600 hover:underline"
          >
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
