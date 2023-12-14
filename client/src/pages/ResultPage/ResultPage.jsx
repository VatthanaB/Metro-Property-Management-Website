// ResultPage.js

import { useRouteLoaderData } from "react-router-dom";
import PropertyCard from "./components/PropertyCard";
import { filterData } from "../../Utils/filteringHandler.js";
import { useFilters } from "../../Utils/contexts/FilterManagementContext";
import { useEffect, useState } from "react";
import { usePagination } from "../../Utils/paginationUtils.js"; // Import the pagination utility

const ResultPage = () => {
  const [propertiesToDisplay, setPropertiesToDisplay] = useState([]);
  const data = useRouteLoaderData("root");
  const { filters, updateFilters } = useFilters();

  // UseEffect to filter data based on filters and update the propertiesToDisplay
  useEffect(() => {
    const filteredData = filterData(data, filters);
    setPropertiesToDisplay(filteredData);
  }, [data, filters, updateFilters]);

  console.log(propertiesToDisplay);

  // Use the pagination utility
  const { currentPage, currentItems, pageNumbers, handleClick, scrollToTop } =
    usePagination(propertiesToDisplay);

  return (
    <div className="flex justify-center items-center mt-10">
      <div>
        <h1 className="text-gray-500 text-lg ml-8 mb-10 ">
          Home Page {">"} Rental Properties {">"} Search Results
        </h1>
        <h1 className="text-gray-500 text-3xl ml-8 ">Browse Properties</h1>
        <div className="flex flex-col space-y-5">
          {currentItems.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        <button
          className="cursor-pointer px-4 py-2 mx-auto flex justify-center items-center text-white bg-gray-600 rounded-md mt-5 font-light"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
        <div className="flex justify-center mt-5">
          {pageNumbers.map((number) => (
            <div
              key={number}
              className={`cursor-pointer px-4 py-2 ${
                number === currentPage ? "text-red-500" : "text-gray-500"
              }`}
              onClick={() => handleClick(number)}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
