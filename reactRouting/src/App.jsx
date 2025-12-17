
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <Nav/>
      <MainRoutes/>
    </div>
  );
};

export default App;
