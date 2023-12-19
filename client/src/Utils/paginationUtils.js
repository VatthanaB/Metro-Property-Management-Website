import { useState } from "react";

// Custom hook for pagination
export const usePagination = (data, itemsPerPage = 3) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate indices of first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get current items and total pages
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Generate page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  // Update current page on click
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  // Scroll to top of the page
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return { currentPage, currentItems, pageNumbers, handleClick, scrollToTop };
};

// Calculate displayed page numbers
export const calculateDisplayedPageNumbers = (currentPage, allPageNumbers) => {
  const maxDisplayedPages = 4;
  const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2);

  // If total pages <= max displayed pages, return all page numbers
  if (allPageNumbers.length <= maxDisplayedPages) return allPageNumbers;

  // Calculate start and end page numbers
  let startPage = Math.max(currentPage - halfMaxDisplayedPages, 1);
  let endPage = Math.min(
    startPage + maxDisplayedPages - 1,
    allPageNumbers.length
  );

  // Adjust start page if necessary
  if (endPage - startPage + 1 < maxDisplayedPages)
    startPage = Math.max(endPage - maxDisplayedPages + 1, 1);

  // Return displayed page numbers
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );
};
