import css from "./Hero.module.css";
import hero_img from "../../assets/hero_img.png";

const Hero = () => {
  return (
    <div className={css.hero} id="/">
      <img src={hero_img} alt="" className={css.hero_bg} />
      <div className={css.hero_bottom}>
        <div className={css.bottom_card}>
          Rambhawan Ram yamuna prasad (cloth merchant){" "}
        </div>
        <div className={css.bottom_card}>
          yamuna prasad krishna kumar jewellers
        </div>
        <div className={css.bottom_card}>
          ram bhawan ram yamuna prasad hotel & resort
        </div>
        <div className={css.bottom_card}>
          ram bhawan ram auto mobiles. (bajaj)
        </div>
        <div className={css.bottom_card}>the family bawarchi restaurents</div>
        <div className={css.bottom_card}>atithi residencial hotel</div>
        <div className={css.bottom_card}>ram bhawan lounge</div>
        <div className={css.bottom_card}>
          ram bhawan ram yamuna prasad educational trust ( G.D. GOENKA PUBLIC
          SCHOOL)
        </div>
      </div>
    </div>
  );
};

export default Hero;
