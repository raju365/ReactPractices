import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", isCompleted: false },
  ]);

  return (
    <div
      className="w-full min-h-screen bg-gray-800 text-white
    flex flex-col md:flex-row 
    p-4 md:p-6 
    gap-6 
    justify-center
    items-start "
    >
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
