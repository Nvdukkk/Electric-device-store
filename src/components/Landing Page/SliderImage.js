import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import { BANNER_SLIDER } from "./constant";
import Image from "../Image";

function SliderImage() {
  const settingSlider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    
  };
  return (
    <div id="slider">
      <Slider {...settingSlider}>
        {BANNER_SLIDER.map((item, index) => (
          <div key={index} className="position-relative">
            <Image src={item.img} />
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center glow">
              <h1 className="fs-45 ">
                {item.title}
              </h1>
              <p className="mt-4">{item.content}</p>

              <Link
                to="/product"
                className="btn mt-5"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "600",
                }}
              >
                ĐẶT HÀNG NGAY
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderImage;
