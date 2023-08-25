import React from "react";
import "./ClothBottom.css";
import cb1 from "../../assets/cb1.png";
import cb2 from "../../assets/cb2.png";
import cb3 from "../../assets/cb3.png";
import cb4 from "../../assets/cb4.png";
import cb5 from "../../assets/cb5.png";

import Slider from "react-slick";

const ClothBottom = () => {
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
        <h2 className="auto_heading">OUR RETAIL SHOP</h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className="auto_img_box">
            <img src={cb1} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={cb2} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={cb3} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={cb4} alt="" className="auto_img" />
          </div>
        </div>
        <div>
          <div className="auto_img_box">
            <img src={cb5} alt="" className="auto_img" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ClothBottom;
