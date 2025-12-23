import Navbar from "./components/Navbar"
import MainRoutes from "./routes/MainRoutes"

function App() {
  
  return (
    <div className="w-full min-h-screen text-white font-thin bg-gray-700 ">
     <Navbar/>
     <MainRoutes />
    </div>
  )
}

export default App
