import React from "react";
import css from "./JewelleryHero.module.css";
import jl1 from "../../assets/jl1.png";
import jr2 from "../../assets/jr2.png";
import jr1 from "../../assets/jr1.png";

const JewelleryHero = () => {
  return (
    <div className={css.top}>
      <h1 className={css.heading}>THE RBRYP JEWELLERY </h1>
      <div className={css.jewellery_imgs}>
        <div className={css.left}>
          <img src={jl1} alt="" className={css.left_img} />
        </div>
        <div className={css.right}>
          <img src={jr1} alt="" className={css.right_img1} />
          <img src={jr2} alt="" className={css.right_img2} />
        </div>
      </div>
    </div>
  );
};

export default JewelleryHero;
