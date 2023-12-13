import { useRouteLoaderData } from "react-router-dom";
import PropertyCard from "./components/PropertyCard";
import { filterData } from "../../Utils/filtering";
import { useFilters } from "../../Utils/contexts/FilterManagementContext";
import { useEffect, useState } from "react";

const ResultPage = () => {
  const [propertiesToDisplay, setPropertiesToDisplay] = useState([]);
  const data = useRouteLoaderData("root");
  const { filters, updateFilters } = useFilters();

  console.log(filters.vicinity);
  console.log(filters.amenities);
  useEffect(() => {
    updateFilters({
      type: "Apartment",
      vicinity: ["Public Transport"],
      ameneties: ["Pet Friendly", "Garage"],
    });
  }, []);
  useEffect(() => {
    const filteredData = filterData(data, filters);
    console.log(filters);
    setPropertiesToDisplay(filteredData);
  }, [updateFilters]);

  console.log(propertiesToDisplay);

  return (
    <div className="flex flex-col items-center justify-center  px-10">
      {propertiesToDisplay.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};

export default ResultPage;
