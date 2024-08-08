import React from "react";
import forwardArrow from "/forwardArrow.svg";
import { Link } from "react-router-dom";

const MoviesCard = ({ image, title, description, date }) => {
  return (
    <Link className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-md">
      <div className="w-full">
        <img
          className="rounded-t-lg w-full h-[200px] "
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[50px] truncate">
          {description}
        </p>
        <p className="text-gray-500 dark:text-gray-400">{date}</p>
        <div
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group-hover:"
        >
          <img
            src={forwardArrow}
            alt="Forward Arrow"
            className="w-4 h-4 group-hover:w-8"
          />
        </div>
      </div>
    </Link>
  );
};

export default MoviesCard;
