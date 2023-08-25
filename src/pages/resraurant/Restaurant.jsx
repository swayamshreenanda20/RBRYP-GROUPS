import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroResto from "../../components/heroResto/HeroResto";
import RestoGall from "../../components/restoGall/RestoGall";
import AboutGall from "../../components/aboutGall/AboutGall";

const Restaurant = () => {
  return (
    <>
      <Header />
      <HeroResto />
      <RestoGall />
      <AboutGall />
      <Footer />
    </>
  );
};

export default Restaurant;
