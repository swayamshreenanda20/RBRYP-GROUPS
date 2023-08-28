import React from "react";
import "./AutoMiddle.css";
import middle1 from "../../assets/middle1.png";
import middle2 from "../../assets/middle2.png";
import middle3 from "../../assets/middle3.png";
import middle4 from "../../assets/middle4.png";
import middle5 from "../../assets/middle5.png";
import middle6 from "../../assets/middle6.png";

import Slider from "react-slick";

const AutoMiddle = () => {
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
        <h2 className="auto_heading"> inauguration ceremony</h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className="auto_img_box">
            <img src={middle1} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={middle2} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={middle3} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={middle4} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={middle5} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={middle6} alt="" className="auto_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AutoMiddle;
