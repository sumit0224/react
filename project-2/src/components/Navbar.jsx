import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-white/20 border-b border-white/30 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Weather App
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-semibold text-gray-700">
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Contact
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            About
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/30 backdrop-blur-lg px-6 py-4 space-y-4 text-gray-700 font-semibold">
          <a href="#" className="block hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block hover:text-blue-500">
            Contact
          </a>
          <a href="#" className="block hover:text-blue-500">
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;