/* eslint-disable react/prop-types */
import { MdOutlineLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineShower } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "./propertyCardArrows/Slidearrows";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="relative text-red-600 text-6xl">
        <Slider
          dots={false}
          infinite={true}
          speed={650}
          slidesToShow={1}
          slidesToScroll={1}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
        >
          {carrouselImages.map((image, index) => (
            <Link key={index} to={`/property/${property._id}`}>
              <img
                className="w-full h-[450px] md:h-[400px] object-cover rounded md:rounded-t-xl"
                src={`/images/property/${image}.jpeg`}
                alt={property.type}
              />
            </Link>
          ))}
        </Slider>
      </div>

      {/* Price / Bed / Shower / Garage */}
      <div className=" flex-col md:flex justify-between pt-5">
        <p className="md:hidden flex text-2xl pl-5 pb-3 space-x-2">
          <MdOutlineLocationOn className="text-red-600" />
          <p className="font-extralight text-base">{property.address}</p>
        </p>
        <p className="flex text-2xl pl-5 pb-3 items-center font-light">
          <FaDollarSign className="text-red-600" />
          <p>
            {property.price} <span className="text-lg">per week</span>
          </p>
        </p>
        <div className="space-x-10 flex justify-center items-center text-base pr-5">
          <div className="flex">
            <MdOutlineBed className="mr-4 text-2xl" />
            {property.bedrooms}
          </div>
          <div className="flex">
            <MdOutlineShower className="mr-4 text-2xl" />
            {property.bathrooms}
          </div>
          <div className="flex">
            <GiHomeGarage className="mr-4 text-2xl" />
            {property.parking}
          </div>
        </div>
      </div>

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
