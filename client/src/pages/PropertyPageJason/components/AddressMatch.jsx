// import React from "react";
/* eslint-disable react/prop-types */

// import { FaDollarSign } from "react-icons/fa";
// import { MdOutlineBed } from "react-icons/md";
// import { MdOutlineShower } from "react-icons/md";
// import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

const AddressMatch = ({ property }) => {
  return (
    <div className="hidden md:flex text-2xl pl-5 pb-0 space-x-2 ">
      <MdOutlineLocationOn className="text-red-600 hidden" />
      <p className="font-normal text-2xl whitespace-normal">
        {property.address}
      </p>
    </div>
  );
};

export default AddressMatch;
