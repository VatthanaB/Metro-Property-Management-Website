/* eslint-disable react/prop-types */
import PropertyCard from "./PropertyCardCa";

const MappedPropertyCards = ({ currentItems }) => {
  return (
    <div className="flex flex-col space-y-5">
      {currentItems.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};

export default MappedPropertyCards;
