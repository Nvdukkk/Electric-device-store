import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import Image from "../Image";
 
const BANNER_SLIDER = [
  {
    title: 'ĐẠI LÝ PHÂN PHỐI',
    content: 'Top 1 Việt Nam',
    img: '/image/banner-slide-1.jpg',
  },
  {
    title: 'ĐA DẠNG CHỦNG LOẠI',
    content: 'Đầy đủ thương hiệu',
    img: '/image/banner-slide-2.jpg',
  },
  {
    title: 'NHÀ THẦU UY TÍN',
    content: 'Hơn 10 năm kinh nghiệm',
    img: '/image/banner-slide-3.jpg',
  },
]

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
              <h1 className="fs-45 ">{item.title}</h1>
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
