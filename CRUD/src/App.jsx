import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Learn React", isCompleted: false},
 

  ]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black 
    flex flex-col items-center gap-6 p-3">
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
