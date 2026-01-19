import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../store/actions/userActions";
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  console.log("Navbar users:", currentUser);

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };
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
          {currentUser ? (
            <>
              {currentUser?.isAdmin && (
                <NavLink to="/admin/create-product" className={linkClass}>
                  Create Product
                </NavLink>
              )}
              <button
                onClick={LogoutHandler}
                className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
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
