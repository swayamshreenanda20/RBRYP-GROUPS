import css from "./Footer.module.css";
import logo_dark from "../../assets/logo_dark.png";
import fb from "../../assets/fb.png";
import yt from "../../assets/yt.png";
import ig from "../../assets/ig.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={css.footer} id="contact_us">
      <img src={logo_dark} alt="" className={css.logo} />
      <div className={css.right}>
        <input type="text" className={css.input} placeholder="Your E-Mail" />
        <div className={css.middle}>
          <div className={css.middle1}>
            <p className={css.title}>PARTNERSHIP</p>
            <p className={css.para}>Clothing</p>
            <p className={css.para}>Restaurant</p>
            <p className={css.para}>Auto-mobiles</p>
          </div>
          <div className={css.middle2}>
            <p className={css.title}>ABOUT</p>
            <p className={css.para}>Jewellery</p>
            <p className={css.para}>School</p>
            <p className={css.para}>Hotel</p>
          </div>
          <div className={css.middle3}>
            <p className={css.title}>SUPPORT</p>
            <p className={css.para}>Contact</p>
            <p className={css.para}>Customer Help</p>
            <p className={css.para}>Customer Guides</p>
          </div>
        </div>
        <div className={css.line}></div>
        <div className={css.copy_link}>
          <p className={css.copyright}>All Rights Are Reserved.</p>
          <div className={css.links}>
            <Link
              to={"https://instagram.com/rbryp.group?igshid=OGQ5ZDc2ODk2ZA=="}
              target="_blank">
              <img src={ig} alt="" className={css.link_img} />
            </Link>
            <Link
              to={
                "https://www.facebook.com/profile.php?id=61550786607248&mibextid=ZbWKwL"
              }
              target="_blank">
              <img src={fb} alt="" className={css.link_img} />
            </Link>
            {/* <img src={yt} alt="" className={css.link_img} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
