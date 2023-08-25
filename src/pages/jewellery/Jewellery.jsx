import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import JewelleryHero from "../../components/jewelleryHero/JewelleryHero";
import Neckless from "../../components/neckless/Neckless";
import JewelleryGallery from "../../components/jewelleryGallery/JewelleryGallery";

const Jewellery = () => {
  return (
    <>
      <Header />
      <JewelleryHero />
      <Neckless />
      <JewelleryGallery />
      <Footer />
    </>
  );
};

export default Jewellery;
