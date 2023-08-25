import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroHotel from "../../components/heroHotel/HeroHotel";
import HotelGallery from "../../components/hotelGallery/HotelGallery";
import BookYourStay from "../../components/bookYourStay/BookYourStay";

const Hotel = () => {
  return (
    <>
      <Header />
      <HeroHotel />
      <HotelGallery />
      <BookYourStay />
      <Footer />
    </>
  );
};

export default Hotel;
