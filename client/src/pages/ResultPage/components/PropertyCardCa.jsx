/* eslint-disable react/prop-types */
import { MdOutlineLocationOn } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarroussel from "./propertCardcomponent/CardCarroussel";
import PriceAndAmenities from "./propertCardcomponent/PriceAndAmenities";
// PropertyCard component to display property details
const PropertyCard = (property) => {
  // Check if the screen size is mobile

  const carrouselImages = [property.image, "interior", "bedroom", "pool"];
  return (
    <div className="w-full rounded md:rounded-xl  pb-5 overflow-hidden shadow-xl md:my-6 text-gray-600">
      {/* Address and icons */}
      <p className=" hidden md:flex text-2xl pl-5 pb-3 space-x-2">
        <MdOutlineLocationOn className="text-red-600" />
        <p className="font-extralight text-base">{property.address}</p>
      </p>

      {/* Image and Arrows */}
      <CardCarroussel carrouselImages={carrouselImages} property={property} />

      {/* Price / Bed / Shower / Garage */}
      <PriceAndAmenities property={property} />

      {/* Available / Maximum Tenants */}
      <div className="  md:flex justify-between my-3 text-gray-600 font-normal">
        <div className="md:flex-col md:w-1/2 px-2">
          <div className="flex justify-between w-full px-5">
            <p>Available</p>
            <p> Tue, 12 Dec 2023</p>
          </div>
          <hr className="border-1 border-gray-300 w-full my-2" />
        </div>

        <div className="flex-col md:w-1/2 px-2">
          <div className="flex justify-between w-full px-5">
            <p>Maximum Tenants</p>
            <p> 4</p>
          </div>
          <hr className=" border-1 border-gray-300 w-full my-2" />
        </div>
        <div className=" flex md:hidden text-red-500 underline justify-center">
          <p>See amenities & Vicinity</p>
        </div>
      </div>

      {/* Amenities and Vicinity */}
      <div className=" hidden md:block pl-5 space-y-4">
        <div className="flex space-x-10 justify-start items-center">
          <p className="text-xl">Amenities</p>
          <ul className="flex space-x-3 font-extralight">
            {property.amenities.map((amenity, index) => (
              <li
                className="rounded-3xl px-2 py-1 border-2 border-gray-300 self-center"
                key={index}
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-10 justify-start items-center">
          <p className="text-xl">Vicinity</p>
          <ul className="flex space-x-3 font-extralight">
            {property.vicinity.map((vicinity, index) => (
              <li
                className="rounded-3xl px-2 py-1 border-2 border-gray-300 self-center"
                key={index}
              >
                {vicinity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Export the PropertyCard component
export default PropertyCard;
