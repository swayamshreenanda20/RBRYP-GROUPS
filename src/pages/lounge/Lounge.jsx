import React from "react";
import css from "./Lounge.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroLounge from "../../components/hero_lounge/HeroLounge";
import LoungeGallery from "../../components/loungeGallery/LoungeGallery";

const Lounge = () => {
  return (
    <>
      <Header />
      <HeroLounge />
      <LoungeGallery />
      <Footer />
    </>
  );
};

export default Lounge;
