import Nav from "./components/Nav";
import Mainroutes from "./routes/mainroutes";

const App = () => {
  return (
    <div className="min-h-svh bg-gray-50 text-gray-900 font-thin">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
