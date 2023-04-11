import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
function SliderImage() {

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const backgrounds = [
    'url("/image/header_background.png")',
    'url("/image/banner-slide-2.jpg")',
    'url("/image/banner-slide-3.jpg")',
  ];
  const h1Text = [
    "ĐẠI LÝ PHÂN PHỐI ĐỒ ĐIỆN",
    "NHÀ THẦU UY TÍN",
    "ĐA DẠNG CHỦNG LOẠI",
  ];
  const content = [
    "Top 1 Việt Nam",
    "Hơn 10 năm kinh nghiệm",
    "Đầy đủ thương hiệu",
  ];
  useEffect(() => {
    setShow(true);
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % backgrounds.length);
      setShow(false);
      setTimeout(() => setShow(true), 0);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="slider-container"
      style={{ backgroundImage: backgrounds[index] }}
    >
      <div className={`slider-overlay ${show ? "show" : ""}`}>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          {h1Text[index]}
        </h1>
        <h6 className="mt-4">{content[index]}</h6>
        <Link
          to="/product"
          className="btn mt-5"
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            color: "var(--mainBlue)",
            fontWeight: "600",
          }}
        >
          ĐẶT HÀNG NGAY
        </Link>
      </div>
    </div>
  );
}

export default SliderImage;
