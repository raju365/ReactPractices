import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Product from "../components/Product"
import Service from "../components/Service"
import About from "../components/About"
import ProductDetails from "../components/ProductDetails"
import ServiceDetails from "../components/ServiceDetails"
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product" element={<Product />} />
        <Route path="/product/detail/:name" element={<ProductDetails />} />
       
        <Route path="/services" element={<Service/>} >
          <Route path="/services/detail" element={<ServiceDetails/>} />
        </Route>

        <Route path="/about" element={<About/>} />
      </Routes>
  )
}

export default MainRoutes