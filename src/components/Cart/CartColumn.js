import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="">Hình ảnh</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="">Tên sản phẩm</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="">Giá</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="">Số lượng</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="">Xóa</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="">Tổng</p>
        </div>
      </div>
    </div>
  );
}
