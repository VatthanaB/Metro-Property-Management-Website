// Disabling eslint rule for prop-types
/* eslint-disable react/prop-types */

// Importing necessary hooks and components
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "../propertyCardArrows/Slidearrows";

// CardCarroussel is a functional component that takes 'carrouselImages', 'property', and 'setCurrentSlide' as props
const CardCarroussel = ({ carrouselImages, property, setCurrentSlide }) => {
  // Setting default height for the carousel images
  let height = "h-[335px] md:h-[350px]";

  // Default properties for the Slider component
  let sliderProps = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // If setCurrentSlide function is passed as a prop, modify the sliderProps and height
  if (setCurrentSlide) {
    sliderProps.beforeChange = (oldIndex, newIndex) =>
      setCurrentSlide(newIndex);
    sliderProps.speed = 1200;
    height = "h-[334px] md:h-[480px]";
  }

  // The component returns a JSX structure
  return (
    <div className="relative text-red-600 text-6xl">
      {/* Slider component is passed the sliderProps */}
      <Slider {...sliderProps}>
        {/* Mapping over the carousel images to display them */}
        {carrouselImages.map((image, index) => (
          <Link key={index} to={`/property/${property._id}`}>
            <img
              className={`w-full ${height} object-cover rounded md:rounded-t-xl`}
              src={`/images/property/${image}.jpeg`}
              alt={property.type}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

// Exporting CardCarroussel component for use in other parts of the application
export default CardCarroussel;
