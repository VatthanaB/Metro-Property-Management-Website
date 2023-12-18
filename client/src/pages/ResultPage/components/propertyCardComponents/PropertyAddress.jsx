/* eslint-disable react/prop-types */
import { MdOutlineLocationOn } from "react-icons/md";

const PropertyAddress = ({ property }) => {
  return (
    <p className=" hidden md:flex text-2xl pl-5 pb-3 space-x-2">
      <MdOutlineLocationOn className="text-red-600" />
      <p className="font-extralight text-base">{property.address}</p>
    </p>
  );
};

export default PropertyAddress;
