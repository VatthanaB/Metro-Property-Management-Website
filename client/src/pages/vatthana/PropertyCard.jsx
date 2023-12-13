const PropertyCard = (property) => {
  return (
    <div className="max-w-4xl rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={`/images/${property.image}.jpeg`}
        alt={property.type}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{property.address}</div>
        <p className="text-gray-700 text-base">{property.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {property.type}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {property.location}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`$${property.price}`}</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        {property.ameneties.map((amenity, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
