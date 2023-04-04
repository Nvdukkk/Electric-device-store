import React, { Component } from "react";
import SliderImage from "./SliderImage";
import CardVisit from "./CardVisit";
import Guest from "./Guest/Guest";
import Footer from "../Footer/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <SliderImage />
        <CardVisit />
        <Guest />
        <Footer />
      </div>
    );
  }
}
