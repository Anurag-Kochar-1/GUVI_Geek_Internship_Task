import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const HomePage = () => {
const navigate = useNavigate();
const { userDetails, setUserDetails } = useContext(AppContext);
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center mt-[5rem] overflow-x-hidden overflow-y-auto space-y-6">
      <div className="flex items-center justify-center space-x-2">
        <h1 className="text-7xl text-center font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-300 bg-clip-text text-transparent italic" onClick={() =>{ 
          console.log(userDetails)
        }}>
          Welcome
        </h1>
        <span className="text-7xl text-center font-bold">😊</span>
      </div>
      {userDetails._id && <Link to={`/profile`} className={"text-xl text-center font-bold italic"}> Complete your profile </Link>}
    </main>
  );
};

export default HomePage;



