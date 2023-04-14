import React from "react";

export default function CartColumns() {
  return (
    <div className="container text-center d-none d-lg-block mt-5">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p>Hình ảnh</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p>Tên sản phẩm</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p>Giá</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p>Số lượng</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p>Xóa</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 font-weight-bold">
          <p>Tổng</p>
        </div>
      </div>
    </div>
  );
}
