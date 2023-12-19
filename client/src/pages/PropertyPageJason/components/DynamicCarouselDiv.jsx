// Disabling eslint rule for prop-types
/* eslint-disable react/prop-types */

// Importing necessary hooks and components
import { useState, useEffect } from "react";
import CardCarroussel from "../../ResultPage/components/propertyCardComponents/CardCarroussel";

// DynamicCarouselDiv is a functional component that takes 'property' as a prop
const DynamicCarouselDiv = ({ property }) => {
  // useState hook is used to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of carousel images
  const carrouselImages = [property.image, "interior", "bedroom", "pool"];

  // Filtered array of carousel images excluding the current slide
  const imageTrio = carrouselImages.filter(
    (_, index) => index !== currentSlide
  );

  // useEffect hook is used to log the current slide index whenever it changes
  useEffect(() => {
    console.log(currentSlide);
  }, [currentSlide]);

  // The component returns a JSX structure
  return (
    <div className="pt-2 lg:p-5 w-full md:w-4/5">
      {/* CardCarroussel component is passed the carousel images, property object, and setCurrentSlide function as props */}
      <CardCarroussel
        carrouselImages={carrouselImages}
        property={property}
        setCurrentSlide={setCurrentSlide}
      />

      <div className="hidden lg:flex max-w-full space-x-1">
        {/* Mapping over the filtered carousel images to display them */}
        {imageTrio.map((image, index) => {
          let style = "";
          // Setting style based on the index of the image
          if (index === 0) {
            style = "rounded-bl-xl";
          } else if (index === 1) {
            style = "style-for-index-1";
          } else if (index === 2) {
            style = "rounded-br-xl";
          }

          // Returning an img element for each image
          return (
            <img
              key={index}
              className={`w-1/3 h-[200px] md:h-[200px]  object-cover transition duration-800 ease-in-out ${style}`}
              src={`/images/property/${image}.jpeg`}
              alt={property.type}
            />
          );
        })}
      </div>
    </div>
  );
};

// Exporting DynamicCarouselDiv component for use in other parts of the application
export default DynamicCarouselDiv;
