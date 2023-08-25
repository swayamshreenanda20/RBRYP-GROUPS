import React from "react";
import "./HeroHotel.css";
import hotel1 from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.png";
import hotel3 from "../../assets/hotel3.png";
import hotel4 from "../../assets/hotel4.png";
import hotel5 from "../../assets/hotel5.png";

import Slider from "react-slick";

const HeroHotel = () => {
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
        <h2 className="auto_heading">The RBRYP HOTEL</h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className="auto_img_box">
            <img src={hotel1} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={hotel2} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={hotel3} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={hotel4} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={hotel5} alt="" className="auto_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroHotel;
