import { useRouteLoaderData, useLocation } from "react-router-dom";
import PropertyCard from "../../UI/PropertyCard";

const ResultPage = () => {
  const data = useRouteLoaderData("root");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const filters = {
    Type: queryParams.get("Type") || "",
    location: queryParams.get("location") || "",
    bedrooms: parseInt(queryParams.get("bedrooms")) || null,
    bathrooms: parseInt(queryParams.get("bathrooms")) || null,
    minPrice: parseInt(queryParams.get("minPrice")) || null,
    maxPrice: parseInt(queryParams.get("maxPrice")) || null,
    amenities:
      queryParams.getAll("amenities").flatMap((entry) => entry.split("=")) ||
      [],
    parking: queryParams.get("parking") || "",
    vicinity:
      queryParams.getAll("vicinity").flatMap((entry) => entry.split("=")) || [],
  };
  console.log(filters.vicinity);
  console.log(filters.amenities);

  const filteredData = data.filter((property) => {
    const filterArrays = (propertyAmenities, filterAmenities) => {
      if (filterAmenities.length === 0) {
        return true; // No filter, all properties pass
      }

      return filterAmenities.every((amenity) =>
        propertyAmenities.includes(amenity)
      );
    };
    return (
      (filters.Type === "" || property.type === filters.Type) &&
      (filters.location === "" || property.location === filters.location) &&
      (filters.bedrooms === null || property.bedrooms >= filters.bedrooms) &&
      (filters.bathrooms === null || property.bathrooms >= filters.bathrooms) &&
      (filters.minPrice === null || property.price >= filters.minPrice) &&
      (filters.maxPrice === null || property.price <= filters.maxPrice) &&
      (filters.parking === "" || property.parking === filters.parking) &&
      filterArrays(property.ameneties, filters.amenities) &&
      filterArrays(property.vicinity, filters.vicinity)
    );
  });
  console.log(filteredData);

  return (
    <div className="flex flex-col items-center justify-center  px-10">
      {filteredData.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};

export default ResultPage;
