import React from "react";
import MoviesList from "./MoviesList";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const PaginatedItems = ({
  items = [],
  currentPage,
  handlePageChange,
  totalPages,
}) => {
  return (
    <div>
      {items.length === 0 ? (
        <p className="text-center text-gray-500 capitalize">
          Select a genre to see movies
        </p>
      ) : (
        <>
          <MoviesList list={items} />
          <div className="w-full border bg-neutral-700 text-white p-4 mt-4">
            <div className="relative">
              <ReactPaginate
                previousLabel={
                  <div className="flex items-center space-x-2 absolute left-1/2 transform -translate-x-full translate-y-4  cursor-pointer">
                    <IconContext.Provider
                      value={{ color: "#B8C1CC", size: "36px" }}
                    >
                      <AiFillLeftCircle />
                    </IconContext.Provider>
                    <span className="sr-only">Previous</span>
                  </div>
                }
                nextLabel={
                  <div className="flex items-center space-x-2 absolute right-1/2 transform translate-x-full translate-y-4 cursor-pointer">
                    <span className="sr-only">Next</span>
                    <IconContext.Provider
                      value={{ color: "#B8C1CC", size: "36px" }}
                    >
                      <AiFillRightCircle />
                    </IconContext.Provider>
                  </div>
                }
                breakLabel="..."
                pageCount={Math.ceil(totalPages / 20)}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                onPageChange={({ selected }) => handlePageChange(selected + 1)}
                containerClassName="flex justify-center items-center mt-4 w-full h-24"
                pageClassName="border border-gray-300 rounded-md -mt-12 px-2 mx-1 flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
                pageLinkClassName="focus:outline-none p-1 "
                previousClassName={`absolute left-10 transform -translate-y-8 md:relative md:translate-y-0 cursor-pointer`}
                previousLinkClassName="focus:outline-none"
                nextClassName={`absolute right-10 transform -translate-y-8 md:relative md:translate-y-0 cursor-pointer`}
                nextLinkClassName="focus:outline-none"
                breakClassName="border border-gray-300 rounded-md p-1 w-fit -mt-12 flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
                breakLinkClassName="focus:outline-none "
                activeClassName="bg-blue-500 text-white"
                disabledClassName="cursor-not-allowed opacity-50"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaginatedItems;
