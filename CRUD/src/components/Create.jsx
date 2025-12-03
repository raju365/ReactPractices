import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const { setTodos, todos } = props;
  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
     if (!title.trim()) return;

    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleated: false,
    };
    setTodos([...todos, newTodo]);

    settitle("");
  };
  return (
    <div className=" w-full max-w-[700px] mx-auto px-4 md:px-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-10">
        Set <span className="text-red-400">Riminders</span> for <br /> tasks
      </h1>

      <form onSubmit={submitHandler}>
        <input
          
          type="text"
          placeholder="Write your task..."
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className="border-b w-full text-xl sm:text-2xl font-thin truncate outline-0 focus:scale-95 px-2 py-2 mb-5 bg-gray-800"
        />
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
