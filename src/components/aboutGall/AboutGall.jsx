import React from "react";
import css from "./AboutGall.module.css";
import aboutr from "../../assets/aboutr.png";

const AboutGall = () => {
  return (
    <div className={css.about}>
      <p className={css.heading_para}>OUR HISTORY</p>
      <h2 className={css.heading}>ABOUT US</h2>
      <div className={css.bottom}>
        <div className={css.left}>
          <h3 className={css.bottom_heading}>How Our Restaurant Started</h3>
          <p className={css.bottom_para}>
            Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem
            ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus elit uasi
            quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset
            campas fincas Lorem ipsum dolor Phas ellus ac sodales felis tiam non
            metus, consectetur adipisicing elit uasi quidem minus id omnis a
            nibh fusce mollis imperdie tlorem ipuset campas fincas Aliquam erat
            volut pat. Ibu lum orci eget, viverra elit liquam erat volut pat
            phas ellus ac. Aliquam erat volut pat phas ellu
          </p>
        </div>
        <img src={aboutr} alt="" className={css.image} />
      </div>
    </div>
  );
};

export default AboutGall;
