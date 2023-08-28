import React from "react";
import css from "./AutoTop.module.css";
import auto_top_img from "../../assets/auto_top_img.png";
import auto_arr from "../../assets/auto_arr.png";

const AutoTop = () => {
  return (
    <div className={css.Auto_top}>
      <div className={css.left}>
        <img src={auto_top_img} alt="" className={css.img_top} />
      </div>
      <div className={css.right}>
        <h2 className={css.heading}>THE BAJAJ AUTO</h2>
        <p className={css.para}>
          Step into the world of two-wheeled excellence at our RBRYP Bajaj Bike
          Showroom. Discover a diverse range of cutting-edge motorcycles that
          blend performance, style, and innovation. Our showroom offers a
          captivating experience, showcasing the latest models designed to
          elevate your riding journey. From city commutes to thrilling
          adventures, find your perfect ride in a space where passion for
          motorcycles meets exceptional customer service. Welcome to a haven for
          biking enthusiasts and those seeking quality on two wheels.
        </p>
        <img src={auto_arr} alt="" className={css.right_img} />
      </div>
    </div>
  );
};

export default AutoTop;
