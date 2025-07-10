// src/layout/MainLayout.jsx
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice"; // your logout action

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const dashboardPath =
    user?.role === "admin"
      ? "/admin/dashboard"
      : user?.role === "agent"
      ? "/agent/parcels"
      : "/customer/book";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">
            <Link to="/">📦 Courier System</Link>
          </h1>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>

            {!user ? (
              <>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
                <Link to="/register" className="hover:underline">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to={dashboardPath} className="hover:underline">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:underline text-sm"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-700">
            <Link to="/" onClick={toggleMenu} className="block hover:underline">
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block hover:underline"
            >
              About
            </Link>

            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="block hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={toggleMenu}
                  className="block hover:underline"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={dashboardPath}
                  onClick={toggleMenu}
                  className="block hover:underline"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block hover:underline"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </header>

      <main className="flex-1 p-4 container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
