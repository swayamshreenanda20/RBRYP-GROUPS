import React from "react";
import css from "./Neckless.module.css";
import neck1 from "../../assets/neck1.png";
import neck2 from "../../assets/neck2.png";
import neck3 from "../../assets/neck3.png";
import neck4 from "../../assets/neck4.png";
import neck5 from "../../assets/neck5.png";

const Neckless = () => {
  return (
    <div className={css.neckless}>
      <h2 className={css.heading}>NECKLESS</h2>
      <div className={css.neckless_imgs}>
        <img src={neck1} alt="" className={css.neckless_img} />
        <img src={neck2} alt="" className={css.neckless_img} />
        <img src={neck3} alt="" className={css.neckless_img} />
        <img src={neck4} alt="" className={css.neckless_img} />
        <img src={neck5} alt="" className={css.neckless_img} />
      </div>
    </div>
  );
};

export default Neckless;
