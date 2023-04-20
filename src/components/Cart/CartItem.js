import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-center">
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center border-top pt-3">
        <img
          loading="lazy"
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center border-top pt-3">
        <span>{title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center border-top pt-3">
        <span>{price}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 d-flex align-items-center justify-content-center border-top pt-3">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center border-top pt-3">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center border-top pt-3">
        <strong>{total} vnđ</strong>
      </div>
    </div>
  );
}
