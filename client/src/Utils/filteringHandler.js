/**
 * Filter the provided array of properties based on the specified filters.
 * @param {Array} data - The array of properties to filter.
 * @param {Object} filters - The filters to apply.
 * @returns {Array} - The filtered array of properties.
 */
export const filterData = (data, filters) => {
  /**
   * Helper function to check if property amenities match filter amenities.
   * @param {Array} propertyAmenities - Amenities of the property.
   * @param {Array} filterAmenities - Amenities specified in the filter.
   * @returns {boolean} - True if property passes the filter, false otherwise.
   */
  const filterArrays = (propertyAmenities, filterAmenities) => {
    if (filterAmenities.length === 0) {
      return true; // No filter, all properties pass
    }

    // Check if every filter amenity is included in property amenities
    return filterAmenities.every((amenity) =>
      propertyAmenities.includes(amenity)
    );
  };

  // Filter the data based on the provided filters
  const filteredData = data.filter((property) => {
    return (
      // Check each filter condition
      (filters.type === "" || property.type === filters.type) &&
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

  // Return the filtered data
  return filteredData;
};
