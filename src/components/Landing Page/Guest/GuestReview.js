import React from "react";
import Slider from "react-slick";

const GUEST_REVIEW = [
  {
    id: 1,
    src: "image/guest1.png",
    name: "Bà: Nguyễn Thị Mơ",
    position: "Tập đoàn Vingroup",
    review:
      "Sản phẩm của Thuận An rất tốt, tôi rất yên tâm tin dùng, uy tín chất lượng!",
  },
  {
    id: 2,
    src: "image/guest2.png",
    name: "Bà: Hoàng Thúy Nga",
    position: "Tập đoàn Hòa Bình",
    review:
      "Tôi đã sử dụng sản phẩm của Thuận An trong nhiều năm và không bao giờ thất vọng về chất lượng và hiệu quả của chúng.",
  },
  {
    id: 3,
    src: "image/guest3.png",
    name: "Ông: Vũ Minh Đức",
    position: "Tổng công ty Xây dựng Hà Nội",
    review:
      "Tôi sẽ giới thiệu sản phẩm này cho bạn bè và người thân của tôi.",
  },
  {
    id: 4,
    src: "image/guest4.png",
    name: "Bà: Nguyễn Thu Hương",
    position: "Công ty Cổ phần Xây dựng Coteccons",
    review:
      "Thực sự là một sản phẩm tuyệt vời với chất lượng tốt và giá thành hợp lý",
  },
];

const starImgx5 = Array.from({ length: 5 }, (_, index) => (
  <img
    loading="lazy"
    key={index}
    src="/icon/star.svg"
    alt="star"
    style={{ margin: "0 5px" }}
  />
));

function GuestReview() {
  const settingSlider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div
      style={{
        margin: "100px 0",
      }}
    >
      <div className="container">
        <h3
          className="text-center"
          style={{
            fontSize: "40px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          CHIA SẺ TỪ ĐỐI TÁC
        </h3>

        <div>
          <Slider {...settingSlider}>
            {GUEST_REVIEW.map(({ id, src, name, position, review }) => (
              <div key={id}>
                <div className="d-flex flex-column align-items-center pt-5 pb-3 px-5">
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      overflow: "hidden",
                      borderRadius: "100px",
                      marginBottom: "40px",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={src}
                      alt="guest-review"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <h5
                    style={{
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    {name}
                  </h5>
                  <h6
                    style={{
                      fontSize: "12px",
                      marginBottom: "20px",
                      textAlign: "center",
                      lineHeight: "16px",
                    }}
                  >
                    {position}
                  </h6>
                  <div className="d-flex justify-content-center mb-5">
                    {starImgx5}
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {review}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default GuestReview;
