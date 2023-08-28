import React from "react";
import css from "./JewelleryHero.module.css";
import jl1 from "../../assets/jl1.png";
import jr2 from "../../assets/jr2.png";
import jr1 from "../../assets/jr1.png";

const JewelleryHero = () => {
  return (
    <div className={css.top}>
      <h1 className={css.heading}>Yamuna Prasad Krishna Kumar Jewellers </h1>
      <p className={css.para}>
        Since 1996, Yamuna Prasad Krishna Kumar Jewellers have been dedicated to
        crafting exquisite and pure pieces of jewellery. Our legacy is one of
        delicacy and precision, where each piece tells a unique story of
        artistry and elegance. With a commitment to quality that spans
        generations, we bring forth jewellery that captures the essence of
        beauty and timelessness. From delicate designs to unparalleled purity,
        our creations reflect the heart and soul of our craft, resonating with
        the sentiments of our discerning patrons.
      </p>
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
