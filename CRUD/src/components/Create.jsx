import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const {setTodos, todos} = props;
  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleated: false,
    }
    setTodos([...todos, newTodo])
    
    settitle("");
  }
  return (
    <div className="">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-white tracking-wide drop-shadow-sm">
          Task Manager
        </h1>

        {/* Input Card */}
        <div className="bg-black/30 border border-white/10 rounded-2xl p-5 space-y-5 shadow-inner shadow-black/50">
          <form onSubmit={submitHandler}>
            {/* Input */}
            <input
              type="text"
              placeholder="Write your task..."
              onChange={(e) => settitle(e.target.value)}
              value={title}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500/70 shadow-lg shadow-black/40
                       transition-all duration-200"
            />

            {/* Add Button */}
            <button
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 
                       text-white font-semibold tracking-wide shadow-xl
                       hover:shadow-purple-500/40 hover:scale-[1.03] active:scale-[0.98]
                       transition-all duration-200"
            >
              Add Task
            </button>
          </form>
          <hr />
        </div>
    </div>
  )
}

export default Create