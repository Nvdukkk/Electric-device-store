import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem, handleInputChange } = value;
  
  return (
    <div className="row my-2 text-center pt-3">
      <div className=" col-4 col-sm-2 col-lg-2 d-flex align-items-center justify-content-center">
        <LazyLoadImage
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          effect="blur"
        />
      </div>
      <div className="col-8 col-sm-6 col-lg-2 d-flex align-items-center justify-content-end justify-content-lg-center">
        <span>{title}</span>
      </div>
      <div className="d-none col-lg-2 d-lg-flex align-items-center justify-content-center">
        <span>{price.toLocaleString("vi-VN")}</span>
      </div>
      <div className="col-6 col-sm-4 col-lg-2 my-2 my-lg-0 d-flex align-items-center justify-content-start justify-content-sm-end justify-content-lg-center">
        <div className="row">
          <span className="btn btn-black col col-3" onClick={() => decrement(id)}>
            -
          </span>
          <input
            type="text"
            value={count || 0}
            onChange={(e) => handleInputChange(e, id)}
            maxLength="4"
            className="btn btn-black col col-6"
          />
          <span className="btn btn-black col col-3" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      <div className="d-none col-lg-2 d-lg-flex align-items-center justify-content-center">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-6 col-sm-12 col-lg-2 d-flex align-items-center justify-content-end justify-content-lg-center">
        <strong>{total.toLocaleString("vi-VN")} vnđ</strong>
      </div>
    </div>
  );
}
