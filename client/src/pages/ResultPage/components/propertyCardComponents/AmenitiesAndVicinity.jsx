/* eslint-disable react/prop-types */
const AmenitiesAndVicinity = ({ property }) => {
  return (
    <div className="  md:block pl-5 space-y-4">
      <div className=" flex md:hidden text-red-500 underline justify-center">
        <p>See amenities & Vicinity</p>
      </div>
      <div className="hidden md:flex  space-x-10 justify-start items-center">
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
      <div className="hidden md:flex space-x-10 justify-start items-center">
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
      {/* MOBILE */}
    </div>
  );
};

export default AmenitiesAndVicinity;
