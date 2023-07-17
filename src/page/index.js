import React from "react";
import SliderImage from "../components/Landing Page/SliderImage";
import CardVisit from "../components/Landing Page/CardVisit";
import Guest from "../components/Landing Page/Guest/Guest";
import AboutUs from "../components/Landing Page/AboutUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <SliderImage />
      <CardVisit />
      <AboutUs />
      <Guest />
      <Footer />
    </div>
  );
}
