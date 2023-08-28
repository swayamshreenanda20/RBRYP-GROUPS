import React from "react";
import "./HeroResto.css";
import rest from "../../assets/rest.png";
import rest1 from "../../assets/rest1.png";
import rest2 from "../../assets/rest2.png";
import rest3 from "../../assets/rest3.png";
import rest4 from "../../assets/rest4.png";
import rest5 from "../../assets/rest5.png";

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
        <h2 className="auto_heading">The FAMILY BAWARCHI RESTAURANT</h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className="auto_img_box">
            <img src={rest} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={rest2} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={rest3} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={rest4} alt="" className="auto_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroResto;
