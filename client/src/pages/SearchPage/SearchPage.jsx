import SearchForm from "./components/SearchForm";
import { useRouteLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import PropertyCard from "../ResultPage/components/PropertyCardCa";
import SimilarProperty from "../ResultPage/components/SimilarProperty";
import BackToTopButton from "../ResultPage/components/BackToTopButton";
import PaginationControls from "../ResultPage/components/PaginationControls";
import { usePagination } from "../../Utils/paginationUtils.js";
import { Link } from "react-router-dom";
const SearchPage = () => {
  const [propertiesToDisplay, setPropertiesToDisplay] = useState([]);

  // Fetch route loader data and filters using useRouteLoaderData hook
  const data = useRouteLoaderData("root");

  useEffect(() => {
    setPropertiesToDisplay(data);
  }, [data]);

  // Use the pagination utility to manage pagination logic
  const { currentPage, currentItems, pageNumbers, handleClick, scrollToTop } =
    usePagination(propertiesToDisplay);

  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="w-full md:w-3/4">
        <h1 className="text-gray-500 text-base md:text-lg pl-8 mb-10 ">
          <Link to="/">Home Page</Link> {">"} Rental Properties
        </h1>
        <SearchForm />
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

export default SearchPage;
