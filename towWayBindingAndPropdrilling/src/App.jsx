import { useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
   const [users, setUsers] = useState([
    { name: "John", age: 24 },
    { name: "Doe", age: 30 },
    { name: "Smith", age: 40 },
  ]);
  return (
    <>
      <Create  />
      <hr />
      <Read users={users}  />
    </>
  );
}

export default App;
