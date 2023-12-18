// Importing form input components and Link from react-router-dom
import {
  LocationInput,
  TypeInput,
  PriceInput,
  BedroomInput,
  BathroomInput,
  ParkingInput,
  AmenititesInput,
  VicinityInput,
} from "./formButtons/FormInputs";
import { Link } from "react-router-dom";

// Functional component for the search form
const SearchForm = () => {
  return (
    // Form structure with flex layout and responsive styling
    <form className="felx-col md:flex justify-between p-5 md:p-0">
      {/* First column of form inputs */}
      <div className="flex-col items-start justify-start md:w-1/4">
        <LocationInput />
        <TypeInput />
        <PriceInput />
      </div>

      {/* Second column of form inputs */}
      <div className="flex-col items-start justify-start md:w-1/4">
        <BedroomInput />
        <BathroomInput />
        <ParkingInput />
      </div>

      {/* Third column of form inputs */}
      <div className="flex-col items-start justify-start md:w-1/4">
        <AmenititesInput />
        <VicinityInput />

        {/* Search button with a Link to the search results page */}
        <Link to={"/search/results"}>
          <button className="w-full border bg-red-500 text-white rounded-md h-10 mt-5 md:ml-5 ">
            Search
          </button>
        </Link>
      </div>
    </form>
  );
};

// Export the SearchForm component for use in other files
export default SearchForm;
