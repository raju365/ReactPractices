import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../store/actions/userActions";
import { useState } from "react";
import { motion } from "motion/react";

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

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold relative"
      : "text-gray-700 hover:text-gray-900 transition";

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.5 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🟣 Logo Animation */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold text-gray-900"
        >
          Shop<span className="text-indigo-600">X</span>
        </motion.h1>

        {/* 🟦 Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <motion.div variants={menuVariants} initial="hidden" animate="visible">
            <NavLink to="/" className={linkClass}>Home</NavLink>
          </motion.div>

          <motion.div variants={menuVariants} initial="hidden" animate="visible">
            <NavLink to="/products" className={linkClass}>Products</NavLink>
          </motion.div>

          {currentUser?.isAdmin && (
            <motion.div variants={menuVariants} initial="hidden" animate="visible">
              <NavLink to="/admin/create-product" className={linkClass}>
                Create Product
              </NavLink>
            </motion.div>
          )}

          {currentUser && (
            <>
              <motion.div variants={menuVariants} initial="hidden" animate="visible">
                <NavLink to="/admin/user-profile" className={linkClass}>
                  Settings
                </NavLink>
              </motion.div>

              <motion.div variants={menuVariants} initial="hidden" animate="visible">
                <NavLink to="/cart" className={linkClass}>
                  Cart
                </NavLink>
              </motion.div>
            </>
          )}

          {currentUser ? (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={LogoutHandler}
              className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </motion.button>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* 🟡 Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1"
          >
            <motion.span
              animate={
                menuOpen ? "open" : "closed"
              }
              variants={{
                open: { rotate: 45, y: 6 },
                closed: { rotate: 0, y: 0 },
              }}
              className="w-6 h-[3px] bg-gray-900"
            />
            <motion.span
              animate={
                menuOpen ? { opacity: 0 } : { opacity: 1 }
              }
              className="w-6 h-[3px] bg-gray-900"
            />
            <motion.span
              animate={
                menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-[3px] bg-gray-900"
            />
          </button>
        </div>
      </div>

      {/* 🟢 Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-white/95 border-t overflow-hidden"
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkClass} onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>

          {currentUser?.isAdmin && (
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
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </NavLink>
            </>
          )}

          {currentUser ? (
            <button
              onClick={LogoutHandler}
              className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition w-fit"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
