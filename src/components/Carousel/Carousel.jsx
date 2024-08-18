// Carousel.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

function Carousel() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate:false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider slider-1">
          
        </div>
        <div className="slider slider-2">
          
        </div>
        <div className="slider slider-3">
          
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
