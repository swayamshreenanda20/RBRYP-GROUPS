import React from "react";
import "./HeroResto.css";
import rest from "../../assets/rest.png";

import Slider from "react-slick";

const HeroResto = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="middle_top">
        <h2 className="auto_heading">The RBRYP RESTAURANT</h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className="auto_img_box">
            <img src={rest} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={rest} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={rest} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={rest} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={rest} alt="" className="auto_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroResto;
