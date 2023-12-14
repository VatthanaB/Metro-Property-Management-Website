// Import necessary dependencies and components
import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import Header from "./components/Header.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import PaginationControls from "./components/PaginationControls.jsx";
import SimilarProperty from "./components/SimilarProperty.jsx";
import PropertyCard from "./components/PropertyCard";
import { filterData } from "../../Utils/filteringHandler.js";
import { useFilters } from "../../Utils/contexts/FilterManagementContext";
import { usePagination } from "../../Utils/paginationUtils.js"; // Import the pagination utility

// ResultPage component to display filtered properties with pagination
const ResultPage = () => {
  // State to store filtered properties
  const [propertiesToDisplay, setPropertiesToDisplay] = useState([]);

  // Fetch route loader data and filters using custom hooks
  const data = useRouteLoaderData("root");
  const { filters, updateFilters } = useFilters();
  const [resultNumber, setResultNumber] = useState(0);

  // Handle sorting change
  const handleSortChange = (order) => {
    sortData(order);
  };

  // Sort data based on the specified order
  const sortData = (order) => {
    const sortedData = [...propertiesToDisplay].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setPropertiesToDisplay(sortedData);
  };

  // UseEffect to filter data based on filters and update propertiesToDisplay
  useEffect(() => {
    const filteredData = filterData(data, filters);
    setPropertiesToDisplay(filteredData);
    setResultNumber(filteredData.length);
  }, [data, filters, updateFilters]);

  // Use the pagination utility to manage pagination logic
  const { currentPage, currentItems, pageNumbers, handleClick, scrollToTop } =
    usePagination(propertiesToDisplay);

  // Return JSX to render the component
  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="w-3/4">
        {/* Header */}
        <Header onSortChange={handleSortChange} resultNumber={resultNumber} />

        {/* Display filtered properties */}
        <div className="flex flex-col space-y-5">
          {currentItems.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Similar property display */}
        <SimilarProperty data={data} />

        {/* Back to Top Button */}
        <BackToTopButton scrollToTop={scrollToTop} />

        {/* Pagination Numbers */}
        <PaginationControls
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

// Export the ResultPage component
export default ResultPage;
