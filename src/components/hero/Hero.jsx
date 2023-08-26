import css from "./Hero.module.css";
import gh1 from "../../assets/gh1.png";
import gh2 from "../../assets/gh2.png";
import gh3 from "../../assets/gh3.png";
import gh4 from "../../assets/gh4.png";
import gh6 from "../../assets/gh6.png";
import gh7 from "../../assets/gh7.png";
import gh8 from "../../assets/gh8.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={css.hero} id="/">
      <div>
        <Slider {...settings}>
          <div>
            <div className="auto_img_box">
              <img src={gh1} alt="" className="auto_img" />
            </div>
          </div>
          <div>
            <div className="auto_img_box">
              <img src={gh2} alt="" className="auto_img" />
            </div>
          </div>
          <div>
            <div className="auto_img_box">
              <img src={gh3} alt="" className="auto_img" />
            </div>
          </div>
          <div>
            <div className="auto_img_box">
              <img src={gh4} alt="" className="auto_img" />
            </div>
          </div>
          <div>
            <div className="auto_img_box">
              <img src={gh6} alt="" className="auto_img" />
            </div>
          </div>
          <div>
            <div className="auto_img_box">
              <img src={gh7} alt="" className="auto_img" />
            </div>
          </div>
          <div>
            <div className="auto_img_box">
              <img src={gh8} alt="" className="auto_img" />
            </div>
          </div>
        </Slider>
      </div>
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
