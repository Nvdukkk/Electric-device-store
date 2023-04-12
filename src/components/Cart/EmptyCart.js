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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3609561-3016826.png"
            style={{
              width: "70%",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
