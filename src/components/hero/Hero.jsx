import css from "./Hero.module.css";
import hero_img from "../../assets/hero_img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={css.hero} id="/">
      <img src={hero_img} alt="" className={css.hero_bg} />
      <div className={css.hero_bottom}>
        <Link to="/cloth" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={css.bottom_card}>
            Ram Bhawan Ram Yamuna Prasad (cloth merchant){" "}
          </div>
        </Link>
        <Link
          to="/jewellery"
          style={{ textDecoration: "none", color: "#000000" }}>
          <div className={css.bottom_card}>
            yamuna prasad krishna kumar jewellers
          </div>
        </Link>
        <Link to="/hotel" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={css.bottom_card}>
            ram bhawan ram yamuna prasad hotel & resort
          </div>
        </Link>
        <Link
          to="/auto-mobile"
          style={{ textDecoration: "none", color: "#000000" }}>
          <div className={css.bottom_card}>
            ram bhawan ram automobiles. (bajaj)
          </div>
        </Link>
        <Link
          to="/restaurant"
          style={{ textDecoration: "none", color: "#000000" }}>
          <div className={css.bottom_card}>the family bawarchi restaurant</div>
        </Link>
        <div className={css.bottom_card}>atithi residency hotel</div>
        <Link to="/lounge" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={css.bottom_card}>ram bhawan lounge</div>
        </Link>
        <div className={css.bottom_card}>
          ram bhawan ram yamuna prasad educational trust ( G.D. GOENKA PUBLIC
          SCHOOL)
        </div>
      </div>
    </div>
  );
};

export default Hero;
