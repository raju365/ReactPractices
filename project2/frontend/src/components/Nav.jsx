import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log("Navbar user:", user);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600"
      : "text-gray-600 hover:text-gray-900 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">
          Shop<span className="text-indigo-600">X</span>
        </h1>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
          {user ? (
            <>
              <NavLink to="/admin/create-product" className={linkClass}>
                Create Product
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
