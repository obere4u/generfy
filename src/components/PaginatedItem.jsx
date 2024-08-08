import { useState } from "react";
import ReactPaginate from "react-paginate";
import MoviesList from "./MoviesList";

const PaginatedItems = ({ items = [], itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <MoviesList list={currentItems} />
      <div className="w-full border bg-neutral-700 text-white p-4 mt-4">
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          pageCount={pageCount}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center items-center space-x-2 mt-4 w-full"
          pageClassName="border border-gray-300 rounded-md h-10 w-10 flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
          pageLinkClassName="focus:outline-none"
          previousClassName="border border-gray-300 rounded-md p-2 w-fit flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
          previousLinkClassName="focus:outline-none"
          nextClassName="border border-gray-300 rounded-md p-2 w-fit flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
          nextLinkClassName="focus:outline-none"
          breakClassName="border border-gray-300 rounded-md p-2 w-fit flex items-center justify-center text-center hover:bg-gray-100 hover:text-neutral-700"
          breakLinkClassName="focus:outline-none"
          activeClassName="bg-blue-500 text-white"
        />
      </div>
    </div>
  );
};

export default PaginatedItems;
