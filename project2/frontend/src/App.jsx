import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/mainroutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, []);
  return (
    <div className="min-h-svh bg-gray-50 text-gray-900 font-thin">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
