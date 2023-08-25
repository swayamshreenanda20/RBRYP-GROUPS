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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure
          consectetur cupiditate praesentium molestiae nisi amet odio dolor sunt
          error natus dignissimos, repudiandae quam, consequatur rerum expedita
          commodi voluptates non beatae, doloribus accusamus suscipit recusandae
          earum! Nostrum facere voluptas eveniet.
        </p>
        <img src={auto_arr} alt="" className={css.right_img} />
      </div>
    </div>
  );
};

export default AutoTop;
