import { GUEST_REVIEW } from "./constant";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const starImgSrc = "/icon/star.svg";
const starImgx5 = Array.from({ length: 5 }, (_, index) => (
  <img key={index} src={starImgSrc} alt="star" style={{ margin: "0 5px" }} />
));

function GuestReview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const { inView } = useInView({
    threshold: 0.5,
    rootMargin: "0px",
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
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
          marginBottom: "80px",
        }}
      >
        CHIA SẺ TỪ ĐỐI TÁC
      </h3>

      <div className="container-fluid">
        <div className="row ">
          {GUEST_REVIEW.map(({ id, classname, src, name, position, review }) => (
            <div
              className={`col medium-6 small-12 large-3 ${isVisible ? "" : classname}`}
              key={id}
              ref={ref}
            >
              <div
                className="d-flex flex-column align-items-center pt-5 pb-3 px-4 hover-up"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 0 20px rgba(0,0,0,.1)",
                  height: "100%",
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
                <div
                  className="d-flex justify-content-center"
                  style={{
                    paddingBottom: "15px",
                    marginBottom: "15px",
                    borderBottom: "1px solid #ccc",
                  }}
                >
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
        </div>
      </div>
    </div>
  );
}

export default GuestReview;
