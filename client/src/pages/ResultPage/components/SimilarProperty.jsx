/* eslint-disable react/prop-types */
import { useState } from "react";
import SmallCard from "./SmallCard";

// SimilarProperty component to display randomly selected similar properties
const SimilarProperty = ({ data }) => {
  // State to track the index of the currently displayed cards
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Render the SimilarProperty component
  return (
    <div className=" my-5 w-full flex-col items-center justify-center">
      {/* Heading for similar properties */}
      <p className="text-3xl text-gray-600 my-10 pl-2 font-light">
        Similar Properties
      </p>

      {/* Display three SmallCard components for randomly selected properties */}
      <div className="hidden md:flex max-w-full justify-center items-center  ">
        {data.slice(currentIndex, currentIndex + 3).map((property) => (
          <SmallCard key={property.id} {...property} />
        ))}
      </div>
      {/* Display three SmallCard components for randomly selected properties MOBILE */}
      <div className="flex md:hidden w-full justify-center items-center ">
        {data.slice(currentIndex, currentIndex + 1).map((property) => (
          <SmallCard key={property.id} {...property} />
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-3 mr-9">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 cursor-pointer rounded-full ${
              index === currentIndex % 3 ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Export the SimilarProperty component
export default SimilarProperty;
