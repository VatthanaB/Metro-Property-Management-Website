import { createContext, useContext, useState } from "react";

// Create a context to manage filters
const FiltersContext = createContext();

// Provider component to wrap the application and provide filter context
// eslint-disable-next-line react/prop-types
export const FiltersProvider = ({ children }) => {
  // Initial state for filters
  // const initialFilters = {
  //   type: "",
  //   location: "",
  //   bedrooms: null,
  //   bathrooms: null,
  //   minPrice: null,
  //   maxPrice: null,
  //   ameneties: [],
  //   parking: null,
  //   vicinity: [],
  // };
  const initialFilters = {
    type: [],
    location: [],
    bedrooms: null,
    bathrooms: null,
    minPrice: null,
    maxPrice: null,
    ameneties: ["Garage"],
    parking: null,
    vicinity: ["Gym", "School District"],
  };
  // const initialFilters = {
  //   type: "",
  //   location: "",
  //   bedrooms: 2,
  //   bathrooms: 2,
  //   minPrice: 300,
  //   maxPrice: 500,
  //   ameneties: ["Pet Friendly"],
  //   parking: null,
  //   vicinity: [],
  // };

  // State to manage filters
  const [filters, setFilters] = useState(initialFilters);

  // Function to update filters
  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  // Provide the filter context to the children components
  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

// Hook to conveniently access the filter context
// eslint-disable-next-line react-refresh/only-export-components
export const useFilters = () => {
  return useContext(FiltersContext);
};
