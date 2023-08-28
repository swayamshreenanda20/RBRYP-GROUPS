import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import css from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className={css.contact_us}>
        <h1 className={css.heading}>Contact Us</h1>
        <div className={css.branches}>
          <div className={css.branch}>
            <p className={css.name}>
              Ram bhawan ram yamuna prasad hotel & resort{" "}
            </p>
            <p className={css.address}> Jamla road , motihari</p>
            <a
              href="tel:+91 9122762278"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}>9122762278</p>
            </a>
          </div>
          <div className={css.branch}>
            <p className={css.name}>Ram bhawan ram yamuna prasad clothing</p>
            <p className={css.address}>opposite PNB bank, main road motihari</p>
            <a
              href="tel:+91 9431203652"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}>9431203652</p>
            </a>
          </div>
          <div className={css.branch}>
            <p className={css.name}>Yamuna prasad krishna kumar jeweller</p>
            <p className={css.address}>
              opposite PNB bank, main road, Motihari
            </p>
            <a
              href="tel:+91 9431203652"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}>9431203652</p>
            </a>
          </div>

          <div className={css.branch}>
            <p className={css.name}>Family bawarchi restaurant</p>
            <p className={css.address}>Jamla road , motihari</p>
            <a
              href="tel:+91 7091350324"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}>7091350324</p>
            </a>
          </div>
          <div className={css.branch}>
            <p className={css.name}>Ram bhawan ram lounge</p>
            <p className={css.address}>jamla road , motihari</p>
            <a
              href="tel:+91 7091350324"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}>7091350324</p>
            </a>
          </div>
          <div className={css.branch}>
            <p className={css.name}>G D Goenka Public School, Motihari</p>
            <p className={css.address}>
              Near Nitiraj Tata Motors Jamla Road, Chhatauni-Bettiah Bypass, NH
              28, Motihari, Bihar 845401
            </p>
            <a
              href="tel:+91 9006834200"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}>9006834200</p>
            </a>
          </div>
          <div className={css.branch}>
            <p className={css.name}>Atithi Residential</p>
            <p className={css.address}>
              Opposite shalimar sweets, Main road, Motihari, Bihar 845401
            </p>
            <a
              href="tel:+91 8084351518"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}> 8084351518</p>
            </a>
          </div>
          <div className={css.branch}>
            <p className={css.name}>Ram Bhawan Ram Bajaj</p>
            <p className={css.address}>
              NH28 Bariyarpur Motihari East Champaran Bihar-845401
            </p>
            <a
              href="tel:+91 6287901017"
              style={{ textDecoration: "none" }}
              className={css.contact_links}>
              <p className={css.num}>
                For Sales- 6287901017
                <br />
                For Service-6287901021
              </p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
