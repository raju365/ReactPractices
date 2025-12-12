import { nanoid } from "nanoid";
import { useContext } from "react";
import {useForm} from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Create = () => {
 const [todos, setTodos] = useContext(todoContext)

  // using react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isCompleated = false;
    data.id = nanoid();
    setTodos([...todos, data]);
    toast.success("Todo Created Successfully! 🚀");
    reset();
    
  };
  
  return (
    <div className=" w-full max-w-[700px] mx-auto px-4 md:px-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-10">
        Set <span className="text-red-400">Riminders</span> for <br /> tasks
      </h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", {
             required: "title can not be empty" 
          })}
          type="text"
          placeholder="Write your task..."
          className="border-b w-full text-xl sm:text-2xl font-thin truncate outline-0 focus:scale-95 px-2 py-1 mb-5 bg-gray-800"
        />
        <small className="font-thin text-red-400">{errors?.title?.message}</small>
        <br />
        <br />

        <button
          className="text-lg sm:text-xl cursor-pointer px-6 sm:px-10 py-3 border shadow-lg shadow-gray-600/50 rounded 
  transition-all duration-150 active:scale-95 active:bg-gray-700
          "
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
