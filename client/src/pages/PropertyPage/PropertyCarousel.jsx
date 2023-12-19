// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "../../assets/images/Apartment.jpg";
import pic2 from "../../assets/images/homepage-bg.jpeg";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "../ResultPage/components/propertyCardArrows/Slidearrows";

const PropertyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      {/* <div>PropertyCarousel</div> */}
      <Slider {...settings}>
        <div>
          <img src={pic} alt="Main" />
        </div>
        <div>
          <img src={pic2} alt="Image 1" />
        </div>
        <div>
          <img src={pic2} alt="Image 2" />
        </div>
        <div>
          <img src={pic2} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default PropertyCarousel;
