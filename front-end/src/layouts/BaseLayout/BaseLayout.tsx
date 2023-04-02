import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

interface IBaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: IBaseLayoutProps) => {

  return (
    <div className="w-full flex flex-col justify-start items-start overflow-x-hidden overflow-y-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default BaseLayout;
