import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-5 bg-gray-700 px-[10%]">
      <NavLink className={(e) => (e.isActive ? "text-green-600" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-green-600" : "")}
        to="/product"
      >
        Product
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-green-600" : "")}
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-green-600" : "")}
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default Nav;
