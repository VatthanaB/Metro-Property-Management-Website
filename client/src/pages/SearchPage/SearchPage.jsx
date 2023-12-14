import SearchForm from "./components/SearchForm";
import { useRouteLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import PropertyCard from "../ResultPage/components/PropertyCard";
import SimilarProperty from "../ResultPage/components/SimilarProperty";
import BackToTopButton from "../ResultPage/components/BackToTopButton";
import PaginationControls from "../ResultPage/components/PaginationControls";
import { usePagination } from "../../Utils/paginationUtils.js";

const SearchPage = () => {
  const [propertiesToDisplay, setPropertiesToDisplay] = useState([]);

  const data = useRouteLoaderData("root");
  const [resultNumber, setResultNumber] = useState(0);

  useEffect(() => {
    setPropertiesToDisplay(data);
    setResultNumber(data.length);
  }, [data]);

  // Use the pagination utility to manage pagination logic
  const { currentPage, currentItems, pageNumbers, handleClick, scrollToTop } =
    usePagination(propertiesToDisplay);

  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="w-3/4">
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
