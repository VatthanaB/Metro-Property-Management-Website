export const filterData = (data, filters) => {
  const filterArrays = (propertyAmenities, filterAmenities) => {
    if (filterAmenities.length === 0) {
      return true; // No filter, all properties pass
    }

    return filterAmenities.every((amenity) =>
      propertyAmenities.includes(amenity)
    );
  };

  const filteredData = data.filter((property) => {
    return (
      filterArrays(property.type, property.Type) &&
      (filters.location === "" || property.location === filters.location) &&
      (filters.bedrooms === null || property.bedrooms >= filters.bedrooms) &&
      (filters.bathrooms === null || property.bathrooms >= filters.bathrooms) &&
      (filters.minPrice === null || property.price >= filters.minPrice) &&
      (filters.maxPrice === null || property.price <= filters.maxPrice) &&
      (filters.parking === null || property.parking === filters.parking) &&
      filterArrays(property.ameneties, filters.ameneties) &&
      filterArrays(property.vicinity, filters.vicinity)
    );
  });

  return filteredData;
};
