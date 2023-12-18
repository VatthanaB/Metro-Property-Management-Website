/* eslint-disable react/prop-types */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarroussel from "./propertyCardComponents/CardCarroussel";
import PriceAndAmenities from "./propertyCardComponents/PriceAndAmenities";
import AvailableAndMaximumTenants from "./propertyCardComponents/AvailableAndMaximumTenants";
import AmenitiesAndVicinity from "./propertyCardComponents/AmenitiesAndVicinity";
import PropertyAddress from "./propertyCardComponents/PropertyAddress";
// PropertyCard component to display property details
const PropertyCard = (property) => {
  // Check if the screen size is mobile

  const carrouselImages = [property.image, "interior", "bedroom", "pool"];
  return (
    <div className="w-full rounded md:rounded-xl  pb-5 overflow-hidden shadow-xl md:my-6 text-gray-600">
      {/* Address and icons */}
      <PropertyAddress property={property} />

      {/* Image and Arrows */}
      <CardCarroussel carrouselImages={carrouselImages} property={property} />

      {/* Price / Bed / Shower / Garage */}
      <PriceAndAmenities property={property} />

      {/* Available / Maximum Tenants */}
      <AvailableAndMaximumTenants />

      {/* Amenities and Vicinity */}
      <AmenitiesAndVicinity property={property} />
    </div>
  );
};

// Export the PropertyCard component
export default PropertyCard;
