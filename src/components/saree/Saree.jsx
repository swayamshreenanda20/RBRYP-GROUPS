import React from "react";
import "./Saree.css";
import sar1 from "../../assets/sar1.png";
import sar2 from "../../assets/sar2.png";
import sar3 from "../../assets/sar3.png";
import sar4 from "../../assets/sar4.png";
import sar5 from "../../assets/sar5.png";

import Slider from "react-slick";

const Saree = () => {
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
      <h2 className="heading_gallery"> Our Sarees Collection </h2>
      <Slider {...settings} className="slider_box">
        <div>
          <div className="img_box">
            <img src={sar1} alt="" className="gallery_img_sari" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={sar2} alt="" className="gallery_img_sari" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={sar3} alt="" className="gallery_img_sari" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={sar4} alt="" className="gallery_img_sari" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={sar5} alt="" className="gallery_img_sari" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={sar1} alt="" className="gallery_img_sari" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={sar2} alt="" className="gallery_img_sari" />
          </div>
        </div>
        <div>
          <div className="img_box">
            <img src={sar3} alt="" className="gallery_img_sari" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Saree;
