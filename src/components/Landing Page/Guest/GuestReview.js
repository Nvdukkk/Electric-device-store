import { GUEST_REVIEW } from "./constant";
import React from "react";
import Slider from "react-slick";

const starImgSrc = "/icon/star.svg";
const starImgx5 = Array.from({ length: 5 }, (_, index) => (
  <img key={index} src={starImgSrc} alt="star" style={{ margin: "0 5px" }} />
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
  };
  return (
    <div
      style={{
        margin: "100px 0",
      }}
    >
      <h3
        className="text-center"
        style={{
          fontSize: "40px",
          color: "var(--mainBlue)",
          fontWeight: "bold",
        }}
      >
        CHIA SẺ TỪ ĐỐI TÁC
      </h3>

      <div className="container-lg">
        <Slider {...settingSlider}>
          {GUEST_REVIEW.map(({ id, src, name, position, review }) => (
            <div key={id}>
              <div
                className="d-flex flex-column align-items-center pt-5 pb-3 px-5"
                style={{
                  // borderRadius: "20px",
                  // boxShadow: "0 0 20px rgba(0,0,0,.1)",
                  // height: "100%",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: "100px",
                    marginBottom: "40px",
                  }}
                >
                  <img src={src} alt="guest-review" style={{ width: "100%" }} />
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
  );
}

export default GuestReview;
