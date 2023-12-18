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
  // useState is a Hook that lets you add React state to function components
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the last and first item on the current page
  // This is done by multiplying the current page by the number of items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  // The index of the first item is the index of the last item minus the number of items per page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Extract the items for the current page
  // This is done by slicing the data array from the index of the first item to the index of the last item
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  // This is done by dividing the total number of items by the number of items per page and rounding up to the nearest whole number
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Generate an array of page numbers from 1 to totalPages
  // This is done by creating an array of the specified length and filling it with the index plus one
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  /**
   * Handle click event on a page number, updating the current page.
   * @param {number} pageNumber - The clicked page number.
   */
  const handleClick = (pageNumber) => {
    // Update the current page state to the clicked page number
    setCurrentPage(pageNumber);
  };

  /**
   * Scroll to the top of the page with smooth behavior.
   */
  const scrollToTop = () => {
    // Use the window.scrollTo method to scroll to the top of the page
    // The behavior option set to "smooth" makes the transition smooth
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

/**
 * Function to calculate displayed page numbers
 * @param {number} currentPage - The current page number.
 * @param {Array} allPageNumbers - The array of all page numbers.
 * @returns {Array} - The array of displayed page numbers.
 */
export const calculateDisplayedPageNumbers = (currentPage, allPageNumbers) => {
  // Define the maximum number of pages to display
  const maxDisplayedPages = 4;
  // Calculate the half of the maximum displayed pages
  const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2);

  // If the total number of pages is less than or equal to the maximum displayed pages, return all page numbers
  if (allPageNumbers.length <= maxDisplayedPages) {
    return allPageNumbers;
  }

  // Calculate the start and end page numbers
  // The start page is the current page minus half of the maximum displayed pages, but not less than 1
  let startPage = Math.max(currentPage - halfMaxDisplayedPages, 1);
  // The end page is the start page plus the maximum displayed pages minus 1, but not more than the total number of pages
  let endPage = Math.min(
    startPage + maxDisplayedPages - 1,
    allPageNumbers.length
  );

  // If the difference between the end page and the start page plus 1 is less than the maximum displayed pages
  // Adjust the start page to be the end page minus the maximum displayed pages plus 1, but not less than 1
  if (endPage - startPage + 1 < maxDisplayedPages) {
    startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
  }

  // Return an array of displayed page numbers
  // This is done by creating an array of the specified length and filling it with the start page plus the index
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );
};
``;
