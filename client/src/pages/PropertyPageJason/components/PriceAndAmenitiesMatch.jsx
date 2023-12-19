// import React from "react";
/* eslint-disable react/prop-types */

import { FaDollarSign } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineShower } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

const PriceAndAmenitiesMatch = ({ property }) => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col md:flex-row w-screen justify-center gap-4 p-4 md:gap-0 md:p-0 md:justify-between md:items-center md:w-4/5 whitespace-nowrap">
        <div className="md:hidden flex text-2xl pl-5 pb-3 space-x-2 ">
          <MdOutlineLocationOn className="text-red-600" />
          <p className="font-normal text-2xl">{property.address}</p>
        </div>
        <div className="flex text-2xl items-center font-normal px-6">
          <FaDollarSign className="text-red-600" />
          <p>
            {property.price}{" "}
            <span className="text-lg font-normal">per week</span>
          </p>
        </div>
        <div className="space-x-10 flex font-normal px-6 ">
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
    </div>
  );
};

export default PriceAndAmenitiesMatch;
