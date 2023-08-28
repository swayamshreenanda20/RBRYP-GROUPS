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
          At Ram Bhawan Ram Bajaj showroom in Motihari, your satisfaction is our
          priority. We take pride in providing you with a seamless and enjoyable
          experience. Our dedicated team is here to assist you in finding the
          perfect Bajaj vehicle that suits your needs. From exploring options to
          making a decision, we're with you every step of the way. Your
          happiness is our success, and we strive to ensure that you leave our
          showroom with a smile.
        </p>
      </div>
    </div>
  );
};

export default AutoBottom;
