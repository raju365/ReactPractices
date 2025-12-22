import Navbar from "./components/Navbar"
import MainRoutes from "./routes/MainRoutes"

function App() {
  
  return (
    <div className="w-screen h-screen text-white font-thin bg-gray-700 py-8 px-[10%]">
     <Navbar/>
     <MainRoutes />
    </div>
  )
}

export default App
