import React from "react";
import Slider from "react-slick";

const GUEST_LIST = [
  {
    id: 1,
    src: "/guest image/logo-cadisun.png",
  },
  {
    id: 2,
    src: "/guest image/logo-lsvinaa.png",
  },
  {
    id: 3,
    src: "/guest image/logo-rang-dong.png",
  },
  {
    id: 4,
    src: "/guest image/logo-vivc.png",
  },
  {
    id: 5,
    src: "/guest image/logo-cadivi.png",
  },
  {
    id: 6,
    src: "/guest image/logo-datxanh.png",
  },
];

function GuestList() {
  const settingSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className="text-center px-5"
      style={{ backgroundColor: "#f5f5f5", padding: "100px 0" }}
    >
      <div className="container">
        <h3
          style={{
            fontSize: "40px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          KHÁCH HÀNG
        </h3>
        <p className="line-clamp-4 w-75 mt-3 mx-auto">
          Trải qua nhiều năm hoạt động, chúng tôi đã hợp tác thành công với
          nhiều doanh nghiệp và tổ chức trong ngành xây dựng, bao gồm cả các
          công ty trong và ngoài nước. Tất cả đối tác đều có những phản hồi tích
          cực về các giải pháp và dịch vụ của chúng tôi, đóng góp quan trọng vào
          sự phát triển và tăng cường hiệu quả hoạt động của họ trong lĩnh vực
          xây dựng.
        </p>
        <Slider className="mt-5" {...settingSlider}>
          {GUEST_LIST.map(({ id, src }) => (
            <div key={id} className="d-flex justify-content-center ">
              <div className="guest-box-list">
                <img loading="lazy" src={src} alt="guest-list" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GuestList;
