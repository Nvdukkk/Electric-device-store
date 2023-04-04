import { GUEST_REVIEW } from "./constant";
import React from "react";

const starImgSrc = "/icon/star.svg";
const starImgx5 = Array.from({ length: 5 }, (_, index) => (
  <img key={index} src={starImgSrc} alt="star" style={{ margin: "0 5px" }} />
));

function GuestReview() {
  return (
    <div className="mt-5">
      <h3 className="text-center">CHIA SẺ TỪ ĐỐI TÁC</h3>

      <div className="row">
        {GUEST_REVIEW.map(({ id, src, name, position, review }) => (
          <div className="box col medium-6 small-12 large-3 mx-3 py-2" key={id}>
            <img src={src} alt="guest-review" />
            <h5>{name}</h5>
            <h6 style={{ fontSize: "14px" }}>{position}</h6>
            {starImgx5}
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestReview;
