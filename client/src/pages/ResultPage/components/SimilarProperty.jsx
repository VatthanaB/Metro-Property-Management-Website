/* eslint-disable react/prop-types */

import SmallCard from "./SmallCard";

// SimilarProperty component to display randomly selected similar properties
const SimilarProperty = ({ data }) => {
  // Generate an array of three random properties from the data
  const randomProperty = [
    data[Math.floor(Math.random() * data.length)],
    data[Math.floor(Math.random() * data.length)],
    data[Math.floor(Math.random() * data.length)],
  ];

  // Render the SimilarProperty component
  return (
    <div className="ml-10 my-5">
      {/* Heading for similar properties */}
      <p className="text-3xl text-gray-600 my-10 pl-2 font-light">
        Similar Properties
      </p>

      {/* Display three SmallCard components for randomly selected properties */}
      <div className="flex max-w-4/5 items-center">
        {randomProperty.map((property) => (
          <SmallCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

// Export the SimilarProperty component
export default SimilarProperty;
