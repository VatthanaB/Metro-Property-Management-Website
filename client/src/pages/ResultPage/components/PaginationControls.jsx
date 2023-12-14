/* eslint-disable react/prop-types */
// PaginationControls.js

import { calculateDisplayedPageNumbers } from "../../../Utils/paginationUtils.js";

// eslint-disable-next-line react/prop-types
const PaginationControls = ({ currentPage, pageNumbers, handleClick }) => {
  const displayedPageNumbers = calculateDisplayedPageNumbers(
    currentPage,
    pageNumbers
  );

  return (
    <div className="flex justify-center mt-5">
      {/* Left arrow */}
      {currentPage > 1 && (
        <div
          className="cursor-pointer px-4 py-2 transition duration-300 ease-in-out text-gray-500 hover:bg-gray-100"
          onClick={() => handleClick(currentPage - 1)}
        >
          {"<"}
        </div>
      )}
      {/* Page numbers */}
      {displayedPageNumbers.map((number) => (
        <div
          key={number}
          className={`cursor-pointer px-4 py-2 transition duration-300 ease-in-out ${
            number === currentPage ? "text-red-500 " : "text-gray-500 "
          }`}
          onClick={() => {
            handleClick(number);
          }}
        >
          {number}
        </div>
      ))}
      {/* Right arrow */}

      {currentPage < pageNumbers.length && (
        <div
          className="cursor-pointer px-4 py-2 transition duration-300 ease-in-out text-gray-500 hover:bg-gray-100"
          onClick={() => handleClick(currentPage + 1)}
        >
          {">"}
        </div>
      )}
    </div>
  );
};

export default PaginationControls;
