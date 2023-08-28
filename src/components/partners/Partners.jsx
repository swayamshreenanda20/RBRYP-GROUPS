import css from "./Partners.module.css";
import partner1 from "../../assets/partner1.png";
import krishanajee from "../../assets/krishanajee.jpg";
import amitjee from "../../assets/amitjee.jpg";

const Partners = () => {
  return (
    <div className={css.partner}>
      <h2 className={css.heading}>MEET OUR PARTNERS</h2>
      <div className={css.cards}>
        <div className={css.card}>
          <img src={krishanajee} alt="" className={css.img} />
          <p className={css.name}>KRISHANA KUMAR</p>
          <p className={css.post}>CHAIRMAN</p>
        </div>
        <div className={css.card}>
          <img src={amitjee} alt="" className={css.img} />
          <p className={css.name}>AMIT KUMAR</p>
          <p className={css.post}>DIRECTOR</p>
        </div>
        <div className={css.card}>
          <img src={partner1} alt="" className={css.img} />
          <p className={css.name}>SUMIT KUMAR</p>
          <p className={css.post}>DIRECTOR</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
