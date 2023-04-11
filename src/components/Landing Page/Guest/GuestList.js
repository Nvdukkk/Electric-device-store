import { GUEST_LIST } from "./constant";
import React from "react";
import Slider from "react-slick";
function GuestList() {
  const settingSlider = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="text-center mt-5 px-5"
      style={{ backgroundColor: "#f5f5f5", padding: "100px 0" }}
    >
      <h3
        style={{
          fontSize: "40px",
          color: "var(--mainBlue)",
          fontWeight: "bold",
        }}
      >
        KHÁCH HÀNG
      </h3>
      <p
        style={{
          width: "80%",
          margin: "20px auto 0",
        }}
      >
        Trải qua nhiều năm làm việc, chúng tôi đã hợp tác với rất nhiều doanh
        nghiệp, cơ quan giáo dục lớn và nổi tiếng trên toàn lãnh thổ Việt Nam và
        quốc tế. Tất cả những đối tác từ trong nước tới nước ngoài đều có những
        phản hồi tích cực về giải pháp và phần mềm của chúng tôi.
      </p>
      <Slider className="mt-5" {...settingSlider}>
        {GUEST_LIST.map(({ id, src }) => (
          <div key={id} className="d-flex justify-content-center ">
            <img src={src} alt="guest-list" style={{ width: "50%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GuestList;
