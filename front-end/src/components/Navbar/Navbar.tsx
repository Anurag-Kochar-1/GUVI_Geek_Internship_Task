import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  if (
    window?.location?.pathname === "/signup" ||
    window?.location?.pathname === "/login"
  )
    return null;

  return (
    <nav className="w-full h-20 px-5 md:px-5 py-2 relative flex justify-between items-center bg-light">
      <Link to={`/`} className="flex justify-center items-center space-x-2">
        <span className="w-10 h-10 rounded-full bg-black"></span>
        <h1 className="font-medium text-lg text-black">Anurag Kochar </h1>
      </Link>
      <Link to={`profile`} className="font-medium text-lg text-black cursor-pointer"> Profile </Link>

      <div className="absolute w-full h-2  bg-gradient-to-r from-indigo-500 to-fuchsia-300 bottom-0 left-0 right-0"></div>
    </nav>
  );
};

export default Navbar;
