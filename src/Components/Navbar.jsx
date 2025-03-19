import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons pour le menu burger

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-5 px-6 sm:px-10 lg:px-20 text-gray-300 relative z-50">
      {/* Logo */}
      <h2 className="text-2xl font-bold">Crypto Checker</h2>

      {/* Desktop Navlinks */}
      <ul className="hidden md:flex gap-8 lg:gap-12 list-none">
        <li className="cursor-pointer hover:text-white transition">Home</li>
        <li className="cursor-pointer hover:text-white transition">Features</li>
        <li className="cursor-pointer hover:text-white transition">Pricing</li>
        <li className="cursor-pointer hover:text-white transition">Blog</li>
      </ul>

      {/* Sign Up Button */}
      <button className="hidden md:flex items-center px-6 py-2 font-medium text-gray-900 bg-white rounded-full hover:bg-blue-400 transition">
        Sign Up
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-[#1a0636] p-6 shadow-lg transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="text-3xl text-white absolute top-5 right-6"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>
        <ul className="flex flex-col items-center gap-6 mt-16 text-lg">
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </li>
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </li>
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </li>
          <button className="mt-4 px-6 py-2 font-medium text-gray-900 bg-white rounded-full hover:bg-blue-400 transition">
            Sign Up
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
