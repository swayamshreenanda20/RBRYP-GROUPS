import React from "react";
import css from "./HeroLounge.module.css";
import lounge_hero from "../../assets/lounge_hero.png";

const HeroLounge = () => {
  return (
    <div className={css.hero} id="/">
      <h1 className={css.heading}>THE LOUNGE</h1>
      <p className={css.para}>
        Introducing Ram Bhawan Ram Lounge, your ultimate venue for all
        celebrations. Whether it's a joyful birthday, a cherished anniversary,
        or a professional corporate meeting, we offer the perfect setting. Our
        team specializes in turning your ideas into reality, ensuring every
        detail is taken care of. From cozy gatherings to grand events, our
        versatile space adapts to your needs. Experience the ease of planning
        and the joy of celebrating at Ram Bhawan Ram Lounge, where memories are
        made special. Contact us today to book your memorable event!
      </p>
      <button className={css.btn}>BOOK NOW</button>
    </div>
  );
};

export default HeroLounge;
