import React from "react";
import css from "./AutoBottom.module.css";
import auto_bottom_img from "../../assets/auto_bottom_img.png";

const AutoBottom = () => {
  return (
    <div className={css.Auto_bottom}>
      <div className={css.left}>
        <img src={auto_bottom_img} alt="" className={css.img_bottom} />
      </div>
      <div className={css.right}>
        <h2 className={css.heading}>Customer Satisfaction At Bajaj Showroom</h2>
        <p className={css.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure
          consectetur cupiditate praesentium molestiae nisi amet odio dolor sunt
          error natus dignissimos, repudiandae quam, consequatur rerum expedita
          commodi voluptates non beatae, doloribus accusamus suscipit recusandae
          earum! Nostrum facere voluptas eveniet.
        </p>
      </div>
    </div>
  );
};

export default AutoBottom;
