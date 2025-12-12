import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  
  return (
    <div
      className="w-full min-h-screen bg-gray-800 text-white
    flex flex-col md:flex-row 
    p-4 md:p-6 
    gap-6 
    justify-center
    items-start "
    >
      <Create />
      <Read />
    </div>
  );
}

export default App;
