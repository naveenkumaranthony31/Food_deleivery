import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import banner1 from "../../assets/Banners/banner1.jpeg"
import banner2 from "../../assets/Banners/banner2.jpg"
import banner3 from "../../assets/Banners/banner3.jpg"  

const BannerSlider = () => {
  const settings = {
    dots: true,         // Enable dots for navigation
    infinite: true,     // Infinite scrolling
    speed: 5,         // Transition speed
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,     // Enable autoplay
    autoplaySpeed: 3000 // Set autoplay speed (3 seconds)
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
