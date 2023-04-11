import React from "react";

export default function CartColumns() {
  return (
    <div
      className="container text-center d-none d-lg-block "
      style={{
        marginTop: "50px",
      }}
    >
      <div className="row">
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p className="">Hình ảnh</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p className="">Tên sản phẩm</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p className="">Giá</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p className="">Số lượng</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p className="">Xóa</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p className="">Tổng</p>
        </div>
      </div>
    </div>
  );
}
