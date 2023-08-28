import React from "react";
import "./JewelleryGallery.css";
import jg1 from "../../assets/jg1.png";
import jg2 from "../../assets/jg2.png";
import jg3 from "../../assets/jg3.png";
import jg4 from "../../assets/jg4.png";
import jg5 from "../../assets/jg5.png";
import jg6 from "../../assets/jg6.png";
import jg7 from "../../assets/jg7.png";
import jg8 from "../../assets/jg8.png";

import Slider from "react-slick";

const JewelleryGallery = () => {
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
      <h2 className="heading_gallery"> Our Collections </h2>
      <Slider {...settings} className="slider_box">
        <div>
          <div className="img_box">
            <img src={jg1} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={jg2} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={jg3} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={jg4} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={jg5} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={jg6} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={jg7} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={jg8} alt="" className="gallery_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default JewelleryGallery;
