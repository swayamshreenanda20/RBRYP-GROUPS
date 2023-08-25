import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ClothTop from "../../components/clothTop/ClothTop";
import Saree from "../../components/saree/Saree";
import Serwani from "../../components/serwani/Serwani";
import Lahanga from "../../components/lahanga/Lahanga";
import ClothBottom from "../../components/clothBottom/ClothBottom";

const Cloth = () => {
  return (
    <>
      <Header />
      <ClothTop />
      <Saree />
      <Serwani />
      <Lahanga />
      <ClothBottom />
      <Footer />
    </>
  );
};

export default Cloth;
