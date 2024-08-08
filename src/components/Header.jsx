import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-6 bg-neutral-100 shadow fixed w-full">
      {/* logo */}
      <Link
        to={"/"}
        className="uppercase text-blue-600 font-extrabold text-2xl"
      >
        Genre<span className="text-red-600 text-3xl">fy</span>
      </Link>

      {/* nav  links */}
    </div>
  );
};

export default Header;
