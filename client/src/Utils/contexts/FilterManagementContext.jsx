import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const initialFilters = {
    type: "",
    location: "",
    bedrooms: null,
    bathrooms: null,
    minPrice: null,
    maxPrice: null,
    ameneties: [],
    parking: null,
    vicinity: [],
  };

  const [filters, setFilters] = useState(initialFilters);

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(FiltersContext);
};
