import React from "react";

const MovieCardSkeleton = ({ count }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="w-full h-[200px] bg-gray-300 dark:bg-gray-600 rounded-t-lg"></div>
          <div className="p-5">
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3 w-3/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-3"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCardSkeleton;
