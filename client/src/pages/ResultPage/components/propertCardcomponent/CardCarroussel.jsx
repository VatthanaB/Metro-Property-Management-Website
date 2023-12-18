import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "../propertyCardArrows/Slidearrows";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

CardCarroussel.propTypes = {
  carrouselImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  property: PropTypes.shape({
    _id: PropTypes.string,
    type: PropTypes.string,
    // Add other property attributes here
  }).isRequired,
};

const CardCarroussel = ({ carrouselImages, property }) => {
  return (
    <div className="relative text-red-600 text-6xl">
      <Slider
        dots={false}
        infinite={true}
        speed={650}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<CustomNextArrow />}
        prevArrow={<CustomPrevArrow />}
      >
        {carrouselImages.map((image, index) => (
          <Link key={index} to={`/property/${property._id}`}>
            <img
              className="w-full h-[450px] md:h-[400px] object-cover rounded md:rounded-t-xl"
              src={`/images/property/${image}.jpeg`}
              alt={property.type}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarroussel;
