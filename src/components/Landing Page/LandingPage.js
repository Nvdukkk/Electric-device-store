import React from "react";
import SliderImage from "./SliderImage";
import CardVisit from "./CardVisit";
import Guest from "./Guest/Guest";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

export default function LandingPage() {
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

