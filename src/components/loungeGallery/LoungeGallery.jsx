import React from "react";
import "./LoungeGallery.css";
import lg1 from "../../assets/lg1.png";
import lg2 from "../../assets/lg2.png";
import lg3 from "../../assets/lg3.png";
import lg4 from "../../assets/lg4.png";

import Slider from "react-slick";

const LoungeGallery = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="gallery">
      <h2 className="heading_gallery"> Our Gallery </h2>
      <Slider {...settings} className="slider_box">
        <div>
          <div className="img_box">
            <img src={lg1} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={lg2} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={lg3} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={lg4} alt="" className="gallery_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LoungeGallery;
