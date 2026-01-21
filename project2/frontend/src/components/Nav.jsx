import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../store/actions/userActions";
import { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const [menuOpen, setMenuOpen] = useState(false);

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    setMenuOpen(false);
    navigate("/");
  };
  const cartCount = currentUser?.cart?.reduce(
  (total, item) => total + item.quantity,
  0
) || 0;


  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-gray-900 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">
          Shop<span className="text-indigo-600">X</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>

          {currentUser && currentUser.isAdmin && (
            <NavLink to="/admin/create-product" className={linkClass}>
              Create Product
            </NavLink>
          )}

          {currentUser && (
            <>
              <NavLink to="/admin/user-profile" className={linkClass}>
                Settings
              </NavLink>
              <NavLink
                to="/cart"
                className="relative flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
              >
                {/* Cart Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.5l1.35 8.1a2.25 2.25 0 002.25 1.9h9.3a2.25 2.25 0 002.2-1.75l1.2-6.75H6"
                  />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                </svg>

                <span className="font-medium">Cart</span>

                {/* Badge */}
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-[2px] rounded-full">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </>
          )}

          {currentUser ? (
            <button
              onClick={LogoutHandler}
              className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-[3px] w-6 bg-gray-900 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-[3px] w-6 bg-gray-900 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-[3px] w-6 bg-gray-900 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 absolute w-full left-0 transition-all duration-300 overflow-hidden ${
          menuOpen ? "h-[300px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-sm">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>

          {currentUser && currentUser.isAdmin && (
            <NavLink
              to="/admin/create-product"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Create Product
            </NavLink>
          )}

          {currentUser && (
            <>
              <NavLink
                to="/admin/user-profile"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                Settings
              </NavLink>
              <NavLink
                to="/cart"
                className="flex items-center justify-between text-gray-700 hover:text-gray-900 transition"
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex items-center gap-2">🛒 Cart</span>

                {cartCount > 0 && (
                  <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-[2px] rounded-full">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </>
          )}

          {currentUser ? (
            <button
              onClick={LogoutHandler}
              className="px-4 py-2 w-fit rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 w-fit rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
