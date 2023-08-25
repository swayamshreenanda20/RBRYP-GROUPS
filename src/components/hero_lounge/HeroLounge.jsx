import React from "react";
import css from "./HeroLounge.module.css";
import lounge_hero from "../../assets/lounge_hero.png";

const HeroLounge = () => {
  return (
    <div className={css.hero} id="/">
      <h1 className={css.heading}>THE LOUNGE</h1>
      <p className={css.para}>
        Viverra lorem ipsuet elit liquam erat volut pat phas ellus ac sodales
        Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem
        minus id iprum omnis. Lorem ipsum dolor ac sodales felis lorem isum
        tiam.
      </p>
      <button className={css.btn}>BOOK NOW</button>
    </div>
  );
};

export default HeroLounge;
