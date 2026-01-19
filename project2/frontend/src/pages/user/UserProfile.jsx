import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { asyncDeleteUser, asyncUpdateUser } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: currentUser,
  });

  const updateUserHandler = (updatedUser) => {
    console.log("Updated User =>", updatedUser);

    // TODO: dispatch update action
    dispatch(asyncUpdateUser(currentUser.id, updatedUser));
  };
  const deteleUserHandler = () => {
    dispatch(asyncDeleteUser(currentUser.id));
    navigate("/login");
  };

  return (
    <div className="min-h-svh bg-gray-100 flex justify-center items-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-lg w-full"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="h-28 w-28 rounded-full bg-indigo-600 text-white flex items-center justify-center text-4xl font-bold shadow-xl">
            {currentUser?.username?.charAt(0).toUpperCase()}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            {currentUser?.username}
          </h2>

          <p className="text-gray-600 text-sm">{currentUser?.email}</p>

          {currentUser?.isAdmin && (
            <p className="mt-2 text-xs px-3 py-1 bg-red-600 text-white rounded-full">
              Admin Account
            </p>
          )}
        </div>

        <hr className="my-8" />

        {/* Form */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Edit Profile ⚙️
        </h3>

        <form
          onSubmit={handleSubmit(updateUserHandler)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("username", { required: "Username is required" })}
            className="input"
            placeholder="Username"
            type="text"
          />
          {errors?.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <input
            {...register("email", { required: "Email is required" })}
            className="input"
            placeholder="Email"
            type="email"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            {...register("password", { required: "Password is required" })}
            className="input"
            placeholder="Password"
            type="password"
          />
          {errors?.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-all"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={deteleUserHandler}
            className="bg-red-600 text-white py-3 rounded-2xl font-semibold hover:bg-red-700 transition-all"
          >
            Delete Account 🗑️
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UserProfile;
