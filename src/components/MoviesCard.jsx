import React from "react";
import forwardArrow from "/forwardArrow.svg";
import { Link } from "react-router-dom";

const MoviesCard = ({ id, image, title, description, date }) => {
  return (
    <Link
      to={`/movies/${id}`}
      className="group bg-neutral-200 border border-gray-200 rounded-lg shadow hover:shadow-neutral-400 hover:scale-[1.03] transition-all duration-300 ease-in-out h-full flex flex-col overflow-hidden"
    >
      {/* Image container */}
      <div className="w-full overflow-hidden">
        <img
          className="rounded-t-lg w-full h-[150px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
          src={image}
          alt={title}
        />
      </div>

      {/* Content container */}
      <div className="flex flex-col p-5 flex-grow">
        <div className="flex">
          <span className="mr-2 text-lg text-neutral-700 font-semibold">
            Title:
          </span>
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>

        <div className="flex items-center">
          <span className="mr-2 font-semibold text-lg text-neutral-700">
            Desc:
          </span>
          <p className="text-gray-500 dark:text-gray-400 truncate">
            {description}
          </p>
        </div>

        <div className="flex items-center mb-6">
          <span className="mr-2 font-semibold text-lg text-neutral-700">
            Date:
          </span>
          <span className="text-gray-500 dark:text-gray-400 ">{date}</span>
        </div>

        {/* Arrow container */}
        <div className="mt-auto ml-auto w-fit flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg group-hover:bg-blue-800 group-hover:animate-pulse focus:ring-4 focus:outline-none focus:ring-blue-300">
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
