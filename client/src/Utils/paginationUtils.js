// paginationUtils.js

import { useState } from "react";

/**
 * Custom hook for handling pagination logic.
 * @param {Array} data - The array of items to be paginated.
 * @param {number} itemsPerPage - Number of items to display per page (default is 3).
 * @returns {Object} - Object containing pagination-related functions and data.
 */
export const usePagination = (data, itemsPerPage = 3) => {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the last and first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Extract the items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Generate an array of page numbers from 1 to totalPages
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  /**
   * Handle click event on a page number, updating the current page.
   * @param {number} pageNumber - The clicked page number.
   */
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /**
   * Scroll to the top of the page with smooth behavior.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Return an object containing pagination-related data and functions
  return {
    currentPage,
    currentItems,
    pageNumbers,
    handleClick,
    scrollToTop,
  };
};
