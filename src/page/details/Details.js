import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { getLocalStorageIncart } from "../../utils";
import { useParams } from "react-router-dom";
import { storeProducts } from "../../data";
import { useContext } from "react";
import { ProductContext } from "../../context";
import Image from "../../components/Image";
export default function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const paramsID = parseInt(params.id);
  const product = storeProducts.filter((item) => item.id === paramsID)[0];

  if (!product) {
    navigate("/404");
  }

  const context = useContext(ProductContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{product?.title}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto col-md-5">
          <Image
            ratio="ratio-1x1"
            loading="lazy"
            src={product?.img}
            alt="product"
            className="img-fluid"
          />
        </div>
        <div className="col-10 mx-auto col-md-7">
          <h4 className="text-title text-muted mt-3 mb-2">
            Sản xuất bởi: <span>{product?.company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>{`Giá: ${product?.price.toLocaleString(
              "vi-VN"
            )} vnđ`}</strong>
          </h4>
          <h3 className="font-weight-bold mt-3 mb-2 text-blue">Tổng quan:</h3>
          <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
            {product?.info}
          </p>
          <div className="text-start">
            <Link to="/product">
              <Button className="w-mw992-100">Xem thêm sản phẩm</Button>
            </Link>
            <Link to="/cart">
              {getLocalStorageIncart(product?.id) ? (
                <Button cart className="w-mw992-100">
                  Đã có trong giỏ hàng
                </Button>
              ) : (
                <Button
                  className="w-mw992-100"
                  cart
                  onClick={() => {
                    context.addToCart(product?.id);
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
