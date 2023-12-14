import { MdOutlineLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineShower } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

// PropertyCard component to display property details
const PropertyCard = (property) => {
  return (
    <div className="w-full rounded-xl pb-5 overflow-hidden shadow-xl m-6 text-gray-600">
      {/* Address and icons */}
      <p className="flex text-2xl pl-5 pb-3 space-x-2">
        <MdOutlineLocationOn className="text-red-600" />
        <p className="font-extralight text-base">{property.address}</p>
      </p>

      {/* Image and Arrows */}
      <div className="relative text-red-600 text-6xl">
        <Link to={`/property/${property._id}`}>
          <img
            className="w-full h-[400px] object-cover rounded-t-xl"
            src={`/images/${property.image}.jpeg`}
            alt={property.type}
          />
        </Link>
        <div className="absolute left-0 top-2/3 transform -translate-y-1/2 w-8 h-8">
          <IoIosArrowBack className="bg-slate-300 bg-opacity-60" />
        </div>
        <div className="absolute right-0 top-2/3 transform -translate-y-1/2 w-8 h-8 mr-7">
          <IoIosArrowForward className="bg-slate-300 bg-opacity-60" />
        </div>
      </div>

      {/* Price / Bed / Shower / Garage */}
      <div className="flex justify-between pt-5">
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
      <div className="flex justify-between my-3 text-gray-600 font-normal">
        <div className="flex-col w-1/2 px-2">
          <div className="flex justify-between w-full px-5">
            <p>Available</p>
            <p> Tue, 12 Dec 2023</p>
          </div>
          <hr className="border-1 border-gray-300 w-full my-2" />
        </div>

        <div className="flex-col w-1/2 px-2">
          <div className="flex justify-between w-full px-5">
            <p>Maximum Tenants</p>
            <p> 4</p>
          </div>
          <hr className=" border-1 border-gray-300 w-full my-2" />
        </div>
      </div>

      {/* Amenities and Vicinity */}
      <div className="pl-5 space-y-4">
        <div className="flex space-x-10 justify-start items-center">
          <p className="text-xl">Amenities</p>
          <ul className="flex space-x-3 font-extralight">
            {property.ameneties.map((amenity, index) => (
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
