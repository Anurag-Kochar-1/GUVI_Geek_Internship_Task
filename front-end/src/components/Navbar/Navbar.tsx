import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // const router = 

    if(window?.location?.pathname === "/signup" || window?.location?.pathname === "/login") return null

  return (
    <nav className="w-full h-20 px-5 md:px-5 py-2 relative flex justify-end items-center bg-light">
      <div className="absolute w-full h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-300 bottom-0 left-0 right-0"></div>
      <Link to={`profile`}> Profile </Link>
      {/* <button onClick={() => {
        console.log(window.location)
      }}> Log  </button> */}
    </nav>
  );
};

export default Navbar;
