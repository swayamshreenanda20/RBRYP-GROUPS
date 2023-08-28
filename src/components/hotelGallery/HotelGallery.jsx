import React from "react";
import "./HotelGallery.css";
import hog1 from "../../assets/hog1.png";
import hog2 from "../../assets/hog2.png";
import hog3 from "../../assets/hog3.png";
import hog4 from "../../assets/hog4.png";
import hog5 from "../../assets/hog5.png";
import hog6 from "../../assets/hog6.png";

import Slider from "react-slick";

const HotelGallery = () => {
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
            <img src={hog1} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={hog2} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={hog3} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={hog4} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={hog5} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={hog6} alt="" className="gallery_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HotelGallery;
