import { useState } from "react";
import { NavLink ,Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className=" w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="Logo" className="h-10" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
           {props.data}
          </h2>
        </div>

        {/* Menu (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className="hover:text-indigo-500 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className="hover:text-indigo-500 transition">
              Services
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/login">

          <button className="px-4 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition">
            Login
          </button>
          </NavLink>
          
          <NavLink to="/signup">

          <button className="px-4 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition">
            Sign Up
          </button>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-3xl cursor-pointer text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col text-center py-4 text-gray-700 font-medium space-y-3">
            <li>
              <a href="#" className="hover:text-indigo-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500">
                Contact
              </a>
            </li>
            <div className="flex justify-center gap-3 mt-4">
              <button className="px-4 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                Login
              </button>
              <button className="px-4 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>

    <Outlet/>

    <Footer/>
</>
  );
};

export default Navbar;
