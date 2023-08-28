import React from "react";
import css from "./AboutGall.module.css";
import aboutr from "../../assets/aboutr.png";

const AboutGall = () => {
  return (
    <div className={css.about}>
      <h2 className={css.heading}>ABOUT US</h2>
      <div className={css.bottom}>
        <div className={css.left}>
          <h3 className={css.bottom_heading}>How Our Restaurant Started</h3>
          <p className={css.bottom_para}>
            We started our restaurant in Motihari with a wide range of Indian
            and Chinese foods because we wanted to bring delicious and diverse
            flavors to our local community. We believe that everyone should have
            the chance to enjoy a variety of tasty dishes, from familiar Indian
            flavors to the exciting tastes of Chinese cuisine. Our goal is to
            create a place where people can come together, share meals, and
            explore new tastes, all in a simple and welcoming environment. So
            come join us for a flavorful experience that combines the best of
            both worlds!
          </p>
        </div>
        <img src={aboutr} alt="" className={css.image} />
      </div>
    </div>
  );
};

export default AboutGall;
