import { useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Button from "../Button/Button";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userDetails } = useContext(AppContext);

  if (location.pathname === "/signup" || location.pathname === "/login")
    return null;

  return (
    <nav className="fixed top-0 w-full h-20 px-5 md:px-5 py-2 flex justify-between items-center bg-light">
      <Link to={`/`} className="flex justify-center items-center space-x-2">
        <span className="w-10 h-10 rounded-full bg-black"></span>
        <h1 className="font-medium text-lg text-black">Anurag Kochar </h1>
      </Link>

      {userDetails?._id && (
        <Link
          to={`profile`}
          className="font-medium text-lg text-black cursor-pointer"
        >
          {" "}
          Profile{" "}
        </Link>
      )}

      {!userDetails?._id && (
        <div className="flex justify-center items-center space-x-2">
          <Button onClick={() => navigate("/signup")}> Sign Up </Button>
          <Button onClick={() => navigate("/login")}> Log in </Button>
        </div>
      )}

      {/* <button onClick={() => console.log(location)}>location</button> */}

      <div className="absolute w-full h-2  bg-gradient-to-r from-indigo-500 to-fuchsia-300 bottom-0 left-0 right-0"></div>
    </nav>
  );
};

export default Navbar;
