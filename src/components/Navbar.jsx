import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-gray-900 py-4">
      <a className="text-white text-3xl font-bold" href="/">
        <span className="text-yellow-600">S</span>ay
        <span className="text-yellow-600">G</span>ames
      </a>
    </nav>
  );
};

export default Navbar;
