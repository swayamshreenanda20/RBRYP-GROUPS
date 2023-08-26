import css from "./Department.module.css";
import hotel from "../../assets/hotel.png";
import auto from "../../assets/auto.png";
import jewell from "../../assets/jewell.png";
import food from "../../assets/food.png";
import school from "../../assets/school.png";
import cloth from "../../assets/cloth.png";
import lounge from "../../assets/lounge.png";
import pool from "../../assets/pool.png";
import { Link } from "react-router-dom";

const Department = () => {
  return (
    <div className={css.department}>
      <h2 className={css.heading}>WHAT WE DO</h2>
      <p className={css.para}>
        At Ram Bhawan Ram Yamuna Prasad, we bring a wide range of services and
        products to the people across India. From providing exceptional
        hospitality experiences, offering quality education, delivering
        top-notch automobiles and fashion, to creating memorable dining
        experiences, we are dedicated to enriching lives and serving our
        community with excellence in every endeavour.
      </p>
      <div className={css.imgs}>
        <Link to="/hotel" style={{ textDecoration: "none", color: "#000000" }}>
          <div
            className={css.img}
            style={{
              backgroundImage: `url(${hotel})`,
              backgroundSize: "cover",
            }}>
            <p className={css.img_para}>Hospitality</p>
          </div>
        </Link>
        <Link
          to="/auto-mobile"
          style={{ textDecoration: "none", color: "#000000" }}>
          <div
            className={css.img}
            style={{
              backgroundImage: `url(${auto})`,
              backgroundSize: "cover",
            }}>
            <p className={css.img_para}>Automobiles</p>
          </div>
        </Link>
        <Link
          to="/jewellery"
          style={{ textDecoration: "none", color: "#000000" }}>
          <div
            className={css.img}
            style={{
              backgroundImage: `url(${jewell})`,
              backgroundSize: "cover",
            }}>
            <p className={css.img_para}>Jewellery</p>
          </div>
        </Link>
        <Link
          to="/restaurant"
          style={{ textDecoration: "none", color: "#000000" }}>
          <div
            className={css.img}
            style={{
              backgroundImage: `url(${food})`,
              backgroundSize: "cover",
            }}>
            <p className={css.img_para}>Restaurant</p>
          </div>
        </Link>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${school})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}>Education</p>
        </div>
        <Link to="/cloth" style={{ textDecoration: "none", color: "#000000" }}>
          <div
            className={css.img}
            style={{
              backgroundImage: `url(${cloth})`,
              backgroundSize: "cover",
            }}>
            <p className={css.img_para}>Clothing</p>
          </div>
        </Link>
        <Link to="/hotel" style={{ textDecoration: "none", color: "#000000" }}>
          <div
            className={css.img}
            style={{
              backgroundImage: `url(${pool})`,
              backgroundSize: "cover",
            }}>
            <p className={css.img_para}>Hotel</p>
          </div>
        </Link>
        <Link to="/lounge" style={{ textDecoration: "none", color: "#000000" }}>
          <div
            className={css.img}
            style={{
              backgroundImage: `url(${lounge})`,
              backgroundSize: "cover",
            }}>
            <p className={css.img_para}>Lounge</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Department;
