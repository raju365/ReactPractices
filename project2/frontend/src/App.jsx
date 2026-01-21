import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/mainroutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProducts } from "./store/actions/productActions";
import Loader from "./components/Loader";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    !currentUser && dispatch(asyncCurrentUser());
  }, [currentUser]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
    
  }, [products]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-svh bg-gray-50 text-gray-900 font-thin">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
