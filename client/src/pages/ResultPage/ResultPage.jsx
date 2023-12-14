// Import necessary dependencies and components
import Header from "./components/Header.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import PaginationControls from "./components/PaginationControls.jsx";
import SimilarProperty from "./components/SimilarProperty.jsx";
import { useRouteLoaderData } from "react-router-dom";
import PropertyCard from "./components/PropertyCard";
import { filterData } from "../../Utils/filteringHandler.js";
import { useFilters } from "../../Utils/contexts/FilterManagementContext";
import { useEffect, useState } from "react";
import { usePagination } from "../../Utils/paginationUtils.js"; // Import the pagination utility

// ResultPage component to display filtered properties with pagination
const ResultPage = () => {
  // State to store filtered properties
  const [propertiesToDisplay, setPropertiesToDisplay] = useState([]);

  // Fetch route loader data and filters using custom hooks
  const data = useRouteLoaderData("root");
  console.log(data);
  const { filters, updateFilters } = useFilters();

  // UseEffect to filter data based on filters and update propertiesToDisplay
  useEffect(() => {
    const filteredData = filterData(data, filters);
    setPropertiesToDisplay(filteredData);
  }, [data, filters, updateFilters]);

  // Use the pagination utility to manage pagination logic
  const { currentPage, currentItems, pageNumbers, handleClick, scrollToTop } =
    usePagination(propertiesToDisplay);

  // Return JSX to render the component
  return (
    <div className="flex justify-center items-center mt-10 w-full">
      <div>
        {/* Header */}
        <Header />
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
