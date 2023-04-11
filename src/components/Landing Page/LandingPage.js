import React, { Component } from "react";
import SliderImage from "./SliderImage";
import CardVisit from "./CardVisit";
import Guest from "./Guest/Guest";
import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs";

export default class LandingPage extends Component {
  render() {
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
}
