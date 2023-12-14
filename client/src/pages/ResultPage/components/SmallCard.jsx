// Import necessary dependencies and components
import { MdOutlineLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

// SmallCard component to display a small property card
const SmallCard = (property) => {
  return (
    <div className="w-80 h-60 rounded-xl overflow-hidden shadow-xl m-2 space-y-2">
      {/* Link to the property details page */}
      <Link to={`/property/${property._id}`}>
        {/* Property image */}
        <img
          className="w-full h-32 object-cover rounded-t-xl"
          src={`/images/${property.image}.jpeg`}
          alt={property.type}
        />
      </Link>

      {/* Property details */}
      <div className="p-2 space-y-2">
        {/* Price */}
        <p className="flex text-sm items-center font-light space-x-3">
          <FaDollarSign className="text-red-600" />
          <p>
            {property.price} <span className="text-sm">per week</span>
          </p>
        </p>

        {/* Location */}
        <div className="flex text-xl pb-1 space-x-2">
          <MdOutlineLocationOn className="text-red-600" />
          <p className="font-extralight text-sm">{property.address}</p>
        </div>
      </div>
    </div>
  );
};

// Export the SmallCard component
export default SmallCard;
