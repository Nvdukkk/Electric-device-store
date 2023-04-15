import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="col-10 mx-auto text-center text-title text-uppercase">
        <h1
          style={{
            letterSpacing: "0",
            fontWeight: "600",
          }}
        >
          Giỏ hàng của bạn đang trống
        </h1>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <img
            loading="lazy"
            src="../image/empty-cart.png"
            style={{
              width: "50%",
            }}
            alt="Giỏ hàng của bạn đang trống"
          />
        </div>
      </div>
    </div>
  );
}
