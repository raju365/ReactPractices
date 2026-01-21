import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";

import ProductDetails from "../pages/ProductDetails";
import UserProfile from "../pages/user/UserProfile";
import PageNotFound from "../pages/PageNotFound";
import AuthWrapper from "./AuthWrapper";
import Cart from "../pages/Cart";
const mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default mainroutes;
