import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartDiscount, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-end">
            <Link to="/pay">
              <button
                className="btn btn-outline-success mb-3 px-2 px-sm-5 me-md-3 w-mw768-75"
                type="button"
              >
                Đặt hàng
              </button>
            </Link>
            <button
              className="btn btn-outline-danger mb-3 px-2 px-sm-5 w-mw768-75"
              type="button"
              onClick={() => clearCart()}
            >
              Xóa tồn bộ
            </button>
            <h5>
              <span className="me-3 text-uppercase text-bold">
                giá tạm tính:
              </span>
              <strong>{cartSubTotal} vnđ</strong>
            </h5>
            <h5>
              <span className="me-3 text-uppercase text-bold">giảm giá:</span>
              <strong>{cartDiscount} vnđ</strong>
            </h5>
            <h5>
              <span className="me-3 text-uppercase text-bold">tổng:</span>
              <strong>{cartTotal} vnđ</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
