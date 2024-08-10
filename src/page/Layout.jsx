import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <div className=" px-6 max-w-screen-2xl  mt-24">
        {children}
      </div>
    </div>
  );
};

export default Layout;
