import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem, handleInputChange } = value;

  return (
    <>
      <div className="d-flex d-sm-none my-2 pt-3 ">
        <div className="d-flex align-items-center justify-content-center me-3">
          <img
            alt={img}
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            effect="blur"
          />
        </div>
        <div className="text-center">
          <div className=" d-flex align-items-center justify-content-end justify-content-lg-center">
            <span className="line-clamp-3">{title}</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-none d-lg-flex align-items-center justify-content-center">
              <span>{price.toLocaleString("vi-VN")}</span>
            </div>
            <span className="btn btn-black " onClick={() => decrement(id)}>
              -
            </span>
            <input
              type="text"
              value={count || 0}
              onChange={(e) => handleInputChange(e, id)}
              maxLength="4"
              className="btn btn-black col-3 fs-sm-12px"
            />
            <span className="btn btn-black " onClick={() => increment(id)}>
              +
            </span>
            <div className="d-none d-lg-flex align-items-center justify-content-center">
              <div className="cart-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash" />
              </div>
            </div>
            <div className=" p-0 fs-sm-12px">
              <strong>{total.toLocaleString("vi-VN")} vnđ</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-sm-flex row my-2 text-center pt-3 justify-content-end">
        <div className=" col-4 col-sm-2 col-lg-2 d-flex align-items-center justify-content-center">
          <img
            alt={img}
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            effect="blur"
          />
        </div>
        <div className="col-8 col-sm-6 col-lg-2 d-flex align-items-center justify-content-end justify-content-lg-center">
          <span className="line-clamp-3">{title}</span>
        </div>
        <div className="d-none col-lg-2 d-lg-flex align-items-center justify-content-center">
          <span>{price.toLocaleString("vi-VN")}</span>
        </div>
        <div className="col-5 col-sm-4 col-lg-2 my-2 my-lg-0 d-flex align-items-center justify-content-end justify-content-sm-end justify-content-lg-center">
          <div className="row">
            <span
              className="btn btn-black col col-3"
              onClick={() => decrement(id)}
            >
              -
            </span>
            <input
              type="text"
              value={count || 0}
              onChange={(e) => handleInputChange(e, id)}
              maxLength="4"
              className="btn btn-black col col-6 fs-sm-12px"
            />
            <span
              className="btn btn-black col col-3"
              onClick={() => increment(id)}
            >
              +
            </span>
          </div>
        </div>
        <div className="d-none col-lg-2 d-lg-flex align-items-center justify-content-center">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-4 p-0 col-sm-12 col-lg-2 d-flex align-items-center justify-content-end justify-content-lg-center fs-sm-12px">
          <strong>{total.toLocaleString("vi-VN")} vnđ</strong>
        </div>
      </div>
    </>
  );
}
