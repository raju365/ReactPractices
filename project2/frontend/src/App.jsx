import { useEffect } from "react";
import axios from "./api/axiosconfig";

const App = () => {
  const getProducts = async () => {
    try {
      const res =  axios.get('/products');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div>App</div>
  )
}

export default App