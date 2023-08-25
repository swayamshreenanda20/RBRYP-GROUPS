import React from "react";
import "./RestoGall.css";
import restg from "../../assets/restg.png";

import Slider from "react-slick";

const RestoGall = () => {
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
      <p className="heading_para">our establishment</p>
      <h2 className="heading_gallery"> Our Gallery </h2>
      <Slider {...settings} className="slider_box">
        <div>
          <div className="img_box">
            <img src={restg} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={restg} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={restg} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={restg} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={restg} alt="" className="gallery_img" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={restg} alt="" className="gallery_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default RestoGall;