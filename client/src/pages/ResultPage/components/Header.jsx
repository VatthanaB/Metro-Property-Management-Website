// Import the SortComponent and useFilters from the specified paths.
import SortComponent from "./SortComponent";
import { useFilters } from "../../../Utils/contexts/FilterManagementContext";

// Define the Header component.
// eslint-disable-next-line react/prop-types
const Header = ({ onSortChange, resultNumber }) => {
  // Use the useFilters context to access the filters.
  const { filters } = useFilters();

  // Define options for amenities and vicinity.
  const options = {
    amenities: [
      "Pet Friendly",
      "Allow Smoking",
      "Furnished",
      "MultiStory",
      "Garage",
      "Central Heating",
      "Swimming Pool",
    ],
    vicinity: [
      "Public Transport",
      "School District",
      "Parks",
      "Gym",
      "Childcare",
      "Restaurant",
      "Shops",
    ],
  };

  // Function to check if a filter is applied.
  const isFilterApplied = (filterType, filterValue) => {
    if (Array.isArray(filters[filterType])) {
      return filters[filterType].includes(filterValue);
    } else {
      return filters[filterType] === filterValue;
    }
  };

  // Render the Header component.
  return (
    <>
      {/* Displaying a heading indicating the current page hierarchy. */}
      <h1 className="text-gray-500 text-lg ml-8 mb-10 ">
        Home Page {">"} Rental Properties {">"} Search Results
      </h1>

      {/* Displaying filter options for amenities and vicinity. */}
      <div className="pl-5 space-y-4 text-gray-500 font-light mb-10 text-base">
        {/* Amenities section */}
        <div className="flex space-x-10 justify-start items-center">
          <p className="">Amenities</p>
          <ul className="flex space-x-3 font-extralight">
            {/* Mapping over amenity options to create filter buttons. */}
            {options.amenities.map((amenity, index) => (
              <li
                className={`rounded-3xl text-sm px-3 py-1 border border-gray-300 self-center ${
                  // Applying background color based on whether the filter is applied.
                  isFilterApplied("ameneties", amenity)
                    ? "bg-red-500 text-white"
                    : "bg-gray-100"
                }`}
                key={index}
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Vicinity section */}
        <div className="flex space-x-10 justify-start items-center">
          <p className="">Vicinity</p>
          <ul className="flex space-x-3 font-extralight">
            {/* Mapping over vicinity options to create filter buttons. */}
            {options.vicinity.map((vicinity, index) => (
              <li
                className={`rounded-3xl text-sm px-2 py-1 border border-gray-300 self-center  ${
                  // Applying background color based on whether the filter is applied.
                  isFilterApplied("vicinity", vicinity)
                    ? "bg-red-500 text-white"
                    : "bg-gray-100"
                }`}
                key={index}
              >
                {vicinity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional information and controls for sorting and result count. */}
      <div className="flex justify-between pl-10 mb-8">
        {/* Sorting component with the ability to change sorting. */}
        <SortComponent onSortChange={onSortChange} />
        {/* Displaying the count of results. */}
        <p className="text-gray-600 text-lg font-light">
          Showing {resultNumber} results
        </p>
      </div>

      {/* Horizontal line as a separator. */}
      <hr className="border-1 border-gray-300 w-full my-2" />

      {/* Heading for the "Browse Properties" section. */}
      <h1 className="text-gray-500 text-3xl ml-8 ">Browse Properties</h1>
    </>
  );
};

// Export the Header component.
export default Header;
