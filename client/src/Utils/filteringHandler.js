export const filterData = (data, filters) => {
  /**
   * Helper function to check if property amenities match filter amenities.
   * @param {Array} propertyAmenities - Amenities of the property.
   * @param {Array} filterAmenities - Amenities specified in the filter.
   * @returns {boolean} - True if property passes the filter, false otherwise.
   */
  const filterArraysAll = (propertyAmenities, filterAmenities) => {
    if (filterAmenities.length === 0) {
      return true; // No filter, all properties pass
    }

    // Check if any filter amenity is included in property amenities
    return filterAmenities.some((amenity) =>
      propertyAmenities.includes(amenity)
    );
  };
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
      // Check each filter condition
      filterArraysAll(property.type, filters.type) &&
      filterArraysAll(property.location, filters.location) &&
      (filters.bedrooms === null || property.bedrooms >= filters.bedrooms) &&
      (filters.bathrooms === null || property.bathrooms >= filters.bathrooms) &&
      (filters.minPrice === null || property.price >= filters.minPrice) &&
      (filters.maxPrice === null || property.price <= filters.maxPrice) &&
      (filters.parking === null || property.parking === filters.parking) &&
      filterArrays(property.ameneties, filters.amenities) &&
      filterArrays(property.vicinity, filters.vicinity)
    );
  });

  return filteredData;
};
