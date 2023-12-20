/* eslint-disable react/prop-types */
// Disabling eslint rule for prop-types

import { useState, useEffect } from "react";
import CardCarroussel from "../../ResultPage/components/propertyCardComponents/CardCarroussel";

// Component for dynamic carousel
const DynamicCarouselDiv = ({ property }) => {
  // State for current slide - current image in carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for the carousel
  const carrouselImages = [property.image, "interior", "bedroom", "pool"];

  // Effect to log the current slide (when the slide changes)
  useEffect(() => {
    console.log(currentSlide);
  }, [currentSlide]);

  // Component output/return
  return (
    <div className="pt-2 lg:p-5 w-full md:w-4/5">
      {/* Carousel Card */}
      <CardCarroussel
        carrouselImages={carrouselImages}
        property={property}
        setCurrentSlide={setCurrentSlide}
      />

      {/* This code is assuming that index 0 is the image in the main carousel, and then indexes 3,2,1 are displayed in the imageTrio, and it is cycled in order (cyclical for better user experience) */}
      <div className="hidden lg:flex max-w-full space-x-1">
        {[3, 2, 1].map((offset) => {
          // Calculate index for the image
          const index = (currentSlide + offset) % carrouselImages.length;
          let style = "";

          // Set style based on offset (this is for the border-radius on bottom of the imageTrio)
          if (offset === 1) {
            style = "rounded-bl-xl";
          } else if (offset === 3) {
            style = "rounded-br-xl";
          }

          // Return image element
          return (
            <img
              key={offset}
              className={`w-1/3 h-[200px] md:h-[200px]  object-cover transition duration-800 ease-in-out ${style}`}
              src={`/images/property/${carrouselImages[index]}.jpeg`}
              alt={property.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DynamicCarouselDiv;
