import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AutoTop from "../../components/autoTop/AutoTop";
import AutoMiddle from "../../components/autoMiddle/AutoMiddle";
import AutoBottom from "../../components/autoBottom/AutoBottom";

const AutoMobile = () => {
  return (
    <>
      <Header />
      <AutoTop />
      <AutoMiddle />
      <AutoBottom />
      <Footer />
    </>
  );
};

export default AutoMobile;
