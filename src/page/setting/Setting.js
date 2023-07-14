import React from "react";
import { PRODUCT_CATEGORY } from "../../constant/product";
import { Link } from "react-router-dom";

export default function Setting() {
  return (
    <div className="">
      <div
        className="bg-black text-white-50 h-100 px-3 py-4"
        style={{ width: "200px", minHeight: "90vh" }}
      >
        <h6>Quản lý sản phẩm</h6>
        {PRODUCT_CATEGORY.map(({ title, category }, index) => (
          <Link
            to={`/setting/${category}`}
            key={index}
            className="d-flex text-white"
          >
            <p>{title}</p>
          </Link>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}


