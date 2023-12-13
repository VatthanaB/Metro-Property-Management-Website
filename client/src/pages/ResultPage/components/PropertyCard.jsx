import { MdOutlineLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

const PropertyCard = (property) => {
  //   const redirectToIndividualProperty = () => {
  //     console.log(property._id);
  //     window.location.href = `/property/${property._id}`;
  //   };

  return (
    <div className="w-3/5  rounded-t-xl overflow-hidden shadow-lg m-4">
      <p className="flex text-2xl pl-5 pb-3">
        <MdOutlineLocationOn className="text-red-600" />
        {property.address}
      </p>
      <img
        className="w-full h-[400px] object-cover rounded-t-xl"
        src={`/images/${property.image}.jpeg`}
        alt={property.type}
      />
      <div className="flex justify-between pt-5">
        <p className="flex text-2xl pl-5 pb-3 items-center">
          <FaDollarSign className="text-red-600" />
          {property.price}
        </p>
        <div
          className="space-x-10
        "
        >
          {property.bedrooms}
          {property.bathrooms}
          {property.parking}
        </div>
      </div>
      <br />
      <div className="flex">
        <p>Ameneties</p>
        <ul className="flex">
          {property.ameneties.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <p>Vicinity</p>
        <ul className="flex">
          {property.vicinity.map((vicinity, index) => (
            <li key={index}>{vicinity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyCard;
