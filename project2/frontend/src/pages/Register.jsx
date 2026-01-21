import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = async (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncRegisterUser(user))
      .then(() => {
        toast.success("Registration successful!");
        reset();
        navigate("/login");
      })
      .catch(() => {
        toast.error("Registration failed!");
      });
  };

  return (
    <div className="min-h-svh flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Create Account ✨
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Join us and start shopping smarter
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(RegisterHandler)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="input"
          />

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className="input"
          />
          {errors?.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            type="password"
            placeholder="Password"
            className="input"
          />
          {errors?.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="mt-3 bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-all"
          >
            Register
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="ml-2 font-semibold text-indigo-600 hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
