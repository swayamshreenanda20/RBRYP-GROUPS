import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lounge from "./pages/lounge/Lounge";
import AutoMobile from "./pages/autoMobile/AutoMobile";
import Jewellery from "./pages/jewellery/Jewellery";
import Cloth from "./pages/cloth/Cloth";
import Restaurant from "./pages/resraurant/Restaurant";
import Hotel from "./pages/hotel/Hotel";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lounge" element={<Lounge />} />
          <Route path="/auto-mobile" element={<AutoMobile />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
