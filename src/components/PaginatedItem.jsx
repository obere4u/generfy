import React from "react";
import MoviesList from "./MoviesList";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const PaginatedItems = ({
  items = [],
  page,
  itemsPerPage,
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
            <ReactPaginate
              previousLabel={
                <div className="flex items-center space-x-2">
                  <IconContext.Provider
                    value={{ color: "#B8C1CC", size: "36px" }}
                  >
                    <AiFillLeftCircle />
                  </IconContext.Provider>
                  <span className="sr-only">Previous</span>
                </div>
              }
              nextLabel={
                <div className="flex items-center space-x-2">
                  <span className="sr-only">Next</span>
                  <IconContext.Provider
                    value={{ color: "#B8C1CC", size: "36px" }}
                  >
                    <AiFillRightCircle />
                  </IconContext.Provider>
                </div>
              }
              breakLabel="..."
              pageCount={Math.ceil(totalPages)}
              pageRangeDisplayed={4}
              marginPagesDisplayed={2}
              onPageChange={({ selected }) => handlePageChange(selected + 1)}
              containerClassName="flex justify-center items-center space-x-8 mt-4 w-full"
              pageClassName="border border-gray-300 rounded-md px-2 h-10 w-10 flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
              pageLinkClassName="focus:outline-none"
              previousClassName={`border border-gray-300 rounded-md p-2 w-fit flex items-center justify-center text-center ${
                currentPage === 1
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-100 hover:text-neutral-700"
              }`}
              previousLinkClassName="focus:outline-none"
              nextClassName={`border border-gray-300 rounded-md p-2 w-fit flex items-center justify-center text-center ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-100 hover:text-neutral-700"
              }`}
              nextLinkClassName="focus:outline-none"
              breakClassName="border border-gray-300 rounded-md p-2 w-fit flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
              breakLinkClassName="focus:outline-none"
              activeClassName="bg-blue-500 text-white"
              disabledClassName="cursor-not-allowed opacity-50"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PaginatedItems;
