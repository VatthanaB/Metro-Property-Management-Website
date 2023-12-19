/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineShower } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

const MatchPriceAndAmenities = ({ property }) => {
  return (
    <>
      {/* MOBILE */}
      <div className="flex-col md:hidden justify-between items-start pt-5  ">
        <p className="md:hidden flex text-2xl pl-5 pb-3 space-x-2 ">
          <MdOutlineLocationOn className="text-red-600" />
          <p className="font-extralight text-base">{property.address}</p>
        </p>

        <p className="flex text-2xl pl-5 pb-3 items-center font-light ">
          <FaDollarSign className="text-red-600" />
          <p>
            {property.price} <span className="text-lg">per week</span>
          </p>
        </p>
        <div className="space-x-10 flex justify-start  items-center  text-base pl-5 md:pr-5 ">
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
      {/* DESKTOP */}
      <div className=" hidden md:flex justify-between items-start pt-5">
        <p className="md:hidden flex text-2xl pl-5 pb-3 space-x-3 ">
          <MdOutlineLocationOn className="text-red-600" />
          <p className="font-extralight text-base">{property.address}</p>
        </p>

        <p className="flex text-2xl pl-5 pb-3 items-center font-light ">
          <FaDollarSign className="text-red-600" />
          <p>
            {property.price} <span className="text-lg">per week</span>
          </p>
        </p>
        <div className="space-x-10 flex justify-start md:justify-end items-center md:items-start md:pb-10 text-base pl-5 md:pr-5 ">
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
    </>
  );
};

export default MatchPriceAndAmenities;
